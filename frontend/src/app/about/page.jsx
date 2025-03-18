'use client';

import Seerah from "@/components/about/aboutseerah/seerah";
import Hero from "@/components/about/hero/hero";
import Teams from "@/components/about/team/team";
import Footer from "@/components/layouts/footer/footer";
import Navbar from "@/components/layouts/navbar/navbar";
import Volunteer from "@/components/about/Volunteer/Volunteer";


export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* <Hero/> */}
      <Seerah/>
      <hr className="border-t-2 border-black my-6" />
      <Teams/>
      <hr className="border-t-2 border-black my-6" />
      <Volunteer/>
      <Footer/>
    </div>
  );
}
