import Navbar from "../components/Navbar";
import ServiceCard from "../components/serviceCard";
import {
  FaCalculator,
  FaFlask,
  FaBook,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa";

const Services = () => {
  return (
    <section className="min-h-screen bg-[#1E1E1E] text-white px-6 sm:px-12 relative">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-12 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#51a687] via-blue-500 to-pink-500 bg-clip-text text-transparent p-3">
          Our Tutoring Services
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl mt-4">
          Master any subject with our expert tutors. Modern learning that works.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <ServiceCard
          subject="Mathematics"
          description="Master numbers, equations, and problem-solving with our expert tutors."
          icon={<FaCalculator />}
        />
        <ServiceCard
          subject="Science"
          description="Explore the wonders of physics, chemistry, and biology with interactive lessons."
          icon={<FaFlask />}
        />
        <ServiceCard
          subject="English"
          description="Enhance your language skills, grammar, and literary analysis effortlessly."
          icon={<FaBook />}
        />
        {/* <ServiceCard
          subject="Computer Science"
          description="Learn coding, web development, and algorithms with hands-on projects."
          icon={<FaLaptopCode />}
        />
        <ServiceCard
          subject="Geography"
          description="Discover the world's landscapes, cultures, and ecosystems."
          icon={<FaGlobe />}
        /> */}
      </div>

      {/* Call to Action */}
      {/* <div className="text-center mt-12">
        <h2 className="text-3xl font-semibold">Ready to Get Started?</h2>
        <p className="text-gray-400 mt-2">
          Join our expert-led tutoring sessions today.
        </p>

       
        <div className="flex items-center max-w-md w-full mx-auto text-black mt-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-gray-400 rounded-l-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none"
          />
          <button className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-r-lg font-bold text-sm sm:text-base hover:text-white hover:bg-[#51a687] transition-colors">
            Notify Me
          </button>
        </div>

        <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4 font-bold">
          - Notify me when App is launched -
        </p>
      </div> */}
    </section>
  );
};

export default Services;
