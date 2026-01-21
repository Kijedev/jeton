"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar/navbar";
import BottomNavbar from "../components/Navbar/BottomNavbar";
import Footer from "@/app/components/Footer/page";
import { CgScrollV } from "react-icons/cg";
import Button from "@/app/components/ui/Button/page";
import { FaApple, FaGooglePlay } from "react-icons/fa";

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] font-semibold text-center lg:text-left">
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

      <div className="bg-white mt-20">
        <div className="lg:px-32 pt-48 space-y-8 pb-20">
          <p className="text-[#f73b20] border border-[#f73b20] px-2 py-1 rounded-full inline-flex">
            Jeton Card
          </p>
          <h1 className="text-[#f73b20] text-7xl text-left max-w-2xl font-semibold leading-18">
            Jeton Card, all <br /> your spendings <br /> under control.
          </h1>
          <p className="text-[#f73b20] text-xl font-semibold">
            Safely shop online, buy in stores, or tap into the power of <br />{" "}
            virtual cards with Jeton. Freeze and unfreeze your card <br />{" "}
            anytime within the Jeton app, and enjoy better payments <br />{" "}
            today.
          </p>
        </div>

        <div className="h-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video/cartevideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="bg-white mt-0">
        <div className="lg:px-32 pt-48 space-y-8 pb-20">
          <p className="text-[#f73b20] border border-[#f73b20] px-2 py-1 rounded-full inline-flex">
            Wallets
          </p>
          <h1 className="text-[#f73b20] text-7xl text-left max-w-2xl font-semibold leading-18">
            Pay-on-the-go
          </h1>
          <p className="text-[#f73b20] text-xl font-semiboold">
            Make contactless payments in stores with Jeton <br /> Card. Easily
            link your card with your digital wallet. <br /> Tap, pay and speed
            through checkouts!
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-[#ff3b1f] text-4xl md:text-5xl font-semibold leading-tight max-w-4xl">
              Faster, smoother payments: Jeton Card integrates Apple Pay and
              Google Pay
            </h1>

            <div className="flex items-center gap-8 mt-10 text-[#ff3b1f] font-semibold text-xl">
              <span className="flex">
                <FaApple className="mt-1" /> Pay
              </span>
              <span className="flex gap-1">
                <p className="font-bold">G</p>Pay
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-6 text-[#ff3b1f] max-w-lg">
            <p>
              By integrating with Apple Pay and Google Pay, Jeton users can now
              enjoy a quicker and more straightforward payment process. With
              just a few taps on their smartphones, users can make payments at a
              wide range of online and offline merchants, eliminating the need
              for cash or card transactions.
            </p>

            <p>
              Experience a seamless checkout process with a single tap. Save
              time and effort as your Jeton card details are conveniently filled
              in for you during checkout.
            </p>

            <Button
              text="Get Jeton Card"
              fromColor="from-[#fff1ee]"
              toColor="to-[#fff1ee]"
              textColor="text-[#ff3b1f]"
              border="border border-white"
            />
          </div>
        </div>

        {/* BOTTOM IMAGE */}
        <div className="relative float-right mt-20 w-full lg:w-[45%] h-75 md:h-105">
          <Image
            src="/Image/payonthego.png"
            alt="Contactless payment"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <div className="pt-10 pb-20">
        <h1 className="text-[#ff3b1f] text-4xl md:text-5xl font-semibold leading-tight max-w-4xl float-right mr-20">
          Paying made effortless with <br /> the devices you carry daily
        </h1>
      </div>

      <section className="max-w-8xl mx-auto px-6 md:px-16 py-20 text-[#ff3b1f]">
        {/* SMART PHONE */}
        <details className="group border-t border-[#ff3b1f] py-10 hover:bg-[#FFFAFA]">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-6">
              <span className="text-3xl group-open:hidden">+</span>
              <span className="text-3xl hidden group-open:block">−</span>
              <h3 className="text-3xl md:text-4xl font-semibold">
                Smart Phone
              </h3>
            </div>
          </summary>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10">
            <div></div>

            <div className="space-y-10">
              <div>
                <h4 className="text-2xl font-semibold">iPhone:</h4>
                <p className="mt-3 leading-relaxed max-w-lg">
                  Open Apple Wallet on your iPhone, then tap the plus sign (+)
                  to get started.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold">Smartphone:</h4>
                <p className="mt-3 leading-relaxed max-w-lg">
                  Open Google Pay on your smartphone, then tap the profile
                  picture or account at the top right. Select "Payment methods"
                  and tap "Add payment method." Follow the instructions to add a
                  credit or debit card.
                </p>
              </div>
            </div>
          </div>
        </details>

        <details className="group border-t border-[#ff3b1f] py-10 hover:bg-[#FFFAFA]">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-6">
              <span className="text-3xl group-open:hidden">+</span>
              <span className="text-3xl hidden group-open:block">−</span>
              <h3 className="text-3xl md:text-4xl font-semibold">
                Smart Watch
              </h3>
            </div>
          </summary>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10">
            <div></div>

            <div className="space-y-10">
              <div>
                <h4 className="text-2xl font-semibold">iPhone:</h4>
                <p className="mt-3 leading-relaxed max-w-lg">
                  Open Apple Wallet on your iPhone, then tap the plus sign (+)
                  to get started
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold">Smartphone:</h4>
                <p className="mt-3 leading-relaxed max-w-lg">
                  Open Google Pay on your smartphone, then tap the profile
                  picture or account at the top right. Select "Payment methods"
                  and tap "Add payment method." Follow the instructions to add a
                  credit or debit card.
                </p>
              </div>
            </div>
          </div>
        </details>

        <details className="group border-t border-[#ff3b1f] py-10 hover:bg-[#FFFAFA]">
          <summary className="flex items-center justify-between cursor-pointer list-none">
            <div className="flex items-center gap-6">
              <span className="text-3xl group-open:hidden">+</span>
              <span className="text-3xl hidden group-open:block">−</span>
              <h3 className="text-3xl md:text-4xl font-semibold">
                Tablet / Computer
              </h3>
            </div>
          </summary>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10">
            <div></div>

            <div className="space-y-10">
              <div>
                <h4 className="text-2xl font-semibold">iPhone:</h4>
                <p className="mt-3 leading-relaxed max-w-lg">
                  Open Apple Wallet on your iPhone, then tap the plus sign (+)
                  to get started.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold">Smartphone:</h4>
                <p className="mt-3 leading-relaxed max-w-lg">
                  Open Google Pay on your smartphone, then tap the profile
                  picture or account at the top right. Select "Payment methods"
                  and tap "Add payment method." Follow the instructions to add a
                  credit or debit card.
                </p>
              </div>
            </div>
          </div>
        </details>
      </section>

      <BottomNavbar />
      <Footer />
    </div>
  );
}
