import Image from "next/image";

const Gallery = () => {
  const images = [
    { src: "/gallery/6.jpeg", name: "Image 6" },
    { src: "/gallery/7.jpeg", name: "Image 7" },
    { src: "/gallery/10.jpeg", name: "Image 10" },
    { src: "/gallery/2.jpeg", name: "Image 2" },
    { src: "/gallery/3.jpeg", name: "Image 3" },
    { src: "/gallery/5.jpeg", name: "Image 5" },
    { src: "/gallery/13.jpeg", name: "Image 13" },
    { src: "/gallery/11.jpeg", name: "Image 11" },
    { src: "/gallery/1.jpeg", name: "Image 1" },
    { src: "/gallery/9.jpeg", name: "Image 9" },
    { src: "/gallery/14.jpg", name: "Image 14" },
    { src: "/gallery/15.jpg", name: "Image 15" }
  ];

  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-center text-2xl font-bold mb-8">Gallery</h2>
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
