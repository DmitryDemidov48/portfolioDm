
import { createContext, useContext, useState } from "react";

const SubmenuContext = createContext();

export const SubmenuProvider = ({ children }) => {
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const openSubmenu = (path) => {
        setActiveSubmenu(path);
    };

    const closeSubmenu = () => {
        setActiveSubmenu(null);
    };

    return (
        <SubmenuContext.Provider value={{ activeSubmenu, openSubmenu, closeSubmenu }}>
            {children}
        </SubmenuContext.Provider>
    );
};

export const useSubmenu = () => {
    return useContext(SubmenuContext);
};
