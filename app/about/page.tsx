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
import Financial from "@/app/Section/FinancialFuture/page";
import Awards from "../Section/Awards/page";
import Support from "../components/Support";

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
            <h1 className="text-5xl md:text-6xl lg:text-[7rem] font-semibold text-left lg:text-left">
              Your money, <br className="hidden lg:block" /> Your way.
            </h1>

            <div className="text-center lg:text-left lg:pr-20 lg:relative absolute bottom-10">
              <p className="text-lg sm:text-xl lg:text-2xl text-left font-semibold pb-10">
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
      <Support />

      <div className="bg-white mt-0">
        <div className="lg:px-32 px-2 pt-48 lg:space-y-8 pb-20">
          <p className="text-[#f73b20] border border-[#f73b20] px-2 py-1 rounded-full inline-flex">
            Mission
          </p>
          <motion.h1
            className="text-[#f73b20] lg:text-7xl text-4xl text-left max-w-2xl font-semibold leading-18"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
          >
            Money, but better.
          </motion.h1>
          <motion.p
            className="text-[#f73b20] lg:text-2xl font-semibold lg:leading-7 leading-5"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
          >
            Our goal is to make money better. Whether you’re <br /> opening an
            account with us, sending or receiving <br /> money, we make it
            better for you.
          </motion.p>
        </div>

        <div className="lg:h-screen">
          <Image
            src="/Image/payonthego.png"
            alt="Pay on the go"
            width={500}
            height={500}
            className="lg:w-full w-full lg:h-full h-56 object-cover"
          />
        </div>
      </div>

      <section className="relative bg-white px-6 md:px-16 py-20 overflow-hidden">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <h1 className="text-[#ff3b1f] text-2xl md:text-5xl font-semibold lg:leading-14 leading-7 max-w-4xl">
              We love to make things <br /> easier for everyone.
            </h1>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="flex flex-col gap-6 text-[#ff3b1f] max-w-lg lg:mt-0 -mt-12"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <p>
              No hidden fees, complicated words or complex processes. We make{" "}
              <br /> money relatable, effortless, easy to understand and manage.
              Our goal <br /> for each of our users to manage their money with a
              few taps.
            </p>
          </motion.div>
        </div>

        {/* BOTTOM IMAGE */}
        <motion.div
          className="relative float-right lg:mr-48 lg:mt-32 mt-10 w-full lg:w-[35%] h-75 md:h-96"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <Image
            src="/Image/payonthego.png"
            alt="Contactless payment"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      <section className="bg-[#f73b20]">
        <div className="lg:px-32 pt-48 space-y-8 pb-20 text-center flex flex-col items-center justify-center">
          <Image
            src="/Image/phone.png"
            alt="Jeton"
            width={150}
            height={150}
            className=""
          />
          <p className="text-[#ffffff] border border-[#ffffff] px-2 py-1 rounded-full inline-flex">
            Product
          </p>
          <motion.h1
            className="text-[#ffffff] lg:text-7xl text-4xl text-center lg:max-w-2xl font-semibold leading-18"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
          >
            Your Next-Gen App
          </motion.h1>
          <motion.p
            className="text-[#ffffff] lg:text-2xl text-lg lg:mt-0 -mt-4 text-center font-semibold leading-7 max-w-3xl"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
          >
            Money extends beyond borders and that’s where Jeton comes in. An
            all-in-one payment app & web app that opens doors to world full of
            opportunities. With the Jeton App, you can access many features that
            simplify and improve your every day financial experience, no matter
            where you are.
          </motion.p>

          <div className="flex gap-4 mt-6 justify-center lg:justify-start">
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

        <div className="grid lg:grid-cols-3 grid-cols-2 px-3 lg:px-0 gap-10 lg:gap-0 items-center justify-around pb-20">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-white font-bold text-2xl">1M+</h1>
            <p className="text-white font-semibold text-sm">Registered Users</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-white font-bold text-2xl">27</h1>
            <p className="text-white font-semibold text-sm">
              Available Countries
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-white font-bold text-2xl">50+</h1>
            <p className="text-white font-semibold text-sm">Payment Methods</p>
          </div>
        </div>
      </section>

      <Financial />
      <Awards />

      {/* Job Openings */}
      <motion.div
        className="bg-[#f73b20] ml-10 mr-10 mt-20 rounded-4xl text-white lg:p-20 p-8 flex flex-col gap-10 justify-center items-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }}
      >
        <p className="text-[#ffffff] border border-[#ffffff] px-2 py-1 rounded-full inline-flex">
          Careers
        </p>
        <h1 className="lg:text-7xl text-2xl font-semibold text-center">
          Job openings
        </h1>
        <p className="lg:text-xl text-lg font-semibold lg:max-w-xl text-center">
          Thanks for your interest in Jeton! There are no open roles at this
          time — but feel free to send your spontaneous application below!
        </p>
        <Button
          text="Spntaneous Application"
          fromColor="from-white"
          toColor="to-white"
          textColor="text-[#f73b20]"
          border="border border-white"
        />
      </motion.div>

      <main
        className={`min-h-screen flex flex-col items-center justify-center px-4 py-20 transition-colors duration-300`}
      >
        {/* Hero Content */}
        <div className="text-center max-w-6xl">
          <motion.h1
            className={`text-5xl md:text-[10rem] font-bold lg:leading-36 mb-6 transition-colors duration-300 text-[#f73b20]`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
          >
            1 million users,
            <br />
            plus you.
          </motion.h1>

          <p
            className={`text-xl md:text-2xl mb-12 transition-colors duration-300 text-[#f73b20]`}
          >
            It only takes few seconds to get started.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <Link
              href=""
              className="border border-[#f73b20] rounded-xl px-3 py-1 flex gap-2 items-center justify-center text-[#f73b20]"
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
              className="border border-[#f73b20] rounded-xl px-3 py-1 flex gap-2 items-center justify-center text-[#f73b20]"
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

      <Footer />
    </div>
  );
}
