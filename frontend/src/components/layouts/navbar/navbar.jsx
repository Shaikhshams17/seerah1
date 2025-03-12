"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Mobile dropdown states
  const [isBooksOpen, setBooksOpen] = useState(false);
  const [isEventsOpen, setEventsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Books",
      dropdown: [
        { name: "Why this book", path: "#why-this-book" },
        { name: "About this book", path: "#why-this-book" },
        { name: "Author", path: "#author" },
      ],
    },
    {
      name: "Events",
      dropdown: [
        { name: "Workshop", path: "#workshop" },
        { name: "Global Workshop", path: "#" },
      ],
    },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleBooks = () => setBooksOpen(!isBooksOpen);
  const toggleEvents = () => setEventsOpen(!isEventsOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex justify-between items-center">
        {/* Left-aligned Logo */}
        <Link href="/">
          <Image 
            src="/logo.png" // Ensure the logo is in the 'public' folder
            alt="Logo"
            width={150}
            height={150}
            className="w-40 h-16 object-contain"
          />
        </Link>

        {/* Desktop Navigation + Arabic Image (Right Aligned) */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-base font-medium items-center">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                {link.dropdown ? (
                  <>
                    {/* Display the nav link text and show dropdown on hover */}
                    <span className="text-white hover:text-yellow-300 transition-colors cursor-pointer">
                      {link.name}
                    </span>
                    <ul className="absolute left-0 mt-2 w-40 bg-black border border-yellow-500 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {link.dropdown.map((sublink, subIndex) => (
                        <li key={subIndex}>
                          <Link 
                            href={sublink.path} 
                            className="block px-4 py-2 text-white hover:bg-yellow-500/20"
                          >
                            {sublink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link 
                    href={link.path} 
                    className="hover:text-yellow-300 text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Arabic Image Button */}
          <Link href="/arabic">
            <Image 
              src="/button.png" // Ensure the image is in the 'public' folder
              alt="Arabic Button"
              width={80}
              height={40}
              className="w-24 h-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-yellow-500/20 transition-colors"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-yellow-400" />
          ) : (
            <Menu className="h-6 w-6 text-yellow-400" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 border-t border-yellow-500">
          <ul className="flex flex-col space-y-2 py-4 px-6 text-yellow-400">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.dropdown ? (
                  <div>
                    <button 
                      onClick={() => {
                        if (link.name === "Books") {
                          toggleBooks();
                        } else if (link.name === "Events") {
                          toggleEvents();
                        }
                      }}
                      className="w-full text-left px-4 py-3 rounded-lg font-medium hover:bg-yellow-500/20 transition-colors"
                    >
                      {link.name}
                    </button>
                    {(link.name === "Books" && isBooksOpen) ||
                    (link.name === "Events" && isEventsOpen) ? (
                      <ul className="ml-4 mt-2 space-y-2">
                        {link.dropdown.map((sublink, subIndex) => (
                          <li key={subIndex} onClick={toggleMenu}>
                            <Link 
                              href={sublink.path} 
                              className="block px-4 py-2 rounded-lg hover:bg-yellow-500/20 transition-colors"
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <Link 
                    href={link.path} 
                    onClick={toggleMenu} 
                    className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-yellow-500/20 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            {/* Arabic Image Button for Mobile */}
            <li className="mt-2 flex justify-center">
              <Link href="/arabic">
                <Image 
                  src="/button.png" // Ensure the image is in the 'public' folder
                  alt="Arabic Button"
                  width={60}
                  height={30}
                  className="w-20 h-auto object-contain cursor-pointer"
                />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
