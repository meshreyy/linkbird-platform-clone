'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { useState } from "react";


export default function Layout({ children }: { children: React.ReactNode }) {


  return (
    <html>
      <body>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <AppSidebar />
            <main className="flex-grow flex items-center justify-center">
              {children}
            </main>
          </div>
        </SidebarProvider>

      </body>
    </html>
  )
}