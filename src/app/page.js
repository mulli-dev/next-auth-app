"use client";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-green-600">
        <ul className="flex justify-center gap-6 py-2 font-semibold text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="relative">
            <button
              className="flex items-center focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              About Us
              <RiArrowDropDownLine className="ml-1" />
            </button>
            {isOpen && (
              <ul className="absolute mt-2 text-white bg-green-500 rounded shadow-lg top-full">
                <li>
                  <Link href="/about/mission">Our Mission</Link>
                </li>
                <li>
                  <Link href="/about/team">Our Team</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              className="flex items-center focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              Departments
            </button>
            {isOpen && (
              <ul className="absolute mt-2 text-white bg-green-500 rounded shadow-lg top-full">
                <li>
                  <Link href="/about/crops">Crops</Link>
                </li>
                <li>
                  <Link href="/about/livestock">Livestock</Link>
                </li>
                <li>
                  <Link href="/about/institues">Institutes</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/resources">Information Resources</Link>
          </li>
          <li>
            <Link href="/media">Media</Link>
          </li>
          <li>
            <Link href="/procurement">Procurement</Link>
          </li>
          <li>
            <Link href="/customer-care">Customer Care</Link>
          </li>
        </ul>
      </nav>

      {/* Page Content */}
      <div className="mt-10 text-red-300"> Home Page Content </div>
    </div>
  );
}
