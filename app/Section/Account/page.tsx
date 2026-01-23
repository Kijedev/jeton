"use client";

import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Link from "next/link";
import Button from "@/app/components/ui/Button/page";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/accountbg.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 h-full max-w-8xl mx-auto px-6 flex items-center lg:ml-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <motion.h1
              className="text-4xl md:text-7xl font-semibold lg:leading-18 leading-8"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.6 }}
            >
              All your finances,
              <br />
              in one app.
            </motion.h1>

            <p className="text-lg text-white">Join 1M+ happy users today.</p>

            <Button
              text="Get Started"
              fromColor="from-white"
              toColor="to-white"
              textColor="text-[#f73b20]"
              border="border border-white"
            />

            <div className="flex justify-center lg:justify-start gap-4 lg:mt-32 mt-80">
              {/* APP STORE */}
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

              {/* GOOGLE PLAY */}
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
      </div>
    </section>
  );
}
