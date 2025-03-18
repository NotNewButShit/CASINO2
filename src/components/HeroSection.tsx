import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Philippines Top 10 Online Casinos",
  subtitle = "Discover the best online casino experiences with exclusive bonuses and top-rated games",
  backgroundImage = "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=1200&q=80",
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[500px] bg-black overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.4)",
        }}
      />

      {/* Animated overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />

      {/* Content container */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-amber-500">{title.split(" ")[0]}</span>{" "}
            {title.split(" ").slice(1).join(" ")}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore Casinos
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-20"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 0.2, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div
            className="w-full h-full bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1563941406054-949a42211441?w=400&q=80')",
            }}
          />
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
};

export default HeroSection;
