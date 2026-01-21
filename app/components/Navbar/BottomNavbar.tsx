"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDownOutline } from "react-icons/io5";
import { BiHomeAlt2 } from "react-icons/bi";
import { navigate } from "next/dist/client/components/segment-cache/navigation";
// import Carte from "@/app/Navigation/Personal/Carte";

const personalLinks = [
  {
    title: "Carte Jeton",
    href: "/Carte",
    image:
      "https://images.unsplash.com/photo-1616077167599-cad3639f9cbd?q=80&w=800",
  },
  {
    title: "Fees",
    href: "/personal/fees",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=800",
  },
];

const companyLinks = [
  {
    title: "About",
    href: "/about",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800",
  },
  {
    title: "Newsroom",
    href: "/company/newsroom",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
  },
  {
    title: "Partnerships",
    href: "/company/partnerships",
    image:
      "https://images.unsplash.com/photo-1616077167599-cad3639f9cbd?q=80&w=800",
  },
  {
    title: "Media Assets",
    href: "/company/media-assets",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
  },
  {
    title: "Release Notes",
    href: "/company/release-notes",
    image:
      "https://images.unsplash.com/photo-1616077167599-cad3639f9cbd?q=80&w=800",
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<"personal" | "company" | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [navbarWidth, setNavbarWidth] = useState(0);
  const navbarRef = useRef<HTMLDivElement>(null);

  const links = openMenu === "company" ? companyLinks : personalLinks;

  const handleBusinessNavigate = () => {
    window.open("https://www.jetonbank.com/", "_blank");
  };

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarWidth(navbarRef.current.offsetWidth);
    }
  }, [navbarRef]);

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-999 flex items-center">
      <div
        ref={navbarRef}
        className="relative flex flex-col-reverse bg-[#f73b20]/90 rounded-4xl text-white px-10 py-3 min-w-75"
      >
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute bottom-full mb-2 overflow-hidden bg-[#f73b20] rounded-xl z-50 -ml-9"
              style={{ width: navbarWidth }}
              onMouseEnter={() => setOpenMenu(openMenu)}
              onMouseLeave={() => {
                setOpenMenu(null);
                setActiveIndex(null);
              }}
            >
              <div className="flex justify-between px-3 py-2 gap-5">
                <div className="flex flex-col gap-1">
                  {links.map((item, index) => (
                    <Link
                      href={item.href}
                      key={item.title}
                      onMouseEnter={() => setActiveIndex(index)}
                      className="cursor-pointer"
                    >
                      <p className="text-lg text-white/40 hover:text-white">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>

                {activeIndex !== null && (
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-linear-to-br from-pink-400 to-orange-300">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={links[activeIndex].image}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={links[activeIndex].image}
                          alt={links[activeIndex].title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl cursor-pointer">
            <BiHomeAlt2 />
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => {
              setOpenMenu("personal");
              setActiveIndex(null);
            }}
            onMouseLeave={() => setOpenMenu(null)}
            className="flex items-center gap-1 cursor-pointer"
          >
            Personal{" "}
            <span>
              <IoChevronDownOutline />
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleBusinessNavigate}
            className="flex items-center gap-1 cursor-pointer"
          >
            Business <span>↗</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => {
              setOpenMenu("company");
              setActiveIndex(null);
            }}
            onMouseLeave={() => setOpenMenu(null)}
            className="flex items-center gap-1 cursor-pointer hover:bg-[#F96893]/30 hover:p-2 hover:rounded-full"
          >
            Company{" "}
            <span>
              <IoChevronDownOutline />
            </span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
