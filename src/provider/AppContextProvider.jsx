import { useState } from "react";
import { AppContext } from "../context/AppContext";

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(true);
    const [isLogin, setIsLogin] = useState(false)
    const [cardItem, setCardItem] = useState(3)
    const value = { user, setUser, isLogin, setIsLogin,cardItem,setCardItem };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};