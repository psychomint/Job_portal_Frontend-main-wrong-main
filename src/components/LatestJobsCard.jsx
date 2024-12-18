import PropTypes from 'prop-types';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LatestJobsCard = ({
    jobTitle,
    companyName,
    companyLogo,
    location,
    salary,
    jobType,
    description,
    deadline,
    experienceLevel,
    positions,
}) => {
    const navigate = useNavigate();
    const jobId = 'uhuijhkgfdxrezhxj';

    const salaryRange = salary
        ? `${(salary[0] / 1000).toFixed(0)}K - ${(salary[1] / 1000).toFixed(0)}K`
        : 'Salary not specified';

    const formatDate = (date) => {
        const now = new Date();
        const postedDate = new Date(date);
        const diffInMs = now - postedDate;
        const daysAgo = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        if (daysAgo === 0) return 'Posted today';
        if (daysAgo === 1) return 'Posted 1 day ago';
        return `Posted ${daysAgo} days ago`;
    };

    const getRemainingDays = (deadline) => {
        const currentDate = new Date();
        const deadlineDate = new Date(deadline);
        const timeDifference = deadlineDate - currentDate;
        const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));
        return daysRemaining > 0 ? `${daysRemaining} days left` : 'Deadline passed';
    };

    const deadlineText = getRemainingDays(deadline);

    return (
        <div className="max-w-lg mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="p-4 flex justify-between items-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">{formatDate('2024-12-12')}</p>
                <button
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                    aria-label="Bookmark job"
                >
                    <Bookmark className="text-gray-500 dark:text-gray-300" />
                </button>
            </div>

            <div className="p-4 flex items-center">
                <img
                    src={companyLogo}
                    alt={`${companyName} logo`}
                    className="h-16 w-16 rounded-full border border-gray-300 dark:border-gray-600 object-cover"
                />
                <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{jobTitle}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{companyName}</p>
                </div>
            </div>

            <div className="p-4 space-y-2">
                <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-xs">
                        {location || 'Location not specified'}
                    </Badge>
                    <Badge className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-xs">
                        {salaryRange}
                    </Badge>
                    <Badge className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-xs">
                        {jobType}
                    </Badge>
                    <Badge className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-xs">
                        {positions ? `${positions} positions` : 'Positions not specified'}
                    </Badge>
                    {experienceLevel && (
                        <Badge className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-xs">
                            {experienceLevel}
                        </Badge>
                    )}
                    <Badge className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-xs">
                        {deadlineText}
                    </Badge>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                    {description || 'Description not available'}
                </p>
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <Button
                    className="text-sm font-medium px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md transition hover:bg-gray-200 dark:hover:bg-gray-600"
                    onClick={() => navigate(`/jobDescription/${jobId}`)}
                >
                    View Details
                </Button>

                <Button
                    className="text-sm font-medium px-4 py-2 bg-blue-600 text-white rounded-md transition hover:bg-blue-700"
                >
                    Apply Now
                </Button>
            </div>
        </div>
    );
};

LatestJobsCard.propTypes = {
    jobTitle: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companyLogo: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    salary: PropTypes.arrayOf(PropTypes.number).isRequired,
    jobType: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    positions: PropTypes.number,
    experienceLevel: PropTypes.string,
};

LatestJobsCard.defaultProps = {
    positions: 0,
    experienceLevel: 'Entry Level',
};

export default LatestJobsCard;
