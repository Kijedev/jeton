'use client';

import { useState, useEffect, useCallback } from 'react';
import { ArrowUpDown, ChevronDown, Loader2 } from 'lucide-react';
import CurrencyInput from '@/app/components/CurrenciesConversion/currency-input';
import CurrencySelect from '@/app/components/CurrenciesConversion/currency-select';
import { CURRENCIES, getExchangeRate } from '@/app/lib/currencies';
import type { Currency } from '@/app/lib/currencies';
import { TbArrowsExchange2 } from "react-icons/tb";

const EXCHANGE_RATES: Record<string, number> = {
  'EUR-GBP': 0.868,
  'GBP-EUR': 1.152,
  'USD-EUR': 0.92,
  'EUR-USD': 1.087,
  'USD-GBP': 0.794,
  'GBP-USD': 1.26,
  'EUR-CHF': 0.95,
  'CHF-EUR': 1.053,
  'USD-JPY': 155.3,
  'JPY-USD': 0.0064,
};

export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState<Currency>(CURRENCIES[0]);
  const [toCurrency, setToCurrency] = useState<Currency>(CURRENCIES[1]);
  const [fromAmount, setFromAmount] = useState<string>('10');
  const [toAmount, setToAmount] = useState<string>('8.68');
  const [isLoading, setIsLoading] = useState(false);
  const [lastEdited, setLastEdited] = useState<'from' | 'to'>('from');

  const performConversion = useCallback(
    (amount: string, from: Currency, to: Currency, direction: 'from' | 'to') => {
      if (!amount || Number.isNaN(Number(amount))) {
        direction === 'from' ? setToAmount('') : setFromAmount('');
        return;
      }

      const numAmount = parseFloat(amount);
      const key = `${from.code}-${to.code}`;
      const rate = EXCHANGE_RATES[key] || 1;
      const converted = (numAmount * rate).toFixed(2);

      if (direction === 'from') {
        setToAmount(converted);
      } else {
        setFromAmount(converted);
      }
    },
    []
  );

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    setLastEdited('from');
    performConversion(value, fromCurrency, toCurrency, 'from');
  };

  const handleToAmountChange = (value: string) => {
    setToAmount(value);
    setLastEdited('to');
    performConversion(value, toCurrency, fromCurrency, 'to');
  };

  const handleFromCurrencyChange = (currency: Currency) => {
    setFromCurrency(currency);
    if (fromAmount) {
      performConversion(fromAmount, currency, toCurrency, 'from');
    }
  };

  const handleToCurrencyChange = (currency: Currency) => {
    setToCurrency(currency);
    if (fromAmount) {
      performConversion(fromAmount, fromCurrency, currency, 'from');
    }
  };

  const handleSwap = () => {
    const tempCurrency = fromCurrency;
    const tempAmount = fromAmount;

    setFromCurrency(toCurrency);
    setFromAmount(toAmount);
    setToCurrency(tempCurrency);
    setToAmount(tempAmount);

    performConversion(toAmount, toCurrency, fromCurrency, 'from');
  };

  return (
    <div className="w-full max-w-md">
      <div className="space-y-6 mt-10 mb-32">
        {/* From Currency Section */}
        <div className="">
          <CurrencySelect
            currency={fromCurrency}
            onCurrencyChange={handleFromCurrencyChange}
          />
          <CurrencyInput
            value={fromAmount}
            onChange={handleFromAmountChange}
            isLoading={isLoading}
          />
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSwap}
            className="hover:bg-black/5 hover:rounded-full hover:p-2 cursor-pointer"
            aria-label="Swap currencies"
          >
            <TbArrowsExchange2 className="w-5 h-5 text-[#709FF2] rotate-90" />
          </button>
        </div>

        {/* To Currency Section */}
        <div className="">
          <CurrencySelect
            currency={toCurrency}
            onCurrencyChange={handleToCurrencyChange}
          />
          <CurrencyInput
            value={toAmount}
            onChange={handleToAmountChange}
            isLoading={isLoading}
            readOnly={true}
          />
        </div>

        {/* Exchange Rate Info */}
        {/* <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            1 {fromCurrency.code} = {(
              EXCHANGE_RATES[`${fromCurrency.code}-${toCurrency.code}`] || 1
            ).toFixed(4)} {toCurrency.code}
          </p>
        </div> */}
      </div>
    </div>
  );
}
