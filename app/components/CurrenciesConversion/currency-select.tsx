"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { CURRENCIES } from "@/app/lib/currencies";
import type { Currency } from "@/app/lib/currencies";

interface CurrencySelectProps {
  currency: Currency;
  onCurrencyChange: (currency: Currency) => void;
}

export default function CurrencySelect({
  currency,
  onCurrencyChange,
}: CurrencySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex justify-center items-center" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-80 flex items-center justify-between px-6 py-3 rounded-tl-2xl rounded-tr-2xl bg-[#FFF5F4] transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-primary text-white overflow-hidden">
            {currency.flag}
          </div>
          <span className="font-semibold text-foreground">{currency.code}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-red-600 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-[#F73B20] shadow-xl rounded-2xl z-999 max-h-64 overflow-y-auto">
          {CURRENCIES.map((curr) => (
            <button
              key={curr.code}
              onClick={() => {
                onCurrencyChange(curr);
                setIsOpen(false);
              }}
              className={`w-full px-6 py-3 flex items-center gap-3 hover:bg-[#F73B20] hover:text-white hover:rounded-xl transition-colors text-left ${
                curr.code === currency.code ? "bg-secondary" : ""
              }`}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-primary text-white overflow-hidden">
                {curr.flag}
              </div>
              <div>
                <div className="font-semibold text-foreground">{curr.code}</div>
                <div className="text-sm text-muted-foreground">{curr.name}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
