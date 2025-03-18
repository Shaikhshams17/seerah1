export default function Author() {
    return (
      <div className="px-4 md:px-16 lg:px-24 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">About the Author</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Author Description */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Mohammed Yunus</h3>
            <p className="text-gray-700 mb-4">
              A seasoned professional with over three decades of diverse experience spanning corporate leadership, entrepreneurship, and transformational coaching.
            </p>
  
            <p className="text-gray-700 mb-4">
              Starting his career in the hospitality industry, Mohammed served as the <strong>Head of Sales and Training</strong>, conducting training workshops across India, Sri Lanka, and the Maldives. His expertise extended to strategic roles such as <strong>India Head of Strategic Partnerships</strong> at Apollo Hospitals' Medvarsity, and <strong>Director of Sales</strong> for India and the Middle East at Connect Habitat, a Mangalore-based real estate company. His entrepreneurial ventures include running successful restaurants and corporate catering services in Bangalore.
            </p>
  
            <p className="text-gray-700 mb-4">
              Beyond his corporate achievements, Mohammed is deeply passionate about inspiring young individuals through the life lessons of the Seerah of Prophet Muhammad (ﷺ). As an author, he has penned a book <strong>Muhammad (ﷺ) Love, Humility and Compassion</strong> aimed at helping teenagers find purpose and growth through the Prophet’s (ﷺ) life. As a <strong>transformational coach</strong>, he integrates the wisdom of the Seerah into personal and professional development, advocating for its profound impact on leadership and self-improvement.
            </p>
  
            <p className="text-gray-700">
              Today, Mohammed is on a mission to share the extraordinary relevance of the Seerah with everyone worldwide, believing that its study can truly empower people to achieve personal growth and become exceptional leaders. In sha Allah.
            </p>
          </div>
  
          {/* Author Image */}
          <div>
            <img
              src="/team/team5.png" // Replace with your actual image path in the public folder
              alt="Mohammed Yunus"
              className="w-[60vh] h-auto rounded-lg shadow-md md:ml-24"
            />
          </div>
        </div>
      </div>
    );
  }
  