'use client';

import Contact from "@/components/contactus/herocontact";
import Footer from "@/components/layouts/footer/footer";
import Navbar from "@/components/layouts/navbar/navbar";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Contact/>
      <Footer/>
    </div>
  );
}
