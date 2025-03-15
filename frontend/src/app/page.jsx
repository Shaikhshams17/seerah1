"use client";
import Books from "@/components/home/books/books";
import Gallery from "@/components/home/gallery/gallery";
import Hero from "@/components/home/hero/hero";
import Testimonials from "@/components/home/testimonials/testimonials";
import SeerahWorkshop from "@/components/home/workshop/workshop";
import ZiyaratusSeerah from "@/components/home/ziyaratus/ziyaratus";
import Footer from "@/components/layouts/footer/footer";
import Navbar from "@/components/layouts/navbar/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SeerahWorkshop />
      <ZiyaratusSeerah />
      <Books />
      {/* <Testimonials /> */}
      <Gallery />
      <Footer />
    </div>
  );
}
