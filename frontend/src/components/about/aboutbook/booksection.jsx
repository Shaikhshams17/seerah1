import Image from "next/image";

const BookSection = () => {
  return (
    <div id="why-this-book"     className="max-w-6xl mx-auto px-4 md:px-8 py-10">
      {/* Grid Layout for Alignment */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Left Side - Book Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/book2.png" // Ensure this image is inside the public folder
            alt="Book Cover"
            width={280}  // Adjust for proper sizing
            height={380} // Adjust for proper sizing
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Book Description (Spans 2 columns in desktop) */}
        <div className="md:col-span-2">
          <h2 className="text-lg md:text-xl font-semibold mb-3 text-right">
            About the book
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-right">
            This book is a labor of love, born from my deep passion for the life of Prophet 
            Muhammad (ﷺ). My mission is to make the Seerah accessible and engaging for every 
            young man and woman around the world.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-3 text-right">
            Written in a clear and concise style, the book is designed to captivate young readers 
            with short, impactful lessons across seven chapters. Each chapter concludes with 
            ten multiple-choice questions to reinforce understanding and reflection.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-3 text-right ">
            Inspired by three timeless classics—The Sealed Nectar by Safiur Rahman Mubarakpuri, 
            The Life of Muhammad (ﷺ) by Muhammad Husayn Haykal, and Muhammad (ﷺ): His Life Based 
            on the Earliest Sources by Martin Lings—this book brings the essence of these scholarly 
            works to a new generation.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-3 text-right md:text-right">
            Let us pray that Allah (SWT) rewards every scholar who has contributed to the study 
            of the Seerah and grants us all His mercy. Aameen.
          </p>

          <p className="text-sm md:text-base text-gray-700 font-semibold mt-3 text-right ">
            This is more than a book—it’s been my journey to learn to love him.
          </p>
        </div>
      </div>
      <div className="w-full h-[3px] bg-black mt-12"></div>
    </div>
  );
};

export default BookSection;
