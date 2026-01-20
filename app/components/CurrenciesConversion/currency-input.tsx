"use client";

import { Loader2 } from "lucide-react";

interface CurrencyInputProps {
  value: string;
  onChange: (value: string) => void;
  isLoading?: boolean;
  readOnly?: boolean;
}

export default function CurrencyInput({
  value,
  onChange,
  isLoading = false,
  readOnly = false,
}: CurrencyInputProps) {
  return (
    <div className="relative flex justify-center items-center">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={readOnly}
        placeholder="0.00"
        className="w-80 text-4xl font-semibold bg-[#FFF5F4] rounded-bl-2xl rounded-br-2xl px-6 py-4 outline-none border-2 border-transparent transition-colors focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={readOnly || isLoading}
      />
      {isLoading && (
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <Loader2 className="w-5 h-5 text-primary animate-spin" />
        </div>
      )}
    </div>
  );
}
