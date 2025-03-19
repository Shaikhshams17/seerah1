import Link from "next/link";

export default function Teams() {
  const teamMembers = [
    {
      name: "Maulana Asif Khan",
      title: "Imam & Khateeb at Masjid Alquba\nShampur Road Bangalore",
      image: "/team/team1.jpg",
      linkedin: "https://www.linkedin.com/in/maulana-asif-khan",
    },
    {
      name: "Mohammed Yunus",
      title: "Founder Seerah One",
      image: "/team/team5.png",
      linkedin: "https://www.linkedin.com/in/mohammed-yunus-4216704?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Sameer Barde",
      title: "Senior Manager HP",
      image: "/team/team3.jpg",
      linkedin: "https://www.linkedin.com/in/sameer-barde-84a57413?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Zakeer Hussain",
      title: "Founder Thecognate",
      image: "/team/team2.jpg",
      linkedin: "https://www.linkedin.com/in/shaikzakeerhussain?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  return (
    <div id="team" className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-4xl md:text-4xl font-bold mb-6">Team</h2>

      {/* Single Row for all members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-80 h-80 object-cover rounded-lg shadow-md"
            />
            {member.name === "Maulana Asif Khan" ? (
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
            ) : (
              <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <h3 className="mt-4 text-lg font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">
                  {member.name}
                </h3>
              </Link>
            )}
            <p className="text-sm text-gray-600 whitespace-pre-line">
              {member.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
