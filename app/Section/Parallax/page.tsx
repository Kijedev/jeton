"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { GoPlus } from "react-icons/go";
import { LuSend } from "react-icons/lu";
import { TbArrowsExchange2 } from "react-icons/tb";

export default function Page() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: scrollRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 25,
    mass: 1,
  });

  const yAdd = useTransform(
    smoothProgress,
    [0, 0.4],
    [60, 0],
    { clamp: false }
  );
  const oAdd = useTransform(
    smoothProgress,
    [0, 0.4],
    [0, 1],
    { clamp: false }
  );

  const ySend = useTransform(
    smoothProgress,
    [0.25, 0.7],
    [60, 0],
    { clamp: false }
  );
  const oSend = useTransform(
    smoothProgress,
    [0.25, 0.7],
    [0, 1],
    { clamp: false }
  );

  const yExchange = useTransform(
    smoothProgress,
    [0.55, 1],
    [60, 0],
    { clamp: false }
  );
  const oExchange = useTransform(
    smoothProgress,
    [0.55, 1],
    [0, 1],
    { clamp: false }
  );

  return (
    <main className="h-screen bg-white overflow-hidden flex items-center justify-center">
      <div
        ref={scrollRef}
        className="h-full w-full overflow-y-scroll flex items-center justify-center"
      >
        <div className="min-h-[170vh] flex items-center justify-center">
          <div className="flex flex-col items-center pt-80 gap-0 text-center">
            <motion.h1
              style={{ y: yAdd, opacity: oAdd }}
              className="text-6xl md:text-[8rem] font-semibold text-[#34C771] flex items-center gap-4"
            >
              <span className="bg-[#34C771] text-white rounded-2xl px-4 py-4">
                <GoPlus className="text-2xl" />
              </span>
              Add
            </motion.h1>

            <motion.h1
              style={{ y: ySend, opacity: oSend }}
              className="text-6xl md:text-[8rem] font-semibold text-[#477EE9] flex items-center gap-4 md:-mt-16"
            >
              <span className="bg-[#477EE9] text-white rounded-2xl px-4 py-4">
                <LuSend className="text-2xl" />
              </span>
              Send
            </motion.h1>

            <motion.h1
              style={{ y: yExchange, opacity: oExchange }}
              className="text-6xl md:text-[8rem] font-semibold text-[#FB2D54] flex items-center gap-4 md:-mt-16"
            >
              <span className="bg-[#FB2D54] text-white rounded-2xl px-4 py-4">
                <TbArrowsExchange2 className="text-2xl" />
              </span>
              Exchange
            </motion.h1>
          </div>
        </div>
      </div>
    </main>
  );
}
