import Image from "next/image";

const Author = () => {
  return (
    <div id="author"    className="max-w-6xl mx-auto px-4 md:px-8 py-10">
      {/* Title with Underline */}
      <div className="text-left mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900">
          About the Author
        </h2>
        <div className="w-24 h-[3px] bg-gray-700 mt-2"></div>
      </div>

      {/* Content Section - Image on Right, Text on Left */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Text Section (Left Side) */}
        <div className="md:col-span-2 text-sm md:text-base text-gray-700 leading-relaxed">
          <p>
            <span className="font-bold">Mohammed Yunus</span> <br />
            A seasoned professional with over three decades of diverse experience spanning corporate leadership, entrepreneurship, and transformational coaching.
          </p>
          <br />
          <p>
            Starting his career in the hospitality industry, Mohammed served as the{" "}
            <span className="font-semibold">Head of Sales and Training</span>,
            conducting training workshops across India, Sri Lanka, and the Maldives. His expertise extended to strategic roles such as{" "}
            <span className="font-semibold">India Head of Strategic Partnerships</span> at Apollo Hospitals' Medvarsity, and{" "}
            <span className="font-semibold">Director of Sales</span> for India and the Middle East at Connect Habitat, a Mangalore-based real estate company.
          </p>
          <br />
          <p>
            Beyond his corporate achievements, Mohammed is deeply passionate about inspiring young individuals through the life lessons of the Seerah of Prophet Muhammad{" "}
            <span className="italic">(ﷺ)</span>. As an author, <span className="font-bold">he has penned a book</span>{" "}
            <span className="italic">
              <strong>Muhammad (ﷺ) Love, Humility and Compassion</strong>
            </span>, aimed at helping teenagers find purpose and growth through the Prophet’s teachings.
          </p>
          <br />
          <p>
            As a <span className="font-semibold">transformational coach</span>, he integrates the wisdom of the Seerah into personal and professional development, advocating for its profound impact on leadership and self-improvement.
          </p>
          <br />
          <p>
            Today, Mohammed is on a mission to share the extraordinary relevance of the Seerah with the world, believing that its study can truly empower people to achieve personal growth and become exceptional leaders,{" "}
            <span className="italic">In Sha Allah</span>.
          </p>
        </div>

        {/* Image Section (Right Side) */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/aboutaurthor.png" // Ensure the image is in the public folder
            alt="Author Image"
            width={280} // Matched to BookSection
            height={380} // Matched to BookSection
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>

      {/* Black Line Below Component */}
      <div className="w-full h-[3px] bg-black mt-10"></div>
    </div>
  );
};

export default Author;
