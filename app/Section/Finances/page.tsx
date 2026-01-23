"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main
      className="md:h-screen h-[50vh] bg-white flex items-center justify-center text-center"
      id="finances"
    >
      <motion.h1
        className="md:text-[13rem] text-6xl text-[#f73b20] md:leading-none font-bold"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }} 
      >
        Unify your <br /> finances
      </motion.h1>
    </main>
  );
}
