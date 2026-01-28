"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar/navbar";
import BottomNavbar from "../../components/Navbar/BottomNavbar";
import Footer from "@/app/components/Footer/page";
import Support from "@/app/components/Support";
import Finances from "../Finances/page";
import Parallax from "../Parallax/page";
import Account from "../Account/page";
import Contactless from "../Contactless/page";
import Users from "../Users/page";
import DraggableCard from "@/app/components/DraggableCard";
import CardStack from "../../components/CardStack/page";

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
            <h1 className="text-6xl md:text-6xl lg:text-[7rem] font-semibold text-left lg:text-left">
              One app <br className="hidden lg:block" /> for all needs
            </h1>

            <div className="text-center lg:text-left lg:pr-20 lg:relative absolute bottom-10">
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Single account for all your <br className="hidden lg:block" />
                payments.
              </p>

              <div className="flex gap-4 mt-6 justify-center lg:justify-start">
                <Link
                  href=""
                  className="border border-white rounded-xl px-3 py-1 flex gap-2 items-center justify-center"
                >
                  <FaApple className="h-8 w-8" />
                  <span>
                    <p className="text-[10px]">Download on</p>
                    <h1 className="text-lg -mt-1">App Store</h1>
                  </span>
                </Link>

                <Link
                  href=""
                  className="border border-white rounded-xl px-3 py-1 flex gap-2 items-center justify-center"
                >
                  <FaGooglePlay className="h-6 w-6" />
                  <span>
                    <p className="text-[10px]">Get it on</p>
                    <h1 className="text-lg -mt-1">Google Play</h1>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* SCROLL */}
          <div
            onClick={() =>
              document
                .getElementById("finances")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="absolute bottom-10 left-12 hidden
            -translate-x-1/2 lg:translate-x-0 lg:inline-flex items-center gap-1 
            bg-white/20 hover:bg-white/30 cursor-pointer text-white 
            rounded-full px-3 py-2"
          >
            <CgScrollV />
            <p className="text-sm">Scroll</p>
          </div>
          <Support />
        </div>
      </div>

      <BottomNavbar />
      

      {/* SECTIONS */}
      {[
        ["finances", <Finances />],
        ["parallax", <Parallax />],
        ["account", <Account />],
        ["contactless", <Contactless />],
        ["cards", <DraggableCard />],
        ["stack", <CardStack />],
        ["users", <Users />],
      ].map(([id, Component]) => (
        <section
          key={id as string}
          // id={id as string}
          className="min-h-screen"
          // variants={sectionVariant}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true, amount: 0.3 }}
        >
          {Component}
        </section>
      ))}

      <Footer />
    </div>
  );
}
