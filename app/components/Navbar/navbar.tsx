"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Button from "@/app/components/ui/Button/page";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-6 lg:px-10 py-6">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold goldman"
        >
          Jeton
        </Link>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-4 lg:gap-10">
          <Button
            text="EN"
            fromColor="from-transparent"
            toColor="to-transparent"
            textColor="text-white"
            border="border border-red-600"
          />

          <Button
            text="Log in"
            fromColor="from-transparent"
            toColor="to-transparent"
            textColor="text-white"
            border="border border-white"
          />

          <Button
            text="Sign up"
            fromColor="from-white"
            toColor="to-white"
            textColor="text-[#f73b20]"
            border="border border-white"
          />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-6 flex flex-col gap-4">
          <Button
            text="Log in"
            fromColor="from-transparent"
            toColor="to-transparent"
            textColor="text-white"
            border="border border-white"
          />
        </div>
      )}
    </nav>
  );
}
