"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function SeerahWorkshop() {
  // Popup states (unchanged download logic)
  const [isOpen, setIsOpen] = useState(false);
  const [isResponseOpen, setIsResponseOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleDownload = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!email || !phone) {
      setMessage("❌ Please enter a valid email and phone number.");
      return;
    }

    try {
      // Example POST request to your API endpoint
      await axios.post("/api/email", { email, phone });
      setMessage(
        "✅ JazakAllah Khair! May Allah (SWT) reward us abundantly and help us revive the Sunnah of The Prophet (ﷺ). Please find the book in your email."
      );

      // Clear form
      setEmail("");
      setPhone("");

      // Close initial popup and open response popup
      setIsOpen(false);
      setIsResponseOpen(true);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "❌ An error occurred. Please try again.";
      setMessage(errorMessage);
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-700 min-h-screen text-white py-10 px-4 flex flex-col items-center gap-12 relative">
      {/* --- TOP SECTION --- */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Mosque Image */}
        <div className="flex justify-center">
          <Image
            src="/book1.jpg" // Replace with your actual image path
            alt="Prophet's Mosque"
            width={350}
            height={450}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right: Main Text */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            Discover the extraordinary life of Prophet Muhammad (ﷺ) and his transformative impact on society.
          </h2>
          <p className="italic text-lg md:text-xl">
            قُلْ إِن كُنتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللَّهُ
          </p>
          <p className="text-base md:text-lg">
            If you should love Allah, then follow me, Allah will love you.
            <br />
            <span className="font-semibold">Qur'an 3:31</span>
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Experience an engaging narrative of Prophet Muhammad's (ﷺ) life, 
            from pre-birth Jahiliyyah to his noble birth, prophethood, 
            challenges in Makkah, inspiring the Sahaba, migration to Madinah, 
            triumphant return to Makkah, and his passing after fulfilling his mission.
          </p>
        </div>
      </div>

      {/* --- BOTTOM SECTION --- */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Text & Download Button */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold uppercase tracking-wide">
            A MUST-READ FOR EVERY YOUNG MUSLIM
          </h3>
          <p className="font-semibold text-xl">
            Muhammad (ﷺ) – An Example of love, Humility, and compassion.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            An inspirational journey to learn the Seerah,
            The Legacy of the Prophet (ﷺ) told to you in simple engaging fashion.
            Know him, love him, and follow him.
          </p>
          {/* Download Button triggers the popup */}
          <button
            onClick={() => setIsOpen(true)}
            className="inline-block bg-black text-white px-6 py-2 rounded-md shadow-md font-semibold mt-4 hover:bg-gray-800 transition-colors"
          >
            Free Download
          </button>
        </div>

        {/* Right: Book Cover Image */}
        <div className="flex justify-center">
          <Image
            src="/book.jpg" // Replace with your actual book cover path
            alt="Seerah Book Cover"
            width={300}
            height={450}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* --- INITIAL POPUP (COLLECT EMAIL/PHONE) --- */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <div className="flex items-center space-x-1">
              <h2 className="text-gray-800 font-bold">Get the</h2>
              <h2 className="text-green-500 font-bold">FREE</h2>
              <h2 className="text-gray-800 font-bold">ebook!</h2>
            </div>
            <p className="text-gray-800 mt-2 font-semibold">
              Let me know where to send the{" "}
              <span className="text-green-500">Seerah PDF</span>.
            </p>
            <form className="mt-4" onSubmit={handleDownload}>
              <input
                type="email"
                placeholder="Enter your email"
                className="text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="text-black w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button
                type="submit"
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md font-semibold"
              >
                Submit
              </button>
            </form>
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {/* --- RESPONSE POPUP (SUCCESS OR ERROR) --- */}
      {isResponseOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <p className="text-gray-800 mt-2 font-semibold">{message}</p>
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsResponseOpen(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
