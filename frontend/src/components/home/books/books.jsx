"use client";

import { useState } from "react";
import axios from "axios";

import Image from "next/image";

const Books = () => {
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
      const response = await axios.post("/api/email", { email, phone });

      setMessage(
        "✅ JazakAllah Khair! May Allah (SWT) reward us abundantly and help us revive the Sunnah of The Prophet (ﷺ). Please find the book in your email."
      );

      setEmail("");
      setPhone("");

      // Close initial popup and open response popup
      setIsOpen(false);
      setIsResponseOpen(true);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "❌ An error occurred. Please try again.";
      setMessage(errorMessage);
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-300 p-10 flex flex-col gap-16 items-center justify-center relative">
      {/* Top Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-80 flex justify-center">
          <Image
            src="/book1.png"
            alt="Prophet's Mosque"
            width={350}
            height={150}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 text-left space-y-4">
          <p className="text-xl text-white font-medium">
            Discover the extraordinary life of Prophet Muhammad (ﷺ) and his
            transformative impact on society.
          </p>
          <p className="text-white italic text-xl">
            قُلْ إِن كُنتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ
            اللَّهُ
          </p>
          <p className="text-white text-lg">
            If you should love Allah, then follow me, Allah will love you.
            <br />
            <span className="font-semibold">Qur'an 3:31</span>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 text-left space-y-4">
          <h3 className="text-lg font-bold text-gray-900">
            A MUST-READ FOR EVERY YOUNG MUSLIM
          </h3>
          <p className="text-gray-800 font-semibold">
            Muhammad (ﷺ) - An Example of Love, Humility, and Compassion.
          </p>
          <p className="text-gray-800">
            An inspirational journey to learn the Seerah, The Legacy of the
            Prophet (ﷺ) told to you in simple, engaging fashion. Know him, love
            him, and follow him.
          </p>
          {/* Direct Download Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded-md shadow-md font-semibold mt-4"
          >
            Free Download
          </button>
        </div>
      </div>

      {/* Initial Popup */}
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

            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {/* Response Popup */}
      {isResponseOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <p className="text-gray-800 mt-2 font-semibold">{message}</p>

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
};

export default Books;
