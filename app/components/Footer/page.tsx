"use client";

import Link from "next/link";
import { Globe, Instagram, Facebook, Twitter } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";
import Footer from "@/app/components/Footer/Footer";
import FirstImage from "@/public/Image/1.png";
import SecondImage from "@/public/Image/2.png";
import ThirdImage from "@/public/Image/3.png";
import FourthImage from "@/public/Image/4.png";
import FifthImage from "@/public/Image/5.png";
import SixthImage from "@/public/Image/6.png";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Get Started",
    links: [
      { label: "Sign up", href: "#" },
      { label: "Login", href: "#" },
    ],
  },
  {
    title: "Discover",
    links: [
      { label: "Jeton Card", href: "#" },
      { label: "Fees", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Newsroom", href: "#" },
      { label: "Partnerships", href: "#" },
      { label: "Media Assets", href: "#" },
      { label: "Promotions", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Cookie Policy", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms and Conditions", href: "#" },
      { label: "Disclaimers", href: "#" },
      { label: "AML Policy", href: "#" },
      { label: "Complaints Handling Policy", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Developers", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Support", href: "#" },
      { label: "Release Notes", href: "#" },
    ],
  },
];

export default function page() {
  return (
    <footer className="bg-white border-t border-gray-100 lg:mt-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 pb-16 border-b border-gray-100">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold text-[#f73b20]/40 mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#f73b20] hover:text-orange-700 text-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 pb-16 border-b border-gray-100 gap-8">
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
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

          <div className="flex gap-4 justify-center md:justify-end">
            <a
              href="#"
              className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white hover:bg-orange-700 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Language Selector */}
          <div className="flex items-center gap-2 text-orange-600 cursor-pointer hover:text-orange-700 transition-colors mb-4 md:mb-0">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-medium">EN</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          {/* Made by Büro */}
          <p className="text-orange-600 text-sm font-medium">Made by Büro</p>
        </div>
      </div>

      <div className="lg:-mt-72">
        <Footer />
      </div>
    </footer>
  );
}
