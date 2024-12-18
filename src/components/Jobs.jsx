import FilterCard from './filterCard';
import LatestJobsCard from './LatestJobsCard';
import { ScrollArea } from './ui/scroll-area';
import { useState } from 'react';

const randomJobs = [
  {
    jobTitle: 'Frontend Developer',
    companyName: 'TechCorp',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [0, 900000],
    jobType: 'Full-Time',
    description: 'Build and maintain responsive UIs using React and Tailwind CSS.',
    deadline: '2025-12-12',
    experienceLevel: 'Entry Level',
  },
  {
    jobTitle: 'Backend Engineer',
    companyName: 'Innovatech',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'New York, NY',
    salary: [800000, 1000000],
    jobType: 'Part-Time',
    description: 'Develop scalable APIs and handle database operations using Node.js.',
    deadline: '2024-12-15',
    experienceLevel: 'Mid Level',
  },
  {
    jobTitle: 'Data Scientist',
    companyName: 'DataX Solutions',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'San Francisco, CA',
    salary: [1200000, 1500000],
    jobType: 'Full-Time',
    description: 'Analyze large datasets and create predictive models using Python and R.',
    deadline: '2024-12-10',
    experienceLevel: 'Senior Level',
  },
  {
    jobTitle: 'UX/UI Designer',
    companyName: 'Designify',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'London, UK',
    salary: [600000, 800000],
    jobType: 'Full-Time',
    description: 'Design intuitive user interfaces and optimize user experience for web applications.',
    deadline: '2024-12-05',
    experienceLevel: 'Mid Level',
  },
  {
    jobTitle: 'DevOps Engineer',
    companyName: 'CloudWave',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [1000000, 1200000],
    jobType: 'Contract',
    description: 'Manage cloud infrastructure and automate deployment processes using AWS and Docker.',
    deadline: '2024-12-20',
    experienceLevel: 'Senior Level',
  },
  {
    jobTitle: 'Full Stack Developer',
    companyName: 'TechSolutionz',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [900000, 1100000],
    jobType: 'Full-Time',
    description: 'Develop both frontend and backend using React, Node.js, and MongoDB.',
    deadline: '2024-12-25',
    experienceLevel: 'Mid Level',
  },
  {
    jobTitle: 'Machine Learning Engineer',
    companyName: 'AI Innovations',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Berlin, Germany',
    salary: [1500000, 1800000],
    jobType: 'Part-Time',
    description: 'Build and deploy machine learning models for AI-driven products.',
    deadline: '2024-12-30',
    experienceLevel: 'Lead',
  },
  {
    jobTitle: 'Project Manager',
    companyName: 'FutureTech',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'New York, NY',
    salary: [1200000, 1500000],
    jobType: 'Full-Time',
    description: 'Oversee the execution of complex tech projects, ensuring timely and efficient delivery.',
    deadline: '2025-01-15',
    experienceLevel: 'Senior Level',
  },
  {
    jobTitle: 'Software Architect',
    companyName: 'GlobalTech Solutions',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'San Francisco, CA',
    salary: [1600000, 2000000],
    jobType: 'Full-Time',
    description: 'Design and implement high-level architecture for large-scale software systems.',
    deadline: '2025-01-01',
    experienceLevel: 'Lead',
  },
  {
    jobTitle: 'Mobile App Developer',
    companyName: 'MobileTech',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Toronto, Canada',
    salary: [850000, 1050000],
    jobType: 'Part-Time',
    description: 'Develop mobile applications for iOS and Android using React Native.',
    deadline: '2024-12-10',
    experienceLevel: 'Mid Level',
  },
  {
    jobTitle: 'Cybersecurity Analyst',
    companyName: 'SecureNet',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [1100000, 1400000],
    jobType: 'Full-Time',
    description: 'Monitor and protect company networks from cyber threats and vulnerabilities.',
    deadline: '2024-12-15',
    experienceLevel: 'Senior Level',
  },
  {
    jobTitle: 'Marketing Specialist',
    companyName: 'GrowthHacker Inc.',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'London, UK',
    salary: [700000, 900000],
    jobType: 'Contract',
    description: 'Develop and execute digital marketing campaigns to drive traffic and engagement.',
    deadline: '2024-12-20',
    experienceLevel: 'Mid Level',
  },
  {
    jobTitle: 'Cloud Engineer',
    companyName: 'CloudWorks',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [1200000, 1400000],
    jobType: 'Full-Time',
    description: 'Design and implement scalable cloud infrastructure using AWS and Azure.',
    deadline: '2025-02-01',
    experienceLevel: 'Lead',
  },
  {
    jobTitle: 'HR Manager',
    companyName: 'PeopleFirst',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [900000, 1100000],
    jobType: 'Full-Time',
    description: 'Manage human resources functions, including recruitment, employee relations, and payroll.',
    deadline: '2025-03-01',
    experienceLevel: 'Senior Level',
  },
  {
    jobTitle: 'Legal Advisor',
    companyName: 'LawFirm LLC',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Chicago, IL',
    salary: [1500000, 1700000],
    jobType: 'Contract',
    description: 'Provide legal counsel and advice on corporate governance and compliance issues.',
    deadline: '2025-01-20',
    experienceLevel: 'Lead',
  },
  {
    jobTitle: 'SEO Specialist',
    companyName: 'SEO Masters',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [600000, 800000],
    jobType: 'Part-Time',
    description: 'Optimize website content for search engines to increase traffic and improve rankings.',
    deadline: '2025-04-01',
    experienceLevel: 'Entry Level',
  },
  {
    jobTitle: 'Business Analyst',
    companyName: 'BizSolutions',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Los Angeles, CA',
    salary: [1000000, 1300000],
    jobType: 'Full-Time',
    description: 'Analyze business needs, develop strategies, and implement solutions for growth.',
    deadline: '2024-12-30',
    experienceLevel: 'Mid Level',
  },
  {
    jobTitle: 'Video Editor',
    companyName: 'Creative Studios',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [800000, 1000000],
    jobType: 'Part-Time',
    description: 'Edit video content for promotional campaigns, tutorials, and social media.',
    deadline: '2024-12-22',
    experienceLevel: 'Entry Level',
  },
  {
    jobTitle: 'Database Administrator',
    companyName: 'Data Systems Inc.',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Boston, MA',
    salary: [1000000, 1300000],
    jobType: 'Contract',
    description: 'Manage and optimize database systems for large-scale operations.',
    deadline: '2025-06-01',
    experienceLevel: 'Senior Level',
  },
  {
    jobTitle: 'IT Support Specialist',
    companyName: 'TechSupport Co.',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Dallas, TX',
    salary: [500000, 700000],
    jobType: 'Full-Time',
    description: 'Provide technical support and troubleshooting for internal teams and clients.',
    deadline: '2024-12-18',
    experienceLevel: 'Entry Level',
  },
  {
    jobTitle: 'Content Writer',
    companyName: 'Content Creators',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [600000, 800000],
    jobType: 'Contract',
    description: 'Write blog posts, articles, and marketing copy for various clients.',
    deadline: '2025-03-25',
    experienceLevel: 'Entry Level',
  },
  {
    jobTitle: 'Business Development Manager',
    companyName: 'GrowthForce',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'San Diego, CA',
    salary: [1100000, 1300000],
    jobType: 'Full-Time',
    description: 'Identify business opportunities, build client relationships, and increase sales.',
    deadline: '2025-02-15',
    experienceLevel: 'Mid Level',
  },
  {
    jobTitle: 'Cloud Solutions Architect',
    companyName: 'SkyCloud',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [1400000, 1700000],
    jobType: 'Full-Time',
    description: 'Design and implement cloud-based solutions using AWS and Azure.',
    deadline: '2024-12-25',
    experienceLevel: 'Senior Level'
  },
  {
    jobTitle: 'Data Engineer',
    companyName: 'DataWiz',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'New York, NY',
    salary: [1100000, 1300000],
    jobType: 'Contract',
    description: 'Build and maintain robust data pipelines and ETL processes.',
    deadline: '2024-12-10',
    experienceLevel: 'Mid Level'
  },
  {
    jobTitle: 'Blockchain Developer',
    companyName: 'ChainTech',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'San Francisco, CA',
    salary: [1500000, 2000000],
    jobType: 'Full-Time',
    description: 'Develop blockchain applications using Ethereum and Solidity.',
    deadline: '2024-12-01',
    experienceLevel: 'Lead'
  },
  {
    jobTitle: 'Full Stack Developer',
    companyName: 'FullStackPro',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [1000000, 1200000],
    jobType: 'Part-Time',
    description: 'Work on both frontend and backend development for web applications.',
    deadline: '2024-12-12',
    experienceLevel: 'Entry Level'
  },
  {
    jobTitle: 'Cybersecurity Engineer',
    companyName: 'CyberSecure',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [1300000, 1600000],
    jobType: 'Full-Time',
    description: 'Develop security protocols and defend systems from cyberattacks.',
    deadline: '2024-12-20',
    experienceLevel: 'Mid Level'
  },
  {
    jobTitle: 'AI Researcher',
    companyName: 'AI Research Hub',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [1600000, 2000000],
    jobType: 'Full-Time',
    description: 'Conduct advanced research in AI algorithms and machine learning models.',
    deadline: '2025-01-05',
    experienceLevel: 'Lead'
  },
  {
    jobTitle: 'Game Developer',
    companyName: 'GameStudioX',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [900000, 1100000],
    jobType: 'Part-Time',
    description: 'Develop video games and interactive simulations.',
    deadline: '2025-02-15',
    experienceLevel: 'Mid Level'
  },
  {
    jobTitle: 'Product Manager',
    companyName: 'ProductiveCo',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [1200000, 1400000],
    jobType: 'Full-Time',
    description: 'Oversee product development and coordinate between teams.',
    deadline: '2025-01-10',
    experienceLevel: 'Senior Level'
  },
  {
    jobTitle: 'Software Engineer',
    companyName: 'CodeWorks',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Chicago, IL',
    salary: [950000, 1200000],
    jobType: 'Full-Time',
    description: 'Design and develop software applications for various platforms.',
    deadline: '2024-12-05',
    experienceLevel: 'Entry Level'
  },
  {
    jobTitle: 'Cloud Engineer',
    companyName: 'CloudOps',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'London, UK',
    salary: [1100000, 1300000],
    jobType: 'Contract',
    description: 'Manage and optimize cloud-based infrastructure.',
    deadline: '2024-12-18',
    experienceLevel: 'Mid Level'
  },
  {
    jobTitle: 'Frontend Engineer',
    companyName: 'WebDesigners',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [800000, 1000000],
    jobType: 'Full-Time',
    description: 'Develop modern, responsive web applications.',
    deadline: '2024-12-12',
    experienceLevel: 'Entry Level'
  },
  {
    jobTitle: 'Backend Developer',
    companyName: 'TechSystems',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Los Angeles, CA',
    salary: [1000000, 1200000],
    jobType: 'Part-Time',
    description: 'Build and maintain server-side applications and databases.',
    deadline: '2024-12-20',
    experienceLevel: 'Mid Level'
  },
  {
    jobTitle: 'Frontend Developer',
    companyName: 'WebGenix',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [850000, 1050000],
    jobType: 'Full-Time',
    description: 'Design and implement user interfaces using React and JavaScript.',
    deadline: '2024-12-22',
    experienceLevel: 'Entry Level'
  },
  {
    jobTitle: 'React Developer',
    companyName: 'ReactDev Studios',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'New York, NY',
    salary: [1100000, 1300000],
    jobType: 'Full-Time',
    description: 'Develop front-end applications using React.js.',
    deadline: '2024-12-28',
    experienceLevel: 'Mid Level'
  },
  {
    jobTitle: 'Automation Tester',
    companyName: 'TestPro Solutions',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [900000, 1100000],
    jobType: 'Contract',
    description: 'Write and maintain automated test scripts.',
    deadline: '2025-01-05',
    experienceLevel: 'Mid Level'
  },
  {
    jobTitle: 'SEO Specialist',
    companyName: 'SEO Masters',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'London, UK',
    salary: [700000, 850000],
    jobType: 'Full-Time',
    description: 'Optimize website rankings on search engines.',
    deadline: '2024-12-30',
    experienceLevel: 'Entry Level'
  },
  {
    jobTitle: 'Content Writer',
    companyName: 'Contentify',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [600000, 800000],
    jobType: 'Full-Time',
    description: 'Create engaging and informative content for websites and blogs.',
    deadline: '2024-12-12',
    experienceLevel: 'Entry Level'
  },
  {
    jobTitle: 'Operations Manager',
    companyName: 'OpsGenix',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [1100000, 1400000],
    jobType: 'Full-Time',
    description: 'Oversee daily operations and manage team resources.',
    deadline: '2025-01-20',
    experienceLevel: 'Senior Level'
  },
  {
    jobTitle: 'Legal Advisor',
    companyName: 'LawTech',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'London, UK',
    salary: [1000000, 1200000],
    jobType: 'Part-Time',
    description: 'Provide legal advice and assist with contracts and compliance.',
    deadline: '2024-12-10',
    experienceLevel: 'Mid Level'
  },
  {
    jobTitle: 'Marketing Manager',
    companyName: 'MarketingPro',
    companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOzLeaDsUMx4BV_FCn39FZOBaprDOUvIhb6Qwk5VJEF9rbRosd3GXSw7Q_BzZSqCpULQ&usqp=CAU',
    location: 'Remote',
    salary: [1100000, 1400000],
    jobType: 'Full-Time',
    description: 'Lead and manage marketing campaigns and initiatives.',
    deadline: '2024-12-18',
    experienceLevel: 'Senior Level'
  }
  // Continue adding more jobs to reach 50 with varied experience levels
];








const Jobs = () => {
  const [filteredJobs, setFilteredJobs] = useState(randomJobs); // State to hold filtered jobs
  const handleFilterChange = (updatedJobs) => {
    setFilteredJobs(updatedJobs);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* Filter Section */}
        <div className="w-full lg:w-1/4 flex-shrink-0 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
          <FilterCard randomJobs = {randomJobs} onFilterChange={handleFilterChange}/>
        </div>

        {/* Jobs List */}
        <div className="flex-1">
          <ScrollArea className="h-[calc(100vh-2.5rem)] pr-4">
            <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredJobs.map((job, index) => (
                <LatestJobsCard key={index} {...job} />
              ))}
            </div>
          </ScrollArea>
        </div>

      </div>
    </div>
  );
};

export default Jobs;
