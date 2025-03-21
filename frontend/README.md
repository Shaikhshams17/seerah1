This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
#   s e e r a h 
 
 #   s e e r a h 
 
 

// "use client"; // Make sure this is here so we can use React state/hooks in Next.js 13+

// import { useState } from "react";
// import Image from "next/image";

// const Books = () => {
// const [isOpen, setIsOpen] = useState(false);
// const [email, setEmail] = useState("");
// const [phone, setPhone] = useState("");
// const [message, setMessage] = useState("");
// const [loading, setLoading] = useState(false);

// const handleDownload = async (e) => {
// e.preventDefault();

// // 1. Quick validation
// if (!email || !phone) {
// setMessage("❌ Please enter a valid email and phone number.");
// return;
// }

// setLoading(true);
// setMessage("");

// try {
// // 2. Send a POST request to our Next.js API route
// const response = await fetch("/api/sendEmail", {
// method: "POST",
// headers: {
// "Content-Type": "application/json",
// },
// body: JSON.stringify({ email, phone }),
// });

// // 3. Parse the JSON response
// const result = await response.json();

// // 4. Check if success
// if (response.ok) {
// setMessage("✅ JazakAllah Khair! The book has been sent to your email.");
// setEmail("");
// setPhone("");
// } else {
// setMessage(`❌ Error: ${result.message || "Failed to send email."}`);
// }
// } catch (error) {
// console.error(error);
// setMessage("❌ An unexpected error occurred. Please try again.");
// } finally {
// setLoading(false);
// }
// };

// return (
// <div className="bg-gradient-to-b from-gray-900 to-gray-300 p-10 flex flex-col gap-16 items-center justify-center relative">
// {/_ Top Section _/}
// <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
// <div className="w-full md:w-80 flex justify-center">
// <Image
// src="/book1.png"
// alt="Prophet's Mosque"
// width={350}
// height={150}
// className="rounded-lg shadow-md"
// />
// </div>
// <div className="w-full md:w-1/2 text-left space-y-4">
// <p className="text-xl text-white font-medium">
// Discover the extraordinary life of Prophet Muhammad (ﷺ) and his transformative impact on society.
// </p>
// <p className="text-white italic text-xl">
// قُلْ إِن كُنتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللَّهُ
// </p>
// <p className="text-white text-lg">
// If you should love Allah, then follow me, Allah will love you.<br />
// <span className="font-semibold">Qur'an 3:31</span>
// </p>
// </div>
// </div>

// {/_ Bottom Section _/}
// <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
// <div className="w-full md:w-1/2 text-left space-y-4">
// <h3 className="text-lg font-bold text-gray-900">
// A MUST-READ FOR EVERY YOUNG MUSLIM
// </h3>
// <p className="text-gray-800 font-semibold">
// Muhammad (ﷺ) - An Example of Love, Humility, and Compassion.
// </p>
// <p className="text-gray-800">
// An inspirational journey to learn the Seerah, The Legacy of the Prophet (ﷺ) told to you in simple, engaging fashion.
// Know him, love him, and follow him.
// </p>
// <button
// className="bg-orange-500 text-white px-6 py-2 rounded-md shadow-md font-semibold mt-4"
// onClick={() => setIsOpen(true)}
// >
// Free Download
// </button>
// </div>
// <div className="w-full md:w-1/2 flex justify-center">
// <Image
// src="/book2.png"
// alt="Muhammad (pbuh) Book"
// width={250}
// height={300}
// className="rounded-lg shadow-md"
// />
// </div>
// </div>

// {/_ Popup Form _/}
// {isOpen && (
// <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
// <h2 className="text-xl font-bold text-gray-900">Get the FREE ebook!</h2>
// <p className="text-gray-700 mt-2 font-semibold">
// Enter your details to receive the Seerah PDF.
// </p>
// <form className="mt-4" onSubmit={handleDownload}>
// <input
// type="email"
// placeholder="Enter your email"
// className="w-full px-4 py-2 border rounded-md focus:outline-none"
// value={email}
// onChange={(e) => setEmail(e.target.value)}
// required
// />
// <input
// type="tel"
// placeholder="Enter your phone number"
// className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none"
// value={phone}
// onChange={(e) => setPhone(e.target.value)}
// required
// />
// <button
// type="submit"
// className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md font-semibold flex justify-center items-center"
// disabled={loading}
// >
// {loading ? "Sending..." : "Submit"}
// </button>
// {message && (
// <p
// className={`mt-3 ${
//                     message.startsWith("✅") ? "text-green-600" : "text-red-600"
//                   }`}
// >
// {message}
// </p>
// )}
// </form>
// <button
// className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
// onClick={() => setIsOpen(false)}
// >
// ✖
// </button>
// </div>
// </div>
// )}
// </div>
// );
// };

// export default Books;
