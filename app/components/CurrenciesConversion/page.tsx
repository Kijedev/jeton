"use client";

import { useState, useEffect, useCallback } from "react";
import CurrencyConverter from "@/app/components/CurrenciesConversion/currency-converter";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="flex items-center justify-center p-4">
      <CurrencyConverter />
    </main>
  );
}
