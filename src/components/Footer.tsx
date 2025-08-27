"use client";

import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 bg-black/70 backdrop-blur-lg border-t border-purple-600/40 text-center text-sm">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text font-semibold tracking-wider"
      >
        ✨ Canvas — You Are The Art ✨
      </motion.p>
    </footer>
  );
};

export default Footer;
