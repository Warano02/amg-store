import { useShopContext } from "@/hooks/useShopContext";

function CurrencySelector() {
  const { currency, setCurrency } = useShopContext();

  const currencies = [
    { code: '$', label: 'Dollar ($)' },
    { code: '€', label: 'Euro (€)' },
    { code: 'XAF', label: 'Franc CFA BEAC (XAF)' },
    { code: 'XOF', label: 'Franc CFA BCEAO (XOF)' },
    { code: '₦', label: 'Naira (₦)' },
    { code: 'R', label: 'Rand (R)' },
    { code: 'KSh', label: 'Shilling kényan (KSh)' },
    { code: 'Br', label: 'Birr (Br)' },
    { code: '₵', label: 'Cedi (₵)' },
  ];

  const handleChange = (e) => setCurrency(e.target.value);

  return (
    <select
      value={currency}
      onChange={handleChange}
      className="bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-1 text-sm text-gray-700"
    >
      {currencies.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default CurrencySelector;
