import LatestJobsCard from './LatestJobsCard';

const randomJobs = [
    {
        jobTitle: 'Frontend Developer',
        companyName: 'TechCorp',
        companyLogo: 'https://via.placeholder.com/50',
        location: 'Remote',
        salary: '$70k - $90k',
        jobType: 'Full-Time',
        description: 'Build and maintain responsive UIs using React and Tailwind CSS.',
        deadline: '30th Nov 2024',
    },
    {
        jobTitle: 'Frontend Developer',
        companyName: 'TechCorp',
        companyLogo: 'https://via.placeholder.com/50',
        location: 'Remote',
        salary: '$70k - $90k',
        jobType: 'Full-Time',
        description: 'Build and maintain responsive UIs using React and Tailwind CSS.',
        deadline: '30th Nov 2024',
    },
    {
        jobTitle: 'Backend Engineer',
        companyName: 'Innovatech',
        companyLogo: 'https://via.placeholder.com/50',
        location: 'New York, NY',
        salary: '$80k - $100k',
        jobType: 'Part-Time',
        description: 'Develop scalable APIs and handle database operations using Node.js.',
        deadline: '15th Dec 2024',
    },
    {
        jobTitle: 'Frontend Developer',
        companyName: 'TechCorp',
        companyLogo: 'https://via.placeholder.com/50',
        location: 'Remote',
        salary: '$70k - $90k',
        jobType: 'Full-Time',
        description: 'Build and maintain responsive UIs using React and Tailwind CSS.',
        deadline: '30th Nov 2024',
    },
    {
        jobTitle: 'Backend Engineer',
        companyName: 'Innovatech',
        companyLogo: 'https://via.placeholder.com/50',
        location: 'New York, NY',
        salary: '$80k - $100k',
        positions: 4,
        jobType: 'Part-Time',
        description: 'Develop scalable APIs and handle database operations using Node.js.',
        deadline: '15th Dec 2024',
    },
    {
        jobTitle: 'Frontend Developer',
        companyName: 'TechCorp',
        companyLogo: 'https://via.placeholder.com/50',
        location: 'Remote',
        salary: '$70k - $90k',
        positions: 6,
        jobType: 'Full-Time',
        description: 'Build and maintain responsive UIs using React and Tailwind CSS.',
        deadline: '30th Nov 2024',
    },
    {
        jobTitle: 'Backend Engineer',
        companyName: 'Innovatech',
        companyLogo: 'https://via.placeholder.com/50',
        location: 'New York, NY',
        salary: '$80k - $100k',
        positions: 48,
        jobType: 'Part-Time',
        description: 'Develop scalable APIs and handle database operations using Node.js.',
        deadline: '15th Dec 2024',
    },
];

const LatestJobs = () => {
    return (
        <div className="bg-white dark:bg-gray-800 py-12">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
                Latest & Top <span className="text-blue-700">Job Openings</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                {randomJobs.slice(0, 9).map((job, index) => (
                    <LatestJobsCard key={index} {...job} />
                ))}
            </div>
        </div>
    );
};

export default LatestJobs;
