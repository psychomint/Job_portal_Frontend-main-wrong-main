import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";

const AppliedJobsTable = () => {
    const dummy = [
        {
            id: 1,
            jobTitle: "Frontend Developer",
            company: "Tech Solutions Ltd.",
            status: "Accepted",
            applicationDate: "11-12-2024",
            action: "View",
        },
        {
            id: 2,
            jobTitle: "Backend Developer",
            company: "Bansal Solutions Ltd.",
            status: "Rejected",
            applicationDate: "12-12-2024",
            action: "View",
        },
        {
            id: 3,
            jobTitle: "DevOps Engineer",
            company: "Innovate Ltd.",
            status: "Interview",
            applicationDate: "13-12-2024",
            action: "View",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto p-4 rounded-lg">
            <Table className="rounded-lg shadow overflow-hidden dark:bg-gray-800 dark:text-white">
                <TableCaption className="text-gray-500 dark:text-gray-400">
                    A list of jobs you have applied for recently.
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-left text-blue-800 dark:text-blue-400">
                            Application Date
                        </TableHead>
                        <TableHead className="text-left text-blue-800 dark:text-blue-400">
                            Company
                        </TableHead>
                        <TableHead className="w-[200px] text-left text-blue-800 dark:text-blue-400">
                            Job Title
                        </TableHead>
                        <TableHead className="text-left text-blue-800 dark:text-blue-400">
                            Status
                        </TableHead>
                        <TableHead className="text-right text-blue-800 dark:text-blue-400">
                            Actions
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {dummy.map((item) => (
                        <TableRow key={item.id} className="transition-colors">
                            <TableCell>{item.applicationDate}</TableCell>
                            <TableCell>{item.company}</TableCell>
                            <TableCell className="font-medium">{item.jobTitle}</TableCell>
                            <TableCell>
                                <Badge
                                    className={`py-1 px-3 rounded-full text-white ${
                                        item.status === "Accepted"
                                            ? "bg-green-500"
                                            : item.status === "Rejected"
                                            ? "bg-red-500"
                                            : "bg-yellow-500"
                                    }`}
                                >
                                    {item.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                                <button
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    aria-label={`View details for ${item.jobTitle}`}
                                >
                                    {item.action}
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default AppliedJobsTable;
