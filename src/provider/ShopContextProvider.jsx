import { useState } from "react";
import { ShopContext } from "../context/ShopContext";

export const ShopContextProvider = ({ children }) => {
    const [currency, setCurrency] = useState("$");
    const formatPrice = (price) => {
        switch (currency) {
            case "€":
                // Euro, utilisé dans certains pays africains comme la Côte d'Ivoire, la RDC, etc.
                return `${(price * 1.17).toFixed(2)} €`;
            case "XAF":
                // Franc CFA BEAC (Cameroun, Gabon, etc.)
                return `${(price * 655.5).toFixed(2)} XAF`;
            case "XOF":
                // Franc CFA BCEAO (UEMOA)
                return `${(price * 577).toFixed(2)} XOF`;
            case "₦":
                // Naira nigérian
                return `₦ ${(price * 1587.80).toFixed(2)}`;
            case "R":
                // Rand sud-africain
                return `R ${(price * 14.8).toFixed(2)}`;
            case "KSh":
                // Shilling kényan
                return `KSh ${(price * 115).toFixed(2)}`;
            case "Br":
                // Birr éthiopien
                return `Br ${(price * 55).toFixed(2)}`;
            case "₵":
                // Cedi ghanéen
                return `₵${(price * 7.2).toFixed(2)}`;
            default:
                return `$${price}`;
        }
    };

    const value = { currency, setCurrency, formatPrice };
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};