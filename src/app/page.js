"use client";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

export default function Home() {
  // State management for dropdowns
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    // If the clicked dropdown is already open, close it, otherwise open it and close others
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-green-600">
        <ul className="flex justify-center gap-6 py-2 font-semibold text-white">
          <li>
            <Link href="/">Home</Link>
          </li>

          {/* About Us Dropdown */}
          <li className="relative">
            <button
              className="flex items-center px-2 py-1 rounded focus:outline-none hover:bg-green-800"
              onClick={() => toggleDropdown("about")}
            >
              About Us
              <RiArrowDropDownLine className="ml-1" />
            </button>
            {openDropdown === "about" && (
              <ul className="absolute mt-2 text-white bg-green-500 rounded shadow-lg top-full">
                <li>
                  <Link href="/about/board">KALRO Board</Link>
                </li>
                <li>
                  <Link href="/about/team">Vision and Mission</Link>
                </li>
                <li>
                  <Link href="/about/management">KALRO management</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Departments Dropdown */}
          <li className="relative">
            <button
              className="flex items-center px-2 py-1 rounded focus:outline-none hover:bg-green-800"
              onClick={() => toggleDropdown("departments")}
            >
              Departments
            </button>
            {openDropdown === "departments" && (
              <ul className="absolute mt-2 text-white bg-green-500 rounded shadow-lg top-full">
                <li>
                  <Link href="/about/crops">Crops</Link>
                </li>
                <li>
                  <Link href="/about/livestock">Livestock</Link>
                </li>
                <li>
                  <Link href="/about/institutes">Institutes</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Information Resources Dropdown */}
          <li className="relative">
            <button
              className="flex items-center px-2 py-1 rounded focus:outline-none hover:bg-green-800"
              onClick={() => toggleDropdown("resources")}
            >
              Information Resources
            </button>
            {openDropdown === "resources" && (
              <ul className="absolute mt-2 text-white bg-green-500 rounded shadow-lg top-full">
                <li>
                  <Link href="/about/application">Mobile application</Link>
                </li>
                <li>
                  <Link href="/about/web">KALRO Web Information Resources</Link>
                </li>
                <li>
                  <Link href="/about/is">Information brochures</Link>
                </li>
                <li>
                  <Link href="/about/publication">Publication</Link>
                </li>
                <li>
                  <Link href="/about/elrp">ELRP</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Media Dropdown */}
          <li className="relative">
            <button
              className="flex items-center px-2 py-1 rounded focus:outline-none hover:bg-green-800"
              onClick={() => toggleDropdown("media")}
            >
              Media
            </button>
            {openDropdown === "media" && (
              <ul className="absolute mt-2 text-white bg-green-500 rounded shadow-lg top-full">
                <li>
                  <Link href="/about/press">Press Release</Link>
                </li>
                <li>
                  <Link href="/about/event">Upcoming events</Link>
                </li>
                <li>
                  <Link href="/about/briefs">Briefs</Link>
                </li>
                <li>
                  <Link href="/about/gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="/about/videos">Videos</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Procurement Dropdown */}
          <li className="relative">
            <button
              className="flex items-center px-2 py-1 rounded focus:outline-none hover:bg-green-800"
              onClick={() => toggleDropdown("procurement")}
            >
              Procurement
            </button>
            {openDropdown === "procurement" && (
              <ul className="absolute mt-2 text-white bg-green-500 rounded shadow-lg top-full">
                <li>
                  <Link href="/about/tender">Tenders</Link>
                </li>
                <li>
                  <Link href="/about/procurement">
                    Procurement Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="/about/archived">Archived Tenders</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Customer Care Dropdown */}
          <li className="relative">
            <button
              className="flex items-center px-2 py-1 rounded focus:outline-none hover:bg-green-800"
              onClick={() => toggleDropdown("customerCare")}
            >
              Customer Care
            </button>
            {openDropdown === "customerCare" && (
              <ul className="absolute mt-2 text-white bg-green-500 rounded shadow-lg top-full">
                <li>
                  <Link href="/about/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/about/report">
                    Report on Client Feedback on KALRO products and services
                  </Link>
                </li>
                <li>
                  <Link href="/about/complaints">Complaints and Feedback</Link>
                </li>
                <li>
                  <Link href="/about/service">Service Charter</Link>
                </li>
                <li>
                  <Link href="/about/customer">
                    Customer Satisfaction Survey
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Page Content */}
      <div className="mt-10 text-red-300"> Home Page Content </div>
    </div>
  );
}
