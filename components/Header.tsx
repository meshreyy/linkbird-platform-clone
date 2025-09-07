'use client'

import React from "react"
import Image from "next/image"
import Link from "next/link"

type HeaderProps = {
  currentPage: string;
};

export default function Header({ currentPage }: HeaderProps) {
  return (
    <header className="border-b px-6 py-4 bg-white shadow-sm">
      <h1 className="text-xl font-bold">{currentPage}</h1>
    </header>
  );
}

// export default function Header({ title }: { title: string }) {
//   return (
//     <header className="px-6 py-4 border-b border-gray-200 bg-white dark:bg-gray-800">
//       <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
//         {title}
//       </h1>
//     </header>
//   )
// }