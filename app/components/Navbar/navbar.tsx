import type { Metadata } from "next";
import Button from "@/app/components/ui/Button/page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function Navbar() {
  return (
    <main>
      <nav className="flex items-center justify-between px-4 mt-10 lg:px-5">
        {/* LOGO */}
        <Link
          href="/"
          className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold goldman"
        >
          Jeton
        </Link>

        {/* ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-10">
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
      </nav>
    </main>
  );
}
