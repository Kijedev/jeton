"use client";

import { useState } from "react";
import Preloader from "@/app/components/Preloader/page";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  return (
    <html lang="en">
      <body>
        <Preloader onFinish={() => setReady(true)} />

        <main
          className={`transition-opacity duration-300 ${
            ready ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
