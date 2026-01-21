"use client";

import Link from "next/link";
import Navbar from "../components/Navbar/navbar";
import BottomNavbar from "../components/Navbar/BottomNavbar";
import Footer from "@/app/components/Footer/page";
import Button from "@/app/components/ui/Button/page";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { CgScrollV } from "react-icons/cg";
import { motion, Variants } from "framer-motion";

/* ✅ TYPE-SAFE VARIANTS */
const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function Page() {
  return (
    <div className="relative overflow-hidden">
      {/* HERO */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/video/jeton.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-10 text-white px-4 lg:px-10">
          <Navbar />

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-32 lg:mt-80 gap-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-center lg:text-left">
              Your money, <br className="hidden lg:block" /> Your way.
            </h1>

            <div className="text-center lg:text-left lg:pr-20">
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold pb-10">
                Make finance accessible, easy, <br /> friendly, and fun.
              </p>

              <Button
                text="Let's connect"
                fromColor="from-white"
                toColor="to-white"
                textColor="text-[#f73b20]"
                border="border border-white"
              />
            </div>
          </div>

          {/* SCROLL */}
          <div
            onClick={() =>
              document
                .getElementById("finances")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="absolute -bottom-28 left-1/2 lg:left-10 
            -translate-x-1/2 lg:translate-x-0 inline-flex items-center gap-1 
            bg-white/20 hover:bg-white/30 cursor-pointer text-white 
            rounded-full px-3 py-2"
          >
            <CgScrollV />
            <p className="text-sm">Scroll</p>
          </div>
        </div>
      </div>

      <BottomNavbar />

      <Footer />
    </div>
  );
}
