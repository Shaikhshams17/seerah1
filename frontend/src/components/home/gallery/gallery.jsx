import Image from "next/image";

const Gallery = () => {
  const images = [
    { src: "/gallery/6.jpeg", name: "Zaheda Appa -President AMP" },
    { src: "/gallery/7.jpeg", name: "Sameer Siddiqui-IAS Coach" },
    { src: "/gallery/10.jpeg", name: "Uzma Nahid Saheba-AIMPLB" },
    { src: "/gallery/2.jpeg", name: "Dr Omar Suleiman - Yaqeen Institute" },
    { src: "/gallery/3.jpeg", name: "Ameer-e-Shariat Karnataka" },
    { src: "/gallery/5.jpeg", name: "Nazim Farooqui" },
    // { src: "/gallery/13.jpeg", name: "Zaheer Uddin Ali Khan - Siasat Media" },
    { src: "/gallery/9.jpeg", name: "Zaheer Uddin Ali Khan - Siasat Media" },
    { src: "/gallery/14.jpg", name: "Qadeer Sahab" },
    { src: "/gallery/15.jpg", name: "Moulana Yunus Nadvi" },
    { src: "/gallery/11.jpeg", name: "Asif Mujtaba  miles2smiles" },
    { src: "/gallery/1.jpeg", name: "Zahed Ali Khan - Siasat Media" }
    
    
    
  ];

  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-center text-3xl text-black font-bold mb-8">Gallery</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            {/* Ensure images load properly */}
            <Image
              src={image.src}
              alt={image.name}
              width={500}
              height={500}
              className="h-auto max-w-full transition-transform duration-300 group-hover:scale-105 rounded-lg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50">
              <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
