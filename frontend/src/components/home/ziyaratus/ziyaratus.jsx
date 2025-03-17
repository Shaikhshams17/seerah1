import Image from "next/image";

const ZiyaratusSeerah = () => {
  return (
    <div className="relative w-full h-screen md:h-[100vh] flex justify-center items-center mb-12">
      {/* Image visible only on md and above */}
      <div className="hidden md:block absolute inset-0 ">
        <Image
          src="/ziya.jpg" // Replace with actual background image path
          alt="Ziyaratus Seerah Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Optional Content */}
      {/* <div className="absolute text-center text-white z-10">
        <h2 className="text-4xl sm:text-5xl font-bold">Ziyaratus Seerah</h2>
        <p className="mt-4 text-lg sm:text-xl">Experience the life and teachings of the Prophet (ﷺ)</p>
      </div> */}
    </div>
  );
};

export default ZiyaratusSeerah;
