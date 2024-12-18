import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'sonner';
import { USER_API_END_POINT } from '@/utils/constant';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/authSlice';

const UpdateProfileDialog = ({ onSave }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        fullName: user?.fullName || '',
        email: user?.email || '',
        phoneNumber: user?.phoneNumber || '',
        bio: user?.profile?.bio || '',
        skills: user?.skills || [],
        resume: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const handleSkillsChange = (e) => {
        const skillsString = e.target.value;
        const skillsArray = skillsString
            .split(',')
            .map((skill) => skill.trim())
            .filter((skill) => skill !== '');
        setInput((prev) => ({ ...prev, skills: skillsArray }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        setInput((prev) => ({ ...prev, resume: file }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('fullName', input.fullName);
        formData.append('email', input.email);
        formData.append('phoneNumber', input.phoneNumber);
        formData.append('bio', input.bio);
        formData.append('skills', input.skills.join(',')); // Convert array to comma-separated string
        if (input.resume) {
            formData.append('resume', input.resume);
        }

        try {
            const response = await axios.patch(
                `${USER_API_END_POINT}/user/update-account`,
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    withCredentials: true,
                }
            );

            if (response.data.success) {
                dispatch(setUser(response.data.user));
                toast.success('Profile updated successfully!');
                onSave && onSave(response.data.user);
            } else {
                toast.error(response.data.message || 'Failed to update profile.');
            }
        } catch (error) {
            const errorMessage =
                error.response?.data?.message ||
                error.message ||
                'Something went wrong while updating the profile.';
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <span className="cursor-pointer">Edit Profile</span>
            </DialogTrigger>

            <DialogContent className="sm:max-w-lg bg-white dark:bg-gray-900 text-black dark:text-white max-h-[75vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Update Your Profile</DialogTitle>
                    <DialogDescription>
                        Update your profile information below. Click "Save" when you're done.
                    </DialogDescription>
                </DialogHeader>

                <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <div>
                        <Label htmlFor="fullName">Name</Label>
                        <Input
                            id="fullName"
                            name="fullName"
                            value={input.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            value={input.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            type="email"
                        />
                    </div>

                    <div>
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input
                            id="phoneNumber"
                            name="phoneNumber"
                            value={input.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div>
                        <Label htmlFor="skills">Skills</Label>
                        <Input
                            id="skills"
                            name="skills"
                            value={input.skills.join(', ')} // Convert array to comma-separated string
                            onChange={handleSkillsChange}
                            placeholder="Enter your skills (comma-separated)"
                        />
                    </div>

                    <div>
                        <Label htmlFor="resume">Resume</Label>
                        <Input
                            id="resume"
                            name="resume"
                            type="file"
                            accept="application/pdf"
                            onChange={handleFileChange}
                        />
                    </div>

                    <div>
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                            id="bio"
                            name="bio"
                            value={input.bio}
                            onChange={handleInputChange}
                            placeholder="Tell us about yourself"
                        />
                    </div>

                    <DialogFooter>
                        <Button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateProfileDialog;
