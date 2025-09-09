'use client';

import { useState, useRef, useEffect } from 'react';

type User = {
  name: string;
  email?: string;
};

export default function ProfileDropdown({ user }: { user: User }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // To close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const initials = user.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full bg-gray-200 px-3 py-1 hover:bg-gray-300 focus:outline-none"
      >
        <div className="rounded-full bg-blue-600 text-white w-8 h-8 flex items-center justify-center font-semibold">
          {initials}
        </div>
        <span className="text-gray-700 font-medium truncate max-w-xs">{user.name}</span>
        <svg
          className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-gray-100 flex items-center gap-3">
            <div className="rounded-full bg-blue-600 text-white w-10 h-10 flex items-center justify-center font-bold text-lg">
              {initials}
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-gray-900 font-semibold truncate">{user.name}</span>
              <span className="text-gray-500 text-sm truncate">{user.email}</span>
            </div>
            <span className="ml-auto bg-yellow-400 text-xs text-black px-2 py-0.5 rounded-full font-semibold">
              PRO
            </span>
          </div>
          <ul className="p-2 text-sm text-gray-700 space-y-2">
            <li>
              <a href="/profile" className="block hover:bg-gray-100 rounded px-2 py-1">
                Profile
              </a>
            </li>
            <li>
              <a href="/settings" className="block hover:bg-gray-100 rounded px-2 py-1">
                Settings
              </a>
            </li>
            <li>
              <button
                onClick={() => alert('Logout')}
                className="w-full text-left hover:bg-gray-100 rounded px-2 py-1"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
