import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-900 to-gray-500 text-white px-6 py-12">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-gradient-to-b from-black to-gray-400 p-12 relative mt-24">
        
        {/* Left Side - Images */}
        <div className="flex space-x-6 justify-center">
          <div className="w-28 md:w-48 h-80 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/contact2.jpg" 
              alt="Workshop Image"
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-28 md:w-52 h-80 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/workshop.jpg"
              alt="Contact Image"
              width={300}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">CONTACT US</h2>

          {/* Contact Details */}
          <div className="flex justify-between text-sm mb-6">
            <div>
              <p><strong>Phone:</strong> +91 98668 23344</p>
            </div>
            <div>
              <p><strong>Email:</strong> admin@seerah.one</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="NAME"
              className="w-full p-3 bg-black text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full p-3 bg-black text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-400"
            />
            <select
              className="w-full p-3 bg-black text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-400"
            >
              <option value="" disabled selected>Select a Topic</option>
              <option value="seerah">Why should Every Muslim Learn the Seerah of The Prophet (ﷺ)?</option>
              <option value="return">Return to your Rabb - In Pursuit of Allah’s Pleasure</option>
              <option value="imaan">The Imaan Challenge Workshop</option>
              <option value="leadership">Leadership Styles and Lessons from the Prophet (ﷺ)</option>
              <option value="ziyaratus">Ziyaratus Seerah</option>
              <option value="volunteer">Volunteer</option>
              <option value="query">Query</option>
            </select>
            <textarea
              placeholder="MESSAGE"
              rows="4"
              className="w-full p-3 bg-black text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-400"
            ></textarea>
            <button className="w-40 bg-black text-white py-3 rounded-md hover:bg-gray-900 transition">
              Send Message
            </button>
          </form>

          {/* Social Media Links with Icons */}
          <div className="mt-2 ml-60 flex items-center justify-center space-x-6">
            <a
              href="https://www.instagram.com/seerah.one"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-orange-400" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100084582308830"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-2xl hover:text-orange-400" />
            </a>
            <a
              href="https://www.linkedin.com/company/seerah-education-and-learning/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-orange-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
