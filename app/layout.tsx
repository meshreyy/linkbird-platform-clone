'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useState } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  return (
   <html lang="en">
     <body className="flex">
       <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
       <div className="flex flex-col w-full">
         <Header currentPage={currentPage} />
         <main className="p-4 sm:ml-64">
           {children}
         </main>
       </div>
     </body>
   </html>
  );
}
