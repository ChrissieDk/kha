import { useState, FormEvent } from "react";
import Navbar from "../components/Navbar";
import useTypingEffect from "../hooks/useTypingEffect";
import {
  collection,
  addDoc,
  serverTimestamp,
  FieldValue,
} from "firebase/firestore";
import { db } from "../firebase-config";

interface UserInterest {
  email_address: string;
  interests: string[];
  name: string;
  surname: string;
  createdAt: FieldValue;
}

const ComingSoon = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [interests, setInterests] = useState<string[]>([]);
  const [emailError, setEmailError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const typingWord = useTypingEffect({
    words: ["Assistance", "Excellence"],
    typingSpeed: 100,
    deletingSpeed: 100,
    delay: 1800,
  });

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleInterestChange = (interest: string): void => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setEmailError("");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!name || !surname) {
      alert("Please fill in both name and surname");
      return;
    }

    setIsSubmitting(true);

    try {
      const userInterestRef = collection(db, "user_interest");
      const userInterest: UserInterest = {
        email_address: email,
        interests,
        name,
        surname,
        createdAt: serverTimestamp(),
      };

      await addDoc(userInterestRef, userInterest);
      setSubmitSuccess(true);
      // Reset form
      setEmail("");
      setName("");
      setSurname("");
      setInterests([]);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert(
        "There was an error submitting your information. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#1E1E1E] text-white">
      <div className="absolute top-0 left-0 right-0 px-6 sm:px-12">
        <Navbar />
      </div>

      <div className="flex items-center justify-center min-h-screen p-4 z-10">
        <div className="bg-gray-400/5 backdrop-blur-lg rounded-2xl p-8 md:p-10 max-w-4xl w-full">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl p-2 sm:p-3 md:p-4 mb-4 sm:mb-6 md:mb-6 bg-gradient-to-r from-[#51a687] via-blue-500 to-pink-500 bg-clip-text text-transparent">
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

            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-400 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  className="w-full bg-gray-400 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-gray-400 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none ${
                    emailError ? "border-2 border-red-500" : ""
                  }`}
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>

              <div className="mb-4 flex flex-wrap justify-center gap-3">
                {["Math", "English", "Science"].map((interest) => (
                  <label
                    key={interest}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                      className="form-checkbox h-4 w-4 text-[#51a687]"
                    />
                    <span>{interest}</span>
                  </label>
                ))}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black px-6 py-3 rounded-lg font-bold text-sm sm:text-base w-full hover:text-white transition-colors hover:bg-[#51a687] disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Notify Me"}
              </button>

              {submitSuccess && (
                <p className="text-green-500 mt-2">
                  Thank you for subscribing! We'll notify you when we launch.
                </p>
              )}
            </form>

            <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4 font-bold">
              - Notify me when App is launched -
            </p>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 font-bold">
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
      </div> */}
    </section>
  );
};

export default ComingSoon;
