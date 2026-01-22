"use client";

import Link from "next/link";
import Navbar from "../components/Navbar/navbar";
import BottomNavbar from "../components/Navbar/BottomNavbar";
import Footer from "@/app/components/Footer/page";
import Button from "@/app/components/ui/Button/page";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { CgScrollV } from "react-icons/cg";
import { motion, Variants } from "framer-motion";
import ParallaxScroll from "../components/ParallaxScroll";

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] font-semibold text-center lg:text-left">
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

      <div className="bg-white mt-0">
        <div className="lg:px-32 pt-48 space-y-8 pb-20">
          <p className="text-[#f73b20] border border-[#f73b20] px-2 py-1 rounded-full inline-flex">
            Mission
          </p>
          <h1 className="text-[#f73b20] text-7xl text-left max-w-2xl font-semibold leading-18">
            Money, but better.
          </h1>
          <p className="text-[#f73b20] text-2xl font-semibold leading-7">
            Our goal is to make money better. Whether you’re <br /> opening an account with us, sending or receiving <br /> money, we make it better for you.
          </p>
        </div>

        <div className="h-screen">
          <Image
            src="/Image/payonthego.png"
            alt="Pay on the go"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <section className="relative bg-white px-6 md:px-16 py-20 overflow-hidden">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-[#ff3b1f] text-4xl md:text-5xl font-semibold leading-14 max-w-4xl">
              We love to make things <br /> easier for everyone.
            </h1>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-6 text-[#ff3b1f] max-w-lg">
            <p>
              No hidden fees, complicated words or complex processes. We make <br /> money relatable, effortless, easy to understand and manage. Our goal <br /> for each of our users to manage their money with a few taps.
            </p>
          </div>
        </div>

        {/* BOTTOM IMAGE */}
        <div className="relative float-right lg:mr-48 lg:mt-32 w-full lg:w-[35%] h-75 md:h-96">
          <Image
            src="/Image/payonthego.png"
            alt="Contactless payment"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="bg-[#f73b20]">
        <div className="lg:px-32 pt-48 space-y-8 pb-20 text-center flex flex-col items-center justify-center">
          <Image src="/Image/phone.png" alt="Jeton" width={150} height={150} className="" />
          <p className="text-[#ffffff] border border-[#ffffff] px-2 py-1 rounded-full inline-flex">
            Product
          </p>
          <h1 className="text-[#ffffff] text-7xl text-left max-w-2xl font-semibold leading-18">
            Your Next-Gen App
          </h1>
          <p className="text-[#ffffff] text-2xl font-semibold leading-7 max-w-3xl">
            Money extends beyond borders and that’s where Jeton comes in. An all-in-one payment app & web app that opens doors to world full of opportunities. With the Jeton App, you can access many features that simplify and improve your every day financial experience, no matter where you are.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <Link
              href=""
              className="border border-white text-white rounded-xl px-3 py-1 flex gap-2 items-center justify-center"
            >
              <FaApple className="h-8 w-8" />
              <span>
                <p className="text-[10px]">Download on</p>
                <h1 className="text-lg -mt-1">App Store</h1>
              </span>
            </Link>

            <Link
              href=""
              className="border border-white text-white rounded-xl px-3 py-1 flex gap-2 items-center justify-center"
            >
              <FaGooglePlay className="h-6 w-6" />
              <span>
                <p className="text-[10px]">Get it on</p>
                <h1 className="text-lg -mt-1">Google Play</h1>
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-around pb-20">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white font-bold text-2xl">1M+</h1>
            <p className="text-white font-semibold text-xl">Registered Users</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white font-bold text-2xl">27</h1>
            <p className="text-white font-semibold text-xl">Available Countries</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-white font-bold text-2xl">50+</h1>
            <p className="text-white font-semibold text-xl">Payment Methods</p>
          </div>
        </div>
      </section>

      <div>
        {/* <ParallaxScroll /> */}
        <main
          className={`min-h-screen flex flex-col items-center justify-center px-4 py-20 transition-colors duration-300`}
        >
          {/* Hero Content */}
          <div className="text-center max-w-6xl">
            <h1
              className={`text-6xl md:text-[10rem] font-bold leading-36 mb-6 transition-colors duration-300`}
            >
              1 million users,
              <br />
              plus you.
            </h1>

            <p
              className={`text-xl md:text-2xl mb-12 transition-colors duration-300`}
            >
              It only takes few seconds to get started.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <Link
                href=""
                className="border border-[#ffffff] rounded-xl px-3 py-1 flex gap-2 items-center justify-center text-[#ffffff]"
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
                className="border border-[#ffffff] rounded-xl px-3 py-1 flex gap-2 items-center justify-center text-[#ffffff]"
              >
                <FaGooglePlay className="h-6 w-6" />
                <span>
                  <p className="text-[10px]">Get it on</p>
                  <h1 className="text-lg -mt-1">Google Play</h1>
                </span>
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
