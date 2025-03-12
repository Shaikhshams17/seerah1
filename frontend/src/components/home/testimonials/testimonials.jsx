const Testimonials = () => {
    const testimonials = [
      {
        quote:
          "As an Imam and educator, I highly recommend this book to every Muslim seeking a deeper understanding of the life and teachings of our beloved Prophet Muhammad (ﷺ). It offers valuable lessons and guidance for modern-day challenges.",
        author: "Sheikh Ahmed Ibrahim",
        position: "Islamic Scholar & Educator",
      },
      {
        quote:
          "This book stands as a masterpiece and meticulously crafted to provide a deep understanding of the life, character, and mission of Prophet Muhammad (ﷺ). It is a good read for students, scholars, and anyone seeking knowledge about Islam's most influential figure.",
        author: "Dr. Ibrahim Khalil",
        position: "Professor of Islamic Studies",
      },
      {
        quote:
          "I feel like I've learnt so much! It delivers all the knowledge at an extremely basic and broken-down level which makes it easy to understand, especially for teenagers who are just starting to learn more about Islam. It encapsulates a very simplified form of everything important that the Prophet (ﷺ) has taught us. It helps one so much because real life lessons are taught about the Prophet in a seemingly short story.",
        author: "Ayesha Fatima",
        position: "Student",
      },
      {
        quote:
          "Helped me remain glued to the book! The best thing that I liked in this book is the use of contemporary words which made it easy to follow along. The narration is fluid which helped me remain glued to the book. Having small size chapters, it makes sure that a page is reached to get a quick summary of the entire section. The lack of minute details leaves you wanting more.",
        author: "Tariq Ahmed",
        position: "Technical Management Professional",
      },
    ];
  
    return (
      <div className="bg-black text-white py-12 px-6">
        <h2 className="text-center text-2xl font-bold uppercase mb-8">Reader Review</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-md border border-gray-300"
            >
              <p className="text-lg italic">"{testimonial.quote}"</p>
              <div className="mt-4 text-sm font-semibold">
                <p>{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  