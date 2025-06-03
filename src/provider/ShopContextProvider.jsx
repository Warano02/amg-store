import { useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";

export const ShopContextProvider = ({ children }) => {
    const [currency, setCurrency] = useState(() => {
        return localStorage.getItem("currency") || "$";
    });

    useEffect(() => {
        localStorage.setItem("currency", currency);
    }, [currency]);

    // Taux de conversion approximatifs
    const rates = {
        "$": 1,
        "€": 1.17,
        "XAF": 655.5,
        "XOF": 577,
        "₦": 1587.8,
        "R": 14.8,
        "KSh": 115,
        "Br": 55,
        "₵": 7.2,
    };

    // Mappage devise → locale + ISO code
    const currencyData = {
        "$": { locale: "en-US", code: "USD" },
        "€": { locale: "fr-FR", code: "EUR" },
        "XAF": { locale: "fr-CM", code: "XAF" },
        "XOF": { locale: "fr-SN", code: "XOF" },
        "₦": { locale: "en-NG", code: "NGN" },
        "R": { locale: "en-ZA", code: "ZAR" },
        "KSh": { locale: "en-KE", code: "KES" },
        "Br": { locale: "am-ET", code: "ETB" },
        "₵": { locale: "en-GH", code: "GHS" },
    };

    const formatPrice = (price) => {
        const rate = rates[currency] || 1;
        const { locale, code } = currencyData[currency] || { locale: "en-US", code: "USD" };
        const converted = price * rate;

        return new Intl.NumberFormat(locale, {
            style: "currency",
            currency: code,
            minimumFractionDigits: 2,
        }).format(converted);
    };

    const value = { currency, setCurrency, formatPrice };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};
