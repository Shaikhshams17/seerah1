export default function Teams() {
  const teamMembers = [
    {
      name: "Mohammed Yunus",
      title: "Founder Seerah One",
      image: "/team/team5.png",
    },
    {
      name: "Zakeer Hussain",
      title: "Founder Thecognate",
      image: "/team/team2.jpg",
    },
    {
      name: "Maulana Asif Khan",
      title: "Imam & Khateeb at Masjid Alquba\nShampur Road Bangalore",
      image: "/team/team1.jpg",
    },
    {
      name: "Sameer Barde",
      title: "Senior Manager HP",
      image: "/team/team3.jpg",
    },
  ];

  return (
    <div id="#team" className="px-4 md:px-16 lg:px-24 py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600 whitespace-pre-line">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
