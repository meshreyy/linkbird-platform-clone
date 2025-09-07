import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Clock, Send, Ban, CheckCircle } from "lucide-react";

const contacts = [
  {
    id: 1,
    name: "Om Satyarthy",
    title: "Regional Head",
    avatar: "OS",
    campaign: "Gynoveda",
    activity: 4,
    status: "Pending Approval",
    statusType: "pending",
  },
  {
    id: 2,
    name: "Dr. Bhuvaneshwari",
    title: "Fertility & Women's Health + A...",
    avatar: "DB",
    campaign: "Gynoveda",
    activity: 4,
    status: "Sent 7 mins ago",
    statusType: "sent",
  },
  // ... rest of contacts
];

function Avatar({ initials, name }: { initials: string; name: string }) {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-indigo-500",
    "bg-pink-500",
    "bg-teal-500",
  ];

  const colorIndex = name.length % colors.length;

  return (
    <div
      className={`w-10 h-10 rounded-full ${colors[colorIndex]} flex items-center justify-center text-white text-sm font-medium`}
    >
      {initials}
    </div>
  );
}

function ActivityBars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          className={`w-1 h-6 rounded-full ${
            i < count ? (count === 5 ? "bg-purple-500" : "bg-yellow-400") : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

function StatusBadge({ status, type }: { status: string; type: string }) {
  const getStatusStyles = () => {
    switch (type) {
      case "pending":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "sent":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "blocked":
        return "bg-gray-100 text-gray-700 border-gray-200";
      case "followup":
        return "bg-blue-100 text-blue-700 border-blue-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "pending":
        return <Clock className="w-3 h-3" />;
      case "sent":
        return <Send className="w-3 h-3" />;
      case "blocked":
        return <Ban className="w-3 h-3" />;
      case "followup":
        return <CheckCircle className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusStyles()}`}
    >
      {getIcon()}
      {status}
    </div>
  );
}

export default function CampaignContactsTable() {
  return (
<main className="flex min-h-screen items-center justify-between w-full px-4">     
     <div>Left content</div>
    <Table className="max-w-4xl w-full">
        <TableCaption className="mt-4 text-muted-foreground">
          List of campaign contacts and their statuses.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Campaign</TableHead>
            <TableHead>Activity</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact, index) => (
            <TableRow
              key={contact.id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50/30"}
            >
              <TableCell className="flex justify-between">
                <div className="flex items-center gap-3">
                  <Avatar initials={contact.avatar} name={contact.name} />
                  <div>
                    <div className="font-medium">{contact.name}</div>
                    <div className="text-sm text-gray-500">{contact.title}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{contact.campaign}</TableCell>
              <TableCell>
                <ActivityBars count={contact.activity} />
              </TableCell>
              <TableCell>
                <StatusBadge status={contact.status} type={contact.statusType} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>Right content</div>
    </main>
  );
}
