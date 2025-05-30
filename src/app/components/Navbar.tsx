"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-pink-600">
          My Portfolio
        </Link>
        <div className="space-x-6">
          <Link href="/about" className="hover:text-pink-500">
            About
          </Link>
          <Link href="/projects" className="hover:text-pink-500">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
