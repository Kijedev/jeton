"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDownOutline } from "react-icons/io5";
import { BiHomeAlt2 } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";

const personalLinks = [
  {
    title: "Jeton Card",
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <nav className="fixed z-999 w-full">
      {/* Desktop Navigation */}
      <div className="hidden md:flex fixed bottom-10 left-1/2 -translate-x-1/2 z-999 items-center">
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
                            src={links[activeIndex].image || "/placeholder.svg"}
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
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-20 -translate-x-1/2 z-999">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center gap-2 bg-[#f73b20]/90 text-white px-6 py-3 rounded-4xl cursor-pointer z-999"
        >
          <span className="text-lg font-semibold">Menu</span>
          {mobileMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </motion.button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute bottom-full mb-2 overflow-y-auto overflow-x-hidden bg-[#f73b20] rounded-xl -z-50 w-80 max-h-96"
            >
              {/* Header with Language Selector and Sign Up */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-white/20">
                <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-full">
                  <CiGlobe size={18} className="text-white" />
                  <span className="text-white font-medium text-sm">EN</span>
                  <IoChevronDownOutline size={14} className="text-white" />
                </div>
                <button className="bg-white text-[#f73b20] px-5 py-2 rounded-full font-semibold text-sm hover:bg-white/90">
                  Sign up
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col px-4 py-4 gap-6">
                {/* Personal Section */}
                <div>
                  <p className="text-white/60 text-xs font-semibold mb-3 uppercase tracking-wide">
                    Personal
                  </p>
                  {personalLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 py-3 text-white hover:text-white/80 text-base font-medium rounded-lg hover:bg-white/10 px-2 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>

                {/* Business Section */}
                <div>
                  <div
                    className="flex items-center gap-3 py-3 text-white hover:text-white/80 text-base font-medium rounded-lg hover:bg-white/10 px-2 transition-colors cursor-pointer"
                    onClick={() => {
                      handleBusinessNavigate();
                      setMobileMenuOpen(false);
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#FF6B5B] flex items-center justify-center shrink-0 font-bold text-white text-lg">
                      B
                    </div>
                    <div className="flex items-center gap-2">
                      <span>Business</span>
                      <MdArrowOutward size={14} />
                    </div>
                  </div>
                </div>

                {/* Company Section */}
                <div>
                  <p className="text-white/60 text-xs font-semibold mb-3 uppercase tracking-wide">
                    Company
                  </p>
                  {companyLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center gap-3 py-3 text-white hover:text-white/80 text-base font-medium rounded-lg hover:bg-white/10 px-2 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span>{item.title}</span>
                      {item.title === "About" && (
                        <div className="ml-auto w-2 h-2 rounded-full bg-white/60"></div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
