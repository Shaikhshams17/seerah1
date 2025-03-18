import Image from "next/image";

const ZiyaratusSeerah = () => {
  return (
    <div className="relative w-full h-screen md:h-[100vh] flex justify-center items-center mb-12">
      {/* Background Image visible only on md and above */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/ziya.png" // Replace with your actual background image path
          alt="Ziyaratus Seerah Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Text at the bottom-left */}
      <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 text-white z-10 font-sameAsImage">
        <a
          href="/contact"
          className="inline-block text-base sm:text-lg md:text-2xl  hover:text-orange-400 ml-30"
        >
          Join us in this incredible journey
        </a>
      </div>
    </div>
  );
};

export default ZiyaratusSeerah;
