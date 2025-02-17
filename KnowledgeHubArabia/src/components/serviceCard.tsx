import React from "react";
import { motion } from "framer-motion";

interface TutoringCardProps {
  subject: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<TutoringCardProps> = ({
  subject,
  description,
  icon,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className="relative bg-gray-900/10 backdrop-blur-md border border-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg overflow-hidden group"
    >
      {/* Gradient Accent Border */}
      <div className="absolute inset-0  opacity-10 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl pointer-events-none" />

      {/* Floating Icon */}
      <div className="relative z-10 flex items-center space-x-3 mb-5">
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-[#51a687] text-3xl sm:text-3xl"
        >
          {icon}
        </motion.div>
        <h2 className="text-2xl sm:text-2xl font-semibold text-white tracking-wide">
          {subject}
        </h2>
      </div>

      {/* Description */}
      <p className="relative z-10 text-gray-300 text-sm sm:text-base leading-relaxed">
        {description}
      </p>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#51a687] via-blue-500 to-pink-500 opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
    </motion.div>
  );
};

export default ServiceCard;
