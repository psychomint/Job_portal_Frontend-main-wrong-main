import Job from './Job';
import { ScrollArea } from './ui/scroll-area';

const randomJobs = [
  {
    jobTitle: 'Frontend Developer',
    companyName: 'TechCorp',
    companyLogo: 'https://via.placeholder.com/50', // Replace with SVG or real image URL
    location: 'Remote',
    salary: '$70k - $90k',
    jobType: 'Full-Time',
    description: 'Build and maintain responsive UIs using React and Tailwind CSS.',
    deadline: '30th Nov 2024',
  },
  {
    jobTitle: 'Frontend Developer',
    companyName: 'TechCorp',
    companyLogo: 'https://via.placeholder.com/50', // Replace with SVG or real image URL
    location: 'Remote',
    salary: '$70k - $90k',
    jobType: 'Full-Time',
    description: 'Build and maintain responsive UIs using React and Tailwind CSS.',
    deadline: '30th Nov 2024',
  },
  {
    jobTitle: 'Backend Engineer',
    companyName: 'Innovatech',
    companyLogo: 'https://via.placeholder.com/50', // Replace with SVG or real image URL
    location: 'New York, NY',
    salary: '$80k - $100k',
    jobType: 'Part-Time',
    description: 'Develop scalable APIs and handle database operations using Node.js.',
    deadline: '15th Dec 2024',
  },
  {
    jobTitle: 'Frontend Developer',
    companyName: 'TechCorp',
    companyLogo: 'https://via.placeholder.com/50', // Replace with SVG or real image URL
    location: 'Remote',
    salary: '$70k - $90k',
    jobType: 'Full-Time',
    description: 'Build and maintain responsive UIs using React and Tailwind CSS.',
    deadline: '30th Nov 2024',
  },
  {
    jobTitle: 'Backend Engineer',
    companyName: 'Innovatech',
    companyLogo: 'https://via.placeholder.com/50', // Replace with SVG or real image URL
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
    companyLogo: 'https://via.placeholder.com/50', // Replace with SVG or real image URL
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
    companyLogo: 'https://via.placeholder.com/50', // Replace with SVG or real image URL
    location: 'New York, NY',
    salary: '$80k - $100k',
    positions: 48,
    jobType: 'Part-Time',
    description: 'Develop scalable APIs and handle database operations using Node.js.',
    deadline: '15th Dec 2024',
  },
];


const Browse = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Search Results ({randomJobs.length})
        </h2>
        <div className="flex-1 mt-4 lg:mt-0 h-full">
          <ScrollArea className="h-[calc(100vh-2.5rem)] pr-4">
            <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {randomJobs.slice(0, 9).map((job, index) => (
                <Job key={index} {...job} />
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};


export default Browse;
