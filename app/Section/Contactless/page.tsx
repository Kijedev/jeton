"use client";
import type { Metadata } from "next";
import Button from "@/app/components/ui/Button/page";
import { AnimatePresence, motion } from "framer-motion";

export default function page() {
  return (
    <div className="bg-white">
      <div className="flex flex-col gap-6 justify-center items-center pt-32">
        <p className="text-[#f73b20] border border-[#f73b20] px-2 py-1 rounded-full">
          Jeton Card
        </p>
        <motion.h1
          className="text-[#f73b20] lg:text-5xl text-4xl text-center lg:max-w-2xl max-w-2xl font-semibold lg:leading-12"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.6 }}
        >
          Contactless payments? Sure. Spending limits? Check. Card freezing?
          Also check.
        </motion.h1>

        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-4xl px-3 lg:px-0 lg:w-[50%] object-cover"
          >
            <source src="/video/jeton.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <h1 className="text-[#f73b20] lg:text-7xl text-5xl text-center font-semibold lg:leading-18 mt-20 max-w-lg mx-auto">
            Jeton Card: Your Go-To for Every Purchase
          </h1>
          <div className="flex justify-center items-center mt-10">
            <Button
              text="Learn more"
              fromColor="from-[#f73b20]"
              toColor="to-[#f73b20]"
              textColor="text-white"
              border="border border-white"
            />
          </div>{" "}
        </motion.div>
      </div>
    </div>
  );
}
