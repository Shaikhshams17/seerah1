"use client";

export default function WhyThisBook() {
  return (
    <div id="whythisbook" className="bg-white px-4 md:px-8 lg:px-16 xl:px-24 py-8 md:py-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why this book
          </h2>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            This book addresses a noticeable gap in English literature on the Seerah, particularly for readers aged 10 to 16.
            Most books are either simplified bedtime stories for young children (3–6 years) or detailed accounts meant for adults.
            To bridge this gap, we have created a concise Seerah that offers a clear and engaging overview of the life of Rasoolullah (ﷺ),
            providing young readers with meaningful insights into his life and the mission.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4">
            The Seerah helps youngsters connect with Prophet Muhammad (ﷺ) in a meaningful way.
            His life is filled with lessons of kindness, patience, and perseverance that can inspire young minds.
            By learning about his struggles and triumphs, children would draw valuable morals that shape their character and strengthen their beliefs.
          </p>

          <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4">
            The Seerah also makes history come alive, allowing youngsters to see the world of the past through engaging storytelling.
            It helps build a strong foundation of Islamic identity. It further helps them navigate modern challenges with wisdom and confidence.
            We sincerely hope you enjoy the read.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img 
            src="/book.jpg" 
            alt="Seerah Book" 
            className="w-[40vh] h-[60vh] rounded-lg shadow-md md:ml-40"
          />
        </div>
      </div>
    </div>
  );
}
