import Image from "next/image";

const Gallery = () => {
  const images = [
   "/gallery/6.jpeg", "/gallery/7.jpeg", "/gallery/10.jpeg", "/gallery/2.jpeg", "/gallery/3.jpeg", "/gallery/5.jpeg", "/gallery/13.jpeg", 
    "/gallery/11.jpeg","/gallery/1.jpeg", "/gallery/9.jpeg",,"/gallery/4.jpeg" , "/gallery/8.jpeg"
  ];

  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-center text-2xl font-bold mb-8">Gallery</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
