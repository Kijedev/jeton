export interface Currency {
  code: string;
  name: string;
  flag: string;
  symbol: string;
}

export const CURRENCIES: Currency[] = [
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', symbol: '€' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧', symbol: '£' },
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸', symbol: '$' },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵', symbol: '¥' },
  { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭', symbol: 'CHF' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦', symbol: '$' },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺', symbol: '$' },
  { code: 'NZD', name: 'New Zealand Dollar', flag: '🇳🇿', symbol: '$' },
  { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳', symbol: '¥' },
  { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳', symbol: '₹' },
  { code: 'SEK', name: 'Swedish Krona', flag: '🇸🇪', symbol: 'kr' },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', symbol: '$' },
  { code: 'NGN', name: 'Nigerian Naira', flag: '🇳🇬', symbol: '₦' },
];

export const EXCHANGE_RATES: Record<string, number> = {
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
  'USD-CAD': 1.35,
  'CAD-USD': 0.741,
  'EUR-CAD': 1.467,
  'CAD-EUR': 0.681,
  'AUD-USD': 0.65,
  'USD-AUD': 1.538,
  'NZD-USD': 0.583,
  'USD-NZD': 1.715,
  'USD-CNY': 7.25,
  'CNY-USD': 0.138,
  'USD-INR': 83.12,
  'INR-USD': 0.012,
  'EUR-SEK': 11.35,
  'SEK-EUR': 0.088,
  'USD-SGD': 1.33,
  'SGD-USD': 0.752,
  'NGN-USD': 0.000714,
  'USD-NGN': 1421,
};

// Default rate for unsupported pairs (simplified)
export function getExchangeRate(from: string, to: string): number {
  if (from === to) return 1;

  const key = `${from}-${to}`;
  if (EXCHANGE_RATES[key]) {
    return EXCHANGE_RATES[key];
  }

  // Try reverse calculation
  const reverseKey = `${to}-${from}`;
  if (EXCHANGE_RATES[reverseKey]) {
    return 1 / EXCHANGE_RATES[reverseKey];
  }

  // Fallback to USD as base
  const fromToUsd = EXCHANGE_RATES[`${from}-USD`];
  const usdToTarget = EXCHANGE_RATES[`USD-${to}`];

  if (fromToUsd && usdToTarget) {
    return fromToUsd * usdToTarget;
  }

  return 1;
}
