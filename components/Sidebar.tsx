'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "./logo1.png";

// Example icons (replace with your SVG or icon components)
const DashboardIcon = () => <span>🏠</span>;
const LeadsIcon = () => <span>📋</span>;
const CampaignIcon = () => <span>⚗️</span>;
const MessagesIcon = () => <span>✉️</span>;
const LinkedinIcon = () => <span>🔗</span>;
const SettingsIcon = () => <span>⚙️</span>;
const ActivityIcon = () => <span>📊</span>;
const UserLogIcon = () => <span>📜</span>;

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`fixed top-0 left-0 h-screen border-r bg-white flex flex-col justify-between
      transition-all duration-300 shadow-md
      ${isOpen ? "w-64" : "w-16"}`}
    >
      {/* Toggle button */}
      <button
        className="absolute top-4 right-[-20px] bg-white border rounded-full p-1 shadow z-20"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        {isOpen ? "←" : "→"}
      </button>

      {/* Content */}
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-4">
          <Image src={logo} alt="Linkbird Logo" width={28} height={28} />
          {isOpen && (
            <span className="text-xl font-bold">
              <span className="text-black">Link</span>
              <span className="text-blue-600">Bird</span>
            </span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-4">
          <ul className="space-y-1">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center gap-4 px-6 py-2 rounded-md text-black hover:text-blue-600 transition-colors duration-300"
              >
                <DashboardIcon />
                {isOpen && <span>Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link
                href="/leads"
                className="flex items-center gap-4 px-6 py-2 rounded-md text-black hover:text-blue-600 transition-colors duration-300"
              >
                <LeadsIcon />
                {isOpen && <span>Leads</span>}
              </Link>
            </li>
            <li>
              <Link
                href="/campaigns"
                className="flex items-center gap-4 px-6 py-2 rounded-md text-black hover:text-blue-600 transition-colors duration-300"
              >
                <CampaignIcon />
                {isOpen && <span>Campaigns</span>}
              </Link>
            </li>
            <li>
              <Link
                href="/messages"
                className="flex items-center gap-4 px-6 py-2 rounded-md text-black hover:text-blue-600 transition-colors duration-300 relative"
              >
                <MessagesIcon />
                {isOpen && <span>Messages</span>}
                {isOpen && (
                  <span className="ml-auto bg-blue-600 text-white text-xs px-2 rounded-full">
                    10+
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link
                href="/linkedin-accounts"
                className="flex items-center gap-4 px-6 py-2 rounded-md text-black hover:text-blue-600 transition-colors duration-300"
              >
                <LinkedinIcon />
                {isOpen && <span>Linkedin Accounts</span>}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Settings */}
        <div className="mt-auto px-6">
          {isOpen && (
            <div className="mb-1 text-xs font-semibold text-gray-500">Settings</div>
          )}
          <Link
            href="/settings-billing"
            className="flex items-center gap-4 py-2 rounded-md text-black hover:text-blue-600 transition-colors duration-300"
          >
            <SettingsIcon />
            {isOpen && <span>Setting & Billing</span>}
          </Link>
        </div>

        {/* Admin Panel */}
        <div className="px-6 mt-6 mb-4">
          {isOpen && (
            <div className="mb-1 text-xs font-semibold text-gray-500">Admin Panel</div>
          )}
          <Link
            href="/activity-logs"
            className="flex items-center gap-4 py-2 rounded-md text-black hover:text-blue-600 transition-colors duration-300"
          >
            <ActivityIcon />
            {isOpen && <span>Activity logs</span>}
          </Link>
          <Link
            href="/user-logs"
            className="flex items-center gap-4 py-2 rounded-md text-black hover:text-blue-600 transition-colors duration-300"
          >
            <UserLogIcon />
            {isOpen && <span>User logs</span>}
          </Link>
        </div>
      </div>

      {/* Bottom Profile */}
      <div className="flex items-center gap-2 px-6 py-3 border-t">
        <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center font-bold text-white">BK</div>
        {isOpen && (
          <div>
            <div className="text-sm font-semibold">Bhavya From Kandid</div>
            <div className="text-xs text-gray-500">bhavya@kandid.ai</div>
          </div>
        )}
        {isOpen && (
          <span className="ml-auto text-xs text-white bg-blue-600 px-2 rounded">PRO</span>
        )}
      </div>
    </aside>
  );
}
