import Image from "next/image";
import { useState } from "react";

const SeerahWorkshop = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Why should Every Muslim Learn the Seerah of The Prophet (ﷺ)?",
      answer: `None of you will have faith till he loves me more than his father, his children, and all mankind. (Sahih Bukhari - 15)

The life of Prophet Muhammad (ﷺ) is a complete guide in every aspect of our life, at home, with family, in society, and beyond. His wisdom and example show us how to handle everyday chores, build good relationships, and live in harmony with others. His (ﷺ) Sunnah is our guide to live our life in accordance with the Qur’an. Let's begin our journey to connect with the most important person in our lives.

Learn. Reflect. Follow.`,
      button: "Contact for a FREE Session",
    },
    {
      question: "Return to your Rabb - In Pursuit of Allah’s Pleasure",
      answer: `Do not despair in the mercy of Allah (Qur’an 39:53)

A journey of self-discovery and personal growth, that guides the way to the Quran and Sunnah. A simple self-assessment tool to help you reflect on yourself. Take a moment to pause, look within, and understand your true self-worth. Learn practical steps to face challenges in both your personal and work life, and become the best version of yourself.

A step-by-step process that’ll help you to focus on the Dunya and Akhira.`,
      button: "Register to Reflect, Learn, & Grow.",
    },
    {
      question: "The Imaan Challenge Workshop",
      answer: `“Allah does not burden a soul beyond that it can bear” (Qur’an 2:286)

Assess your faith and resilience in facing life’s trials. Are you ready to tackle difficulties with full trust in Allah, or does your Imaan waver under pressure? Discover where you stand on the Imaan Scale and learn proven strategies inspired by the Sahaba to overcome challenges and thrive in both Dunya and Akhirah.

Strengthen your faith. Face life with confidence. Become a Champion of Imaan.`,
      button: "Register now and take the challenge!",
    },
    {
      question: "Leadership Styles and Lessons from the Prophet (ﷺ)",
      answer: `"Each of you is a shepherd, and each of you is responsible for his flock."
(Sahih al-Bukhari, 893; Sahih Muslim, 1829)

The leadership style of the Prophet (ﷺ) exemplified compassion, vision, and decisiveness. His (ﷺ) approach was rooted in fairness, justice, consultation (Shura), and leading by example. Modern leadership concepts of emotional intelligence and transformative leadership align with His (ﷺ) practices. His ability to inspire the Sahaba through empathy, forgiveness, and compassion mirrors the principles of transformational leadership. 

While His (ﷺ) ability to navigate difficult situations with ease, fairness, and humility resonates with every leader with compassion, He prioritized the well-being of his companions over his own.

"The leader of a people is their servant." (Sunan Abu Dawood, 2858)`,
      button: "Register to Reflect & Reconnect to your Rabb",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#F4F4F9] px-4 py-12">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-3xl text-black font-bold uppercase">
          HOW MUCH DO YOU LOVE THE PROPHET? <span className="text-[#0B4F9A]">(ﷺ)</span>
        </h2>
        <h3 className="text-lg md:text-2xl text-[#FFDD59] font-semibold uppercase mt-1">
          TRANSFORMING LIVES THROUGH THE SEERAH
        </h3>
        <h1 id="workspace" className="text-2xl md:text-3xl text-black font-bold mt-3 uppercase">
          INTRODUCTION TO THE SEERAH – WORKSHOP
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-black shadow-xl rounded-xl">
        {/* Left Accordion Section */}
        <div className="w-full flex flex-col space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="accordion-item">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left font-semibold text-black flex justify-between items-center py-4 px-6 bg-[#f6e865] rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out"
              >
                {item.question}
                <span className="text-2xl">{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <div className="mt-4 text-black px-6 py-4 bg-[#F4F4F9] rounded-lg shadow-md">
                  <p className="text-sm md:text-base whitespace-pre-line">{item.answer}</p>
                  {item.button && (
                    <button className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-[#e27613] transition duration-300 ease-in-out">
                      {item.button}
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Image Section */}
        <div className="w-full flex justify-center items-center">
          {/* 
            The parent container is given a dynamic height 
            so the image grows from both top & bottom. 
            Using 'relative' + 'Image fill' ensures the image 
            stays centered and scales smoothly.
          */}
          <div
            className={`
              relative overflow-hidden rounded-xl shadow-lg transition-all 
              duration-500 ease-in-out 
              ${openIndex !== null ? "h-[500px]" : "h-[300px]"} 
              w-[350px] mx-auto
            `}
          >
            <Image
              src="/workshop.png"
              alt="Seerah Workshop"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeerahWorkshop;
