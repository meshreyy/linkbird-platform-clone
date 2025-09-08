"use client";
import React, { useState } from 'react';
import { 
  Users, 
  MessageSquare,
  Settings,
  Activity,
  ChevronDown,
  Clock,
  UserX,
  Send,
  CheckCircle
} from 'lucide-react';

const leadsData = [
  {
    id: 1,
    name: "Om Satyarthy",
    title: "Regional Head",
    campaign: "Gynoveda",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format",
    activity: 3,
    status: "Pending Approval",
    statusType: "pending"
  },
  {
    id: 2,
    name: "Dr. Bhuvaneshwari",
    title: "Fertility & Women's Health • A...",
    campaign: "Gynoveda",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9c89217?w=40&h=40&fit=crop&crop=face&auto=format",
    activity: 3,
    status: "Sent 7 mins ago",
    statusType: "sent"
  },
  {
    id: 3,
    name: "Surdeep Singh",
    title: "Building Product-led SEO Growt...",
    campaign: "Gynoveda",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format",
    activity: 3,
    status: "Sent 7 mins ago",
    statusType: "sent"
  },
  {
    id: 4,
    name: "Dilbag Singh",
    title: "Manager Marketing & Communicat...",
    campaign: "Gynoveda",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&auto=format",
    activity: 3,
    status: "Sent 7 mins ago",
    statusType: "sent"
  },
  {
    id: 5,
    name: "Vanshly Jain",
    title: "Ayurveda||primary infertility|...",
    campaign: "Gynoveda",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format",
    activity: 3,
    status: "Sent 7 mins ago",
    statusType: "sent"
  },
  {
    id: 6,
    name: "Sunil Pal",
    title: "Helping Fashion & Lifestyle Br...",
    campaign: "Digi Sidekick",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format",
    activity: 4,
    status: "Pending Approval",
    statusType: "pending"
  },
  {
    id: 7,
    name: "Utkarsh K.",
    title: "Airbnb Host | Ex-The Skin Stor...",
    campaign: "The skin story",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format",
    activity: 4,
    status: "Do Not Contact",
    statusType: "blocked"
  },
  {
    id: 8,
    name: "Shreya Ramakrishna",
    title: "Deputy Manager - Founder's Off...",
    campaign: "Pokenut",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9c89217?w=40&h=40&fit=crop&crop=face&auto=format",
    activity: 4,
    status: "Followup 10 mins ago",
    statusType: "followup"
  },
  {
    id: 9,
    name: "Deepak Kumar",
    title: "Deputy manager Advertising and...",
    campaign: "Re equil",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&auto=format",
    activity: 4,
    status: "Followup 10 mins ago",
    statusType: "followup"
  }
];

const ActivityBar = ({ level }: { level: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((bar) => (
        <div
          key={bar}
          className={`w-1 h-6 rounded-sm ${
            bar <= level
              ? bar <= 2
                ? "bg-red-400"
                : bar <= 4
                ? "bg-yellow-400"
                : "bg-green-400"
              : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

const StatusBadge = ({
  status,
  type,
}: {
  status: string;
  type: string;
}) => {
  const getStatusStyle = () => {
    switch (type) {
      case "pending":
        return "bg-purple-100 text-purple-800";
      case "sent":
        return "bg-orange-100 text-orange-800";
      case "blocked":
        return "bg-gray-100 text-gray-800";
      case "followup":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "pending":
        return <Clock className="w-3 h-3" />;
      case "sent":
        return <Send className="w-3 h-3" />;
      case "blocked":
        return <UserX className="w-3 h-3" />;
      case "followup":
        return <CheckCircle className="w-3 h-3" />;
      default:
        return null;
    }
  };

  
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusStyle()}`}
    >
      {getIcon()}
      {status}
    </span>
  );
};

export default function LeadsPage() {
  const [sortBy, setSortBy] = useState('name');
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
  {/* Breadcrumb / Title */}
  <div className="w-full max-w-6xl bg-white border-b border-gray-200 px-6 py-3">
    <div className="text-gray-900 font-medium text-lg">Leads</div>
  </div>

  {/* Table Container */}
  <div className="w-full max-w-6xl bg-white rounded-lg border border-gray-200 overflow-hidden mt-4">
    {/* Table Header */}
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4 flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="col-span-3 flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Campaign Name
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="col-span-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Activity
            </div>
            <div className="col-span-3 flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {leadsData.map((lead) => (
            <div
              key={lead.id}
              className="px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Name Column */}
                <div className="col-span-4 flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={lead.avatar}
                    alt={lead.name}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-gray-900 truncate">
                      {lead.name}
                    </div>
                    <div className="text-sm text-gray-500 truncate">
                      {lead.title}
                    </div>
                  </div>
                </div>

                {/* Campaign Name Column */}
                <div className="col-span-3">
                  <div className="text-sm text-gray-900">{lead.campaign}</div>
                </div>

                {/* Activity Column */}
                <div className="col-span-2">
                  <ActivityBar level={lead.activity} />
                </div>

                {/* Status Column */}
                <div className="col-span-3">
                  <StatusBadge status={lead.status} type={lead.statusType} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}