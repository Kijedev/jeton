import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar/navbar";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { CgScrollV } from "react-icons/cg";
import BottomNavbar from "../../components/Navbar/BottomNavbar";
import Finances from "../Finances/page";
import Parallax from "../Parallax/page";
import Account from "../Account/page";
import Contactless from "../Contactless/page";
import Users from "../Users/page";
import DraggableCard from "@/app/components/DraggableCard/page";
import CardStack from "../../components/CardStack/page";
import Footer from "@/app/components/Footer/page";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function Page() {
  return (
    <div className="relative md:min-h-screen overflow-hidden">
      {/* FULLSCREEN VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" inset-0 w-screen h-screen object-cover -z-10"
      >
        <source src="/video/jeton.mp4" type="video/mp4" />
      </video>

      {/* CONTENT */}
      <div className="absolute top-0 w-full z-10 text-white px-4 lg:px-10">
        <Navbar />

        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-32 lg:mt-80 gap-12">
          {/* LEFT */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-center lg:text-left">
              One app <br className="hidden lg:block" /> for all needs
            </h1>
          </div>

          {/* RIGHT */}
          <div className="text-center lg:text-left lg:pr-20">
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
              Single account for all your <br className="hidden lg:block" />
              payments.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
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
        {/* SCROLL INDICATOR */}
        <div className="hover:cursor-pointer absolute -bottom-28 left-1/2 lg:left-10 -translate-x-1/2 lg:translate-x-0 inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 cursor text-white rounded-full px-3 py-2">
          <CgScrollV />
          <p className="text-sm">Scroll</p>
        </div>
      </div>

      {/* MOBILE / BOTTOM NAV */}
      <BottomNavbar />
      <Finances />
      <Parallax />
      <Account />
      <Contactless />
      <DraggableCard />
      <CardStack />
      <Users />
      <Footer />
    </div>
  );
}
