"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBooksOpen, setBooksOpen] = useState(false);
  const [isEventsOpen, setEventsOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Books",
      path: "/books",
      dropdown: [
        { name: "Why this book", path: "#whythisbook" },
        { name: "About this book", path: "#aboutthisbook" },
        { name: "Author", path: "#author" },
      ],
    },
    {
      name: "Events",
      // Note: no parent path here because "Workshop" is on the home page.
      dropdown: [
        { name: "Workshop", path: "#workshop" },
        { name: "Global Event", path: "#" },
      ],
    },
    {
      name: "About Us",
      path: "/about",
      dropdown: [
        { name: "Team", path: "#team" },
        { name: "Volunteer", path: "#volunteer" },
      ],
    },
    { name: "Contact Us", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleBooks = () => setBooksOpen(!isBooksOpen);
  const toggleEvents = () => setEventsOpen(!isEventsOpen);
  const toggleAbout = () => setAboutOpen(!isAboutOpen);

  // Updated helper: if no parentPath is provided and the sublink path is an anchor,
  // default to the home page ("/").
  const getSublinkHref = (parentPath, sublinkPath) => {
    if (sublinkPath.startsWith("#")) {
      return (parentPath ? `${parentPath}${sublinkPath}` : `/${sublinkPath}`);
    }
    return sublinkPath;
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/logo.png"
            alt="Logo"
            width={150}
            height={150}
            className="w-40 h-16 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-base font-medium items-center">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                {link.dropdown ? (
                  <>
                    {/* Parent link (also clickable if you add a path) */}
                    <Link 
                      href={link.path || "#"}
                      className="text-white hover:text-orange-400 transition-colors cursor-pointer"
                    >
                      {link.name}
                    </Link>
                    
                    {/* Dropdown on hover */}
                    <ul className="absolute left-0 mt-2 w-40 bg-black border border-yellow-500 rounded shadow-lg 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {link.dropdown.map((sublink, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={getSublinkHref(link.path, sublink.path)}
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
                    className="text-white hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Arabic Logo (Desktop) */}
          <Image
            src="/button.png"
            alt="Arabic Logo"
            width={80}
            height={40}
            className="w-24 h-auto object-contain cursor-pointer"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-yellow-500/20 transition-colors"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-orange-400" />
          ) : (
            <Menu className="h-6 w-6 text-orange-400" />
          )}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-full bg-blue-900 border-t border-yellow-500 z-40">
          <ul className="flex flex-col space-y-2 py-4 px-6 text-yellow-400">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.dropdown ? (
                  <>
                    {/* Toggle sub-menu on button click */}
                    <button
                      onClick={() => {
                        if (link.name === "Books") toggleBooks();
                        else if (link.name === "Events") toggleEvents();
                        else if (link.name === "About Us") toggleAbout();
                      }}
                      className="w-full text-left px-4 py-3 rounded-lg font-medium hover:bg-yellow-500/20 transition-colors"
                    >
                      {link.name}
                    </button>

                    {/* Sub-menu */}
                    {(link.name === "Books" && isBooksOpen) ||
                    (link.name === "Events" && isEventsOpen) ||
                    (link.name === "About Us" && isAboutOpen) ? (
                      <ul className="ml-4 mt-2 space-y-2">
                        {link.dropdown.map((sublink, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={getSublinkHref(link.path, sublink.path)}
                              onClick={toggleMenu}
                              className="block px-4 py-2 rounded-lg hover:bg-yellow-500/20 transition-colors"
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : (
                  <Link
                    href={link.path}
                    onClick={toggleMenu}
                    className="block px-4 py-3 rounded-lg font-medium hover:bg-yellow-500/20 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}

            {/* Arabic Logo (Mobile) */}
            <li className="mt-2 flex justify-center">
              <Image
                src="/button.png"
                alt="Arabic Logo"
                width={60}
                height={30}
                className="w-20 h-auto object-contain cursor-pointer"
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
