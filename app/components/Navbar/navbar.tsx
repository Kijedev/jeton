import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function Navbar() {
  return (
    <main>
      <nav className="flex items-center justify-between px-4 mt-10 lg:px-5">
        {/* LOGO */}
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
          Jeton
        </h1>

        {/* ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-10">
          <button className="border border-white text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-sm sm:text-base">
            EN
          </button>

          <button className="border border-white text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-sm sm:text-base">
            Log in
          </button>

          <button className="bg-white text-red-500 rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base">
            Sign up
          </button>
        </div>
      </nav>
    </main>
  );
}
