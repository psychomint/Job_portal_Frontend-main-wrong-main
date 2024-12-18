import { useState} from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Briefcase, MapPin, DollarSign, Clock } from 'lucide-react';

const JobDescription = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const jobData = {
    title: 'Senior Frontend Engineer',
    company: 'Acme Innovations',
    location: 'Remote',
    salaryRange: '$100,000 - $150,000',
    employmentType: 'Full-time',
    experienceLevel: 'Senior',
    description: (
      <div>
        <p>We are seeking a highly skilled Senior Frontend Engineer to join our team and help build cutting-edge web applications.</p>
        <p>As a Senior Frontend Engineer, you will be responsible for:</p>
        <ul>
          <li>Leading the development of complex frontend features</li>
          <li>Mentoring junior engineers and contributing to code reviews</li>
          <li>Collaborating with backend engineers and designers</li>
          <li>Staying up-to-date with the latest frontend technologies</li>
        </ul>
      </div>
    ),
    requiredSkills: ['React', 'JavaScript', 'HTML', 'CSS'],
    preferredSkills: ['Redux', 'TypeScript', 'GraphQL'],
    benefits: [
      'Competitive salary and benefits package',
      'Flexible work arrangements',
      'Generous vacation time',
      'Professional development opportunities',
      'Health insurance',
      '401(k) matching',
    ],
    applicationProcess: (
      <div>
        <p>To apply for this position, please submit your resume and portfolio to [email protected]</p>
        <p>You can also apply directly through our careers page: <a href="https://acmeinnovations.com/careers" className="text-blue-600">https://acmeinnovations.com/careers</a></p>
      </div>
    ),
  };

  const {
    title,
    company,
    location,
    salaryRange,
    employmentType,
    experienceLevel,
    description,
    requiredSkills,
    preferredSkills,
    benefits,
    applicationProcess,
  } = jobData;

  const isApplied = true;

  return (
    <div className="job-description bg-gray-100 dark:bg-gray-800 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-full sm:w-3/4">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h2>
            <div className="flex items-center mb-4">
              <p className="text-gray-600 dark:text-gray-400 mr-4">{company}</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-green-500 text-white px-3 py-1 rounded-full">
                <Briefcase className="inline mr-2 text-white" size={20} /> {employmentType}
              </Badge>
              <Badge className="bg-fuchsia-500 text-white px-3 py-1 rounded-full">
                <MapPin className="inline mr-2 text-white" size={20} /> {location}
              </Badge>
              <Badge className="bg-orange-500 text-white px-3 py-1 rounded-full">
                <Clock className="inline mr-2 text-white" size={20} /> {experienceLevel}
              </Badge>
              <Badge className="bg-yellow-500 text-white px-3 py-1 rounded-full">
                <DollarSign className="inline mr-2 text-white" size={20} /> {salaryRange}
              </Badge>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Button
              className={`rounded-lg px-6 py-2 text-white font-medium transition-all duration-200 ${isApplied
                  ? 'bg-gray-300 text-gray-500 pointer-events-none'
                  : 'bg-sky-600 hover:bg-sky-700'
                }`}
            >
              {isApplied ? 'Already Applied' : 'Apply Now'}
            </Button>
          </div>
        </div>

        {/* Toggle Dark Mode Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleDarkMode}
            className="bg-gray-500 text-white p-2 rounded-full hover:bg-gray-700 transition"
          >
            Toggle Dark Mode
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 my-6"></div>

        {/* Description Section */}
        <div className="mb-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Job Description</h3>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>

        {/* Required Skills Section */}
        <div className="mb-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Required Skills</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            {requiredSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Preferred Skills Section */}
        <div className="mb-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Preferred Skills</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            {preferredSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Benefits Section */}
        <div className="mb-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Benefits</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>

        {/* Application Process Section */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How to Apply</h3>
          <p className="text-gray-700 dark:text-gray-300">{applicationProcess}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
