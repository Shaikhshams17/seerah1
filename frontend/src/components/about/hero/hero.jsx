import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[100vh] lg:h-[100vh] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/homehero.jpg" // Ensure this image is inside the 'public' folder
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay with Opacity */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> */}

      {/* Hero Text */}
      <h1 className="relative z-20 text-3xl md:text-5xl text-white font-semibold">ABOUT US</h1>
    </div>
  );
};

export default Hero;
