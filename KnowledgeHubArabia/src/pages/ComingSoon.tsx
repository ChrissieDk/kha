import Navbar from "../components/Navbar";
import useTypingEffect from "../hooks/useTypingEffect";

const ComingSoon = () => {
  const typingWord = useTypingEffect({
    words: ["Assistance", "Excellence"],
    typingSpeed: 100,
    deletingSpeed: 100,
    delay: 1800,
  });

  return (
    <section className="relative min-h-screen bg-[#1E1E1E] text-white">
      {/* Top Bar - Fixed at top */}
      <div className="absolute top-0 left-0 right-0 px-6 sm:px-12">
        <Navbar />
      </div>
      {/* Main Content - Centered vertically and horizontally */}
      <div className="flex items-center justify-center min-h-screen p-4 z-10">
        {/* Container with light background */}
        <div className="bg-gray-400/5 backdrop-blur-lg rounded-2xl p-8 md:p-10 max-w-4xl w-full">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl p-2 sm:p-3 md:p-4  mb-4 sm:mb-6 md:mb-6 bg-gradient-to-r from-[#51a687] via-blue-500 to-pink-500 bg-clip-text text-transparent">
              Knowledge Hub
              <br />
              Arabia
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-12 max-w-lg font-bold">
              Saudi Arabia's Leading
              <br />
              Online Academic{" "}
              <span className="inline-block min-w-[2ch] font-bold">
                {typingWord}
              </span>
            </p>

            <div className="flex items-center max-w-md w-full text-black">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-gray-400 rounded-l-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none"
              />
              <button className="bg-white  text-black px-4 sm:px-6 py-2 sm:py-3 rounded-r-lg font-bold text-sm sm:text-base hover:text-white transition-colors hover:bg-[#51a687] transition-colors">
                Notify Me
              </button>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4 font-bold">
              - Notify me when App is launched -
            </p>
          </div>
        </div>
      </div>
      {/* Footer - Fixed at bottom */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 font-bold">
        <div className="flex justify-between px-4 sm:px-6 text-xs sm:text-sm text-gray-400">
          <a href="#privacy" className="hover:text-[#51a687] transition-colors">
            Privacy Policy
          </a>
          <div className="space-x-1 sm:space-x-2">
            <a
              href="#instagram"
              className="hover:text-[#51a687] transition-colors"
            >
              Instagram
            </a>
            <span>/</span>
            <a
              href="#linkedin"
              className="hover:text-[#51a687] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
