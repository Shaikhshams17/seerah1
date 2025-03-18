export default function AboutBook() {
    return (
      <div id="aboutthisbook" className="px-4 md:px-16 lg:px-24 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Book Image */}
          <div>
            <img
              src="/book.jpg" // Replace with the actual image name in the public folder
              alt="Muhammad (pbuh) Book Cover"
              className="w-[40vh] h-[60vh] rounded-lg shadow-md md:ml-20"
            />
          </div>
  
          {/* Book Description */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">About the book</h2>
  
            <p className="text-gray-700 mb-4">
              This book is a labor of love, born from my deep passion for the life of Prophet Muhammad (ﷺ). My mission is to make the Seerah accessible and engaging for every young man and woman around the world.
            </p>
  
            <p className="text-gray-700 mb-4">
              Written in a clear and concise style, the book is designed to captivate young readers with short, impactful lessons across seven chapters. Each chapter concludes with ten multiple-choice questions to reinforce understanding and reflection.
            </p>
  
            <p className="text-gray-700 mb-4">
              Inspired by three timeless classics—<em>The Sealed Nectar</em> by Saifur Rahman Mubarakpuri, <em>The Life of Muhammad</em> (ﷺ) (by Muhammad Husayn Haykal), and <em>Muhammad (ﷺ): His Life Based on the Earliest Sources</em> by Martin Lings—this book brings the essence of these scholarly works to a new generation.
            </p>
  
            <p className="text-gray-700 mb-4">
              Let us pray that Allah (SWT) rewards every scholar who has contributed to the study of the Seerah and grants us all His mercy. Aameen.
            </p>
  
            <p className="text-gray-700">
              This is more than a book—it's been my journey to learn to love him.
            </p>
          </div>
        </div>
      </div>
    );
  }
  