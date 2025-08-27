"use client";

import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-96 h-96 bg-purple-600/40 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [100, -100, 50, 100], y: [50, -50, 0, 50] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[30rem] h-[30rem] bg-pink-600/30 rounded-full blur-3xl top-1/3 left-1/3"
      />
    </div>
  );
};

export default Background;
