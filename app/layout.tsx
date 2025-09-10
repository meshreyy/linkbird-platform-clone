'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import  { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="bg-gray-50 min-h-screen">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            {/* Sidebar with fixed width */}
            <aside className="w-64 bg-white border-r">
              <AppSidebar />
            </aside>

            {/* Main content */}
            <main className="flex-1 bg-gray-50">
              {/* Fixed header */}
              <header className="fixed top-0 left-64 right-0 bg-white border-b shadow h-16 z-50 flex items-center justify-end px-4">
                
              </header>

              {/* Scrollable content area with padding-top for fixed header */}
              <div className="pt-20 w-full max-w-6xl mx-auto px-4">
                {children}
              </div>
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
