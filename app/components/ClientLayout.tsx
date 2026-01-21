"use client";
import { useState, ReactNode } from "react";
import Preloader from "@/app/components/Preloader/page";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  return (
    <>
      <Preloader onFinish={() => setReady(true)} />

      <main
        className={`transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {children}
      </main>
    </>
  );
}
