'use client';

import BookSection from "@/components/about/aboutbook/booksection";
import Author from "@/components/about/author/author";
import Hero from "@/components/about/hero/hero";
import VolunteerTeam from "@/components/about/team/team";
import Footer from "@/components/layouts/footer/footer";
import Navbar from "@/components/layouts/navbar/navbar";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Author/>
      <BookSection/>
      <VolunteerTeam/>
      <Footer/>
     
    </div>
  );
}
