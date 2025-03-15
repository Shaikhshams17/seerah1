'use client';

import Footer from "@/components/layouts/footer/footer";
import Navbar from "@/components/layouts/navbar/navbar";
import HeroBook from "@/components/book/herobook/hero";
import Author from "@/components/book/author/author";
import AboutBook from "@/components/book/aboutbook/booksection";
import WhyThisBook from "@/components/book/whythisbook/whythisbook";



export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroBook/>
      <WhyThisBook/>
      <hr className="border-t-2 border-black my-6" />
      <AboutBook/>
      <hr className="border-t-2 border-black my-6" />
      <Author/>
      <Footer/>
    </div>
  );
}
