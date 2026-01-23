"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Preloader({ onFinish }: { onFinish?: () => void }) {
  const pathname = usePathname();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, 700);

    return () => clearTimeout(timer);
  }, [pathname, onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-9999 bg-[#ff3b1f] flex justify-center items-center"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1,
            ease: [0.19, 1, 0.22, 1],
          }}
        >
            <h1 className="text-8xl text-white font-bold goldman">Jeton</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
