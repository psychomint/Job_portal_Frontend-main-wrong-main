import { Badge } from './ui/badge';
import { Button } from './ui/button';
import PropTypes from 'prop-types'; // Import PropTypes

const Job = ({
    jobTitle,
    companyName,
    companyLogo,
    location,
    salary,
    jobType,
    description,
    deadline,
    positions,
}) => {
    return (
        <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center mb-3 sm:mb-0">
                    <img
                        src={companyLogo}
                        alt={`${companyName} logo`}
                        className="h-16 w-16 object-cover rounded-full border-gray-300 dark:border-gray-600"
                    />
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{jobTitle}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{companyName}</p>
                    </div>
                </div>
                {/* Job Type Badge aligned upwards */}
                <Badge
                    variant="outline"
                    className="text-xs py-1 px-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-[2px] relative top-[-7px] hover:scale-105 transition-transform duration-200"
                >
                    {jobType}
                </Badge>
            </div>

            {/* Content Section */}
            <div className="p-5 space-y-4">
                {/* Location, Salary, and Positions */}
                <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4">
                    <Badge className="bg-blue-100 dark:bg-blue-600 text-blue-600 dark:text-blue-100 py-1 px-3 rounded-full hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors duration-200">
                        {location}
                    </Badge>
                    <Badge className="bg-green-100 dark:bg-green-600 text-green-600 dark:text-green-100 py-1 px-3 rounded-full hover:bg-green-200 dark:hover:bg-green-700 transition-colors duration-200">
                        {salary}
                    </Badge>
                    <Badge className="bg-purple-100 dark:bg-purple-600 text-purple-600 dark:text-purple-100 py-1 px-3 rounded-full hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors duration-200">
                        {positions} positions
                    </Badge>
                </div>

                {/* Job Description */}
                <p className="text-sm text-gray-700 dark:text-gray-400 line-clamp-4">{description}</p>
            </div>

            <div className="p-5 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 flex flex-col sm:flex-row items-center justify-between">
                {/* Apply Button */}
                <Button className="px-6 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 rounded-lg shadow-md transition-all duration-200">
                    Apply Now
                </Button>
                <p className="text-xs text-blue-800 dark:text-blue-300 mt-3 sm:mt-0">
                    <span className="font-medium">Deadline:</span> {deadline}
                </p>
            </div>
        </div>
    );
};

// Prop validation
Job.propTypes = {
    jobTitle: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companyLogo: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    jobType: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    positions: PropTypes.number.isRequired,
};

export default Job;
