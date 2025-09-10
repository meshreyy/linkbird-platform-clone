'use client'


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
  CheckCircle,
  Wifi
} from 'lucide-react';
import ProfileDropdown from '../profile/ProfileDropdown';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Image from 'next/image';

// Campaign data
const campaignsData = [
  { name: "Just Herbs", status: "Active" },
  { name: "Juicy chemistry", status: "Active" },
  { name: "Hyugalife 2", status: "Active" },
  { name: "Honeyveda", status: "Active" },
  { name: "HempStreet", status: "Active" },
  { name: "HealthyHey 2", status: "Active" }
];

// LinkedIn Accounts data
const linkedinAccounts = [
  {
    name: "Pulkit Garg",
    email: "1994pulkitgarg@gmail.com",
    status: "Connected",
    requests: "17/30",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format",
    verified: true
  },
  {
    name: "Jivesh Lakhani",
    email: "jivesh@gmail.com",
    status: "Connected",
    requests: "19/30",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format",
    verified: true
  },
  {
    name: "Indrajit Sahani",
    email: "indrajit38m@gmail.com",
    status: "Connected",
    requests: "18/30",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&auto=format",
    verified: true
  },
  {
    name: "Bhavya Arora",
    email: "bhavyaarora999.bca@gmail.c...",
    status: "Connected",
    requests: "18/100",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9c89217?w=40&h=40&fit=crop&crop=face&auto=format",
    verified: true
  }
];

// Recent Activity data
const recentActivity = [
  {
    name: "Om Satyarthy",
    title: "Regional Head",
    campaign: "Gynoveda",
    status: "Pending Approval",
    statusType: "pending",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format"
  },
  {
    name: "Dr. Bhuvaneshwari",
    title: "Fertility & Women's Health • A...",
    campaign: "Gynoveda",
    status: "Sent 7 mins ago",
    statusType: "sent",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9c89217?w=40&h=40&fit=crop&crop=face&auto=format"
  },
  {
    name: "Surdeep Singh",
    title: "Building Product-led SEO Growt...",
    campaign: "Gynoveda",
    status: "Sent 7 mins ago",
    statusType: "sent",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
  },
  {
    name: "Dilbag Singh",
    title: "Manager Marketing & Communicat...",
    campaign: "Gynoveda",
    status: "Sent 7 mins ago",
    statusType: "sent",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&auto=format"
  },
  {
    name: "Vanshy Jain",
    title: "Ayurveda||primary infertility|...",
    campaign: "Gynoveda",
    status: "Sent 7 mins ago",
    statusType: "sent",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format"
  },
  {
    name: "Sunil Pal",
    title: "Helping Fashion & Lifestyle Br...",
    campaign: "Digi Sidekick",
    status: "Pending Approval",
    statusType: "pending",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format"
  },
  {
    name: "Utkarsh K.",
    title: "Airbnb Host | Ex-The Skin Stor...",
    campaign: "The skin story",
    status: "Do Not Contact",
    statusType: "blocked",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format"
  },
  {
    name: "Shreya Ramakrishna",
    title: "Deputy Manager - Founder's Off...",
    campaign: "Pokenut",
    status: "Followup 10 mins ago",
    statusType: "followup",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9c89217?w=40&h=40&fit=crop&crop=face&auto=format"
  },
  {
    name: "Deepak Kumar",
    title: "Deputy manager",
    campaign: "Re equil",
    status: "Followup 10 mins ago",
    statusType: "followup",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&auto=format"
  }
];

const StatusBadge = ({ status, type }: { status: string; type: string }) => {
  const getStatusStyle = () => {
    switch (type) {
      case 'pending':
        return 'bg-purple-100 text-purple-800';
      case 'sent':
        return 'bg-orange-100 text-orange-800';
      case 'blocked':
        return 'bg-gray-100 text-gray-800';
      case 'followup':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'pending':
        return <Clock className="w-3 h-3" />;
      case 'sent':
        return <Send className="w-3 h-3" />;
      case 'blocked':
        return <UserX className="w-3 h-3" />;
      case 'followup':
        return <CheckCircle className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusStyle()}`}>
      {getIcon()}
      {status}
    </span>
  );
};

const RequestsProgressBar = ({ current, total }: { current: number; total: number }) => {
  const percentage = (current / total) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("all"); // optionally use if you have tabs

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b fixed top-0 left-70 right-0 bg-white z-50 shadow h-16">
        <h1 className="text-lg font-semibold ml-auto text-gray-900 ">Welcome, User</h1>

        <ProfileDropdown user={{ name: "User", email: "user@email.com" }} />
      </header>
      <br></br>
      <br></br>
      <div>
        <div className="max-w-7xl mx-auto space-y-6"></div>


        <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">

          {/* Breadcrumb / Title */}
          <div className="w-full max-w-6xl bg-white border-b border-gray-200 px-6 py-3">
            <div className="text-gray-900 font-medium text-lg">Dashboard</div>
          </div>


          <div className="w-full max-w-6xl space-y-6 mt-4">
            {/* Campaigns Section */}
            <section className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Campaigns</h2>
                <button className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
                  All Campaigns
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="px-6 py-4 space-y-3">
                {campaignsData.map((campaign, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {campaign.status}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Activity Section */}
            <section className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                <button className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50">
                  Most Recent
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="px-6 py-4">
                <div className="grid grid-cols-12 gap-4 pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <div className="col-span-4">Lead</div>
                  <div className="col-span-4">Campaign</div>
                  <div className="col-span-4">Status</div>
                </div>
                <div className="space-y-3 pt-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-4 flex items-center gap-3">
                        <Image
                          src={activity.avatar}
                          alt={activity.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-medium text-gray-900 truncate">
                            {activity.name}
                          </div>
                          <div className="text-xs text-gray-500 truncate">
                            {activity.title}
                          </div>
                        </div>
                      </div>
                      <div className="col-span-4">
                        <div className="text-sm text-gray-900">{activity.campaign}</div>
                      </div>
                      <div className="col-span-4">
                        <StatusBadge
                          status={activity.status}
                          type={activity.statusType}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* LinkedIn Accounts Section */}
            <section className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">LinkedIn Accounts</h2>
              </div>
              <div className="px-6 py-4">
                <div className="grid grid-cols-12 gap-4 pb-3 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <div className="col-span-4">Account</div>
                  <div className="col-span-3">Status</div>
                  <div className="col-span-5">Requests</div>
                </div>
                <div className="space-y-4 pt-3">
                  {linkedinAccounts.map((account, index) => (
                    <div key={index} className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-4 flex items-center gap-3">
                        <Image
                          className="w-10 h-10 rounded-full object-cover"
                          src={account.avatar}
                          alt={account.name}
                          width={40}
                          height={40}
                        />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-medium text-gray-900">
                              {account.name}
                            </div>
                            {account.verified && (
                              <div className="w-4 h-4 bg-orange-400 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">in</span>
                              </div>
                            )}
                          </div>
                          <div className="text-xs text-gray-500 truncate">
                            {account.email}
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Wifi className="w-3 h-3" />
                          {account.status}
                        </span>
                      </div>
                      <div className="col-span-5">
                        <div className="flex items-center gap-3">
                          <RequestsProgressBar
                            current={parseInt(account.requests.split("/")[0])}
                            total={parseInt(account.requests.split("/")[1])}
                          />
                          <span className="text-sm text-gray-600 whitespace-nowrap">
                            {account.requests}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );

}