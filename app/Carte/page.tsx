"use client";

import Link from "next/link";
import Navbar from "../components/Navbar/navbar";
import BottomNavbar from "../components/Navbar/BottomNavbar";
import Footer from "@/app/components/Footer/page";
import { CgScrollV } from "react-icons/cg";
import Button from "@/app/components/ui/Button/page";

export default function Page() {
  return (
    <div className="relative">
      {/* ================= HERO ================= */}
      <div className="relative h-screen overflow-hidden">
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
              Ready to use <br className="hidden lg:block" /> right away
            </h1>

            <div className="text-center lg:text-left lg:pr-20">
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
                No hidden fees, no surprises
              </p>

              <div className="mt-6">
                <Button
                  text="Get Jeton Card"
                  fromColor="from-white"
                  toColor="to-white"
                  textColor="text-[#f73b20]"
                  border="border border-white"
                />
              </div>
            </div>
          </div>

          <div
            onClick={() =>
              document
                .getElementById("uniquely-yours")
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

      {/* ================= UNIQUELY YOURS SECTION ================= */}
      <section id="uniquely-yours" className="relative bg-white">
        {/* STICKY BACKGROUND */}
        <div className="sticky top-0 h-screen w-full flex flex-col gap-10 items-center justify-center pointer-events-none">
          <h1 className="text-[#f73b20] text-[1rem] md:text-[1rem] lg:text-[5rem] font-semibold text-center leading-none">
            Uniquely Yours
          </h1>
          <Button
            text="Get Jeton Card"
            fromColor="from-[#f73b20]"
            toColor="to-[#f73b20]"
            textColor="text-white"
            border="border border-white"
          />
        </div>

        {/* SCROLLING CARDS (NORMAL FLOW) */}
        <div className="relative max-w-6xl mx-auto -mt-[10vh] flex flex-col gap-32">
          {[
            {
              title: "Total control over your card",
              description:
                "Freeze, unfreeze both your physical and virtual cards anytime. Your transactions are safe and under your control.",
              image: "/Image/cards.jpg",
            },
            {
              title: "Tap in on easier and faster payments",
              description:
                "Make contactless payments with your Jeton Card for faster checkouts!",
              image: "/Image/cards2.jpg",
            },
            {
              title: "Keep your spending in check",
              description:
                "Easily manage your expenses by setting and following spending limits.",
              image: "/Image/cards3.png",
            },
            {
              title: "Expand your international reach",
              description:
                "With worldwide acceptance either at online shops or in-store payments, Jeton Card supports VISA, Mastercard and UnionPay, opening doors to faster transactions.",
              image: "/Image/cards4.jpg",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`backdrop-blur-xl bg-[#f73b20]/5 w-96 rounded-3xl p-3 flex flex-col gap-6 items-center
        ${index % 2 === 0 ? "self-end" : "self-start"}`}
            >
              <div className="w-[98%]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold text-[#f73b20]">
                  {card.title}
                </h2>
                <p className="text-[#f73b20]/70 text-lg">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BottomNavbar />
      <Footer />
    </div>
  );
}
