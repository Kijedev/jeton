"use client";

import { useState, useEffect, useRef } from "react";
import { Apple, Play } from "lucide-react";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Home() {
  const [isInView, setIsInView] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (mainRef.current) {
      observer.observe(mainRef.current);
    }

    return () => {
      if (mainRef.current) {
        observer.unobserve(mainRef.current);
      }
    };
  }, []);

  return (
    <main
      ref={mainRef}
      className={`min-h-screen flex flex-col items-center justify-center px-4 py-20 transition-colors duration-300 ${
        isInView ? "bg-[#f73b20]" : "bg-white"
      }`}
    >
      {/* Hero Content */}
      <div className="text-center max-w-6xl">
        <h1
          className={`text-5xl md:text-[10rem] font-bold lg:leading-36 mb-6 transition-colors duration-300 ${
            isInView ? "text-white" : "text-[#f73b20]"
          }`}
        >
          1 million users,
          <br />
          plus you.
        </h1>

        <p
          className={`text-xl md:text-2xl mb-12 transition-colors duration-300 ${
            isInView ? "text-white" : "text-[#f73b20]"
          }`}
        >
          It only takes few seconds to get started.
        </p>

        <div className="flex justify-center gap-4 mt-6">
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
  );
}
