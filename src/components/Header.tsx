"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Import logo directly from assets
import logo from "@/assests/logo.jpg"

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black/70 backdrop-blur-lg border-b border-purple-600/40 shadow-lg">
      <div className="flex items-center gap-3">
        {/* Logo */}
        <Image
          src={logo}
          alt="Canvas Logo"
          width={48}
          height={48}
          className="rounded-lg"
          priority
        />

        {/* Project Name */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text"
        >
          Canvas Studio
        </motion.h1>
      </div>

      {/* Tagline */}
      <p className="hidden md:block text-sm italic text-purple-300 tracking-wide">
        You Are The Art ✨
      </p>
    </header>
  );
};

export default Header;
