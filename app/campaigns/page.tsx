"use client";
import Link from 'next/link';


import React, { useState } from "react";
import {
  Search,
  Plus,
  Users,
  UserCheck,
  Clock,
  XCircle,
  UserPlus,
  MessageSquare
} from "lucide-react";
import ProfileDropdown from '../profile/ProfileDropdown';

const campaignsData = [
  {
    name: "HempStreet",
    status: "Active",
    totalLeads: 7,
    accepted: 0,
    pending: 7,
    rejected: 0,
    connected: 0,
    messages: 0
  },
  {
    name: "HealthyHey 2",
    status: "Active", 
    totalLeads: 5,
    accepted: 0,
    pending: 5,
    rejected: 0,
    connected: 0,
    messages: 0
  },
  {
    name: "Herbal Chakra",
    status: "Active",
    totalLeads: 19,
    accepted: 0,
    pending: 19,
    rejected: 0,
    connected: 0,
    messages: 0
  },
  {
    name: "Healofy",
    status: "Active",
    totalLeads: 14,
    accepted: 0,
    pending: 14,
    rejected: 0,
    connected: 0,
    messages: 0
  },
  {
    name: "HealthSense",
    status: "Active",
    totalLeads: 2,
    accepted: 0,
    pending: 2,
    rejected: 0,
    connected: 0,
    messages: 0
  },
  {
    name: "HealthFarm Nutrition",
    status: "Active",
    totalLeads: 6,
    accepted: 0,
    pending: 6,
    rejected: 0,
    connected: 0,
    messages: 0
  },
  {
    name: "Digidarts",
    status: "Active",
    totalLeads: 29,
    accepted: 0,
    pending: 29,
    rejected: 0,
    connected: 0,
    messages: 0
  },
  {
    name: "Healeo Nutrition",
    status: "Active",
    totalLeads: 7,
    accepted: 0,
    pending: 7,
    rejected: 0,
    connected: 0,
    messages: 0
  },
  {
    name: "BeHappier",
    status: "Active",
    totalLeads: 4,
    accepted: 0,
    pending: 4,
    rejected: 0,
    connected: 0,
    messages: 0
  }
];

const StatusBadge = ({ status }: { status: string }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
    {status}
  </span>
);

const StatItem = ({
  icon: Icon,
  value,
  color = "text-gray-600"
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  color?: string;
}) => (
  <div className="flex items-center gap-1">
    <Icon className={`w-4 h-4 ${color}`} />
    <span className="text-sm font-medium">{value}</span>
  </div>
);

export default function CampaignsDashboard() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCampaigns = campaignsData.filter((campaign) =>
    campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
              <div className="min-h-screen flex flex-col bg-gray-50">
          {/* Header */}
          <header className="flex justify-between items-center p-4 border-b fixed top-0 left-70 right-0 bg-white z-50 shadow h-16">
            <h1 className="text-lg font-semibold ml-auto text-gray-900 ">Welcome, User</h1>
           
            <ProfileDropdown user={{ name: "User", email: "user@email.com" }} />
          </header>
          <br></br>
              <br></br>

   <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
    {/* Breadcrumb / Title */}
    <div>
     
    </div>

    <div className="w-full max-w-6xl bg-white rounded-lg border border-gray-200 overflow-hidden mt-4">
      {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
              <p className="text-sm text-gray-600 mt-1">
                Manage your campaigns and track their performance
              </p>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              Create Campaign
            </button>
          </div>
        </header>

        {/* Tabs and Search */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <button
                onClick={() => setActiveTab("all")}
                className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "all"
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                All Campaigns
              </button>
              <button
                onClick={() => setActiveTab("active")}
                className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "active"
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setActiveTab("inactive")}
                className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "inactive"
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                Inactive
              </button>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 p-6">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Campaign Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Leads
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Request Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Connection Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCampaigns.map((campaign, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {campaign.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={campaign.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatItem icon={Users} value={campaign.totalLeads} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-4">
                        <StatItem
                          icon={UserCheck}
                          value={campaign.accepted}
                          color="text-green-600"
                        />
                        <StatItem
                          icon={Clock}
                          value={campaign.pending}
                          color="text-yellow-600"
                        />
                        <StatItem
                          icon={XCircle}
                          value={campaign.rejected}
                          color="text-red-600"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-4">
                        <StatItem
                          icon={UserPlus}
                          value={campaign.connected}
                          color="text-blue-600"
                        />
                        <StatItem
                          icon={MessageSquare}
                          value={campaign.messages}
                          color="text-purple-600"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
