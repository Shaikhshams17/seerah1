import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-400">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Section - Seerah Logo & Description */}
        <div className="w-full md:w-1/3">
          <Link href="/">
            <Image 
              src="/logo.png" // Ensure the logo is in the 'public' folder
              alt="Seerah Logo"
              width={120}
              height={40}
              className="w-32 h-auto mb-4"
            />
          </Link>
          <p className="text-white text-sm leading-relaxed">
            Discover the profound legacy of Prophet Muhammad (pbuh) 
            and gain inspiration for a meaningful life.
          </p>
        </div>

        {/* Center Section - Company Links */}
        <div className="w-full md:w-1/3 text-center mt-6 md:mt-0">
          <h3 className="text-lg font-semibold">Seerah</h3>
          <ul className="mt-3 space-y-2 text-white text-sm">
            <li><Link href="/about" className="hover:text-yellow-300">About</Link></li>
            <li><Link href="/books" className="hover:text-yellow-300">Books</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Right Section - Arabic Logo & Social Media */}
        <div className="w-full md:w-1/3 text-right mt-6 md:mt-0">
          <Image 
            src="/button.png" // Ensure this Arabic logo is in the 'public' folder
            alt="Arabic Logo"
            width={80}
            height={40}
            className="w-20 h-auto mb-4 inline-block"
          />
          <p className="text-white text-sm">Connect with us on social media for more insights.</p>
          <div className="flex justify-end space-x-4 mt-3">
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="text-white text-xl hover:text-yellow-300" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="text-white text-xl hover:text-yellow-300" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook className="text-white text-xl hover:text-yellow-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider Line Above Copyright Text */}
      <div className="border-t border-gray-300 w-full"></div>

      {/* Copyright Section */}
      <div className="text-center py-4 text-xs text-gray-400">
        Copyright © 2023 | ONE NEEDS EDUCATION FOUNDATION | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
