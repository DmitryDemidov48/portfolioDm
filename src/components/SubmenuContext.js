import { createContext, useContext, useState } from "react";

// Создание контекста для подменю
const SubmenuContext = createContext();

// Компонент-провайдер контекста подменю
export const SubmenuProvider = ({ children }) => {
    const [activeSubmenu, setActiveSubmenu] = useState(null); // Состояние для активного подменю

    // Функция для открытия подменю
    const openSubmenu = (path) => {
        setActiveSubmenu(path);
    };

    // Функция для закрытия подменю
    const closeSubmenu = () => {
        setActiveSubmenu(null);
    };

    // Возврат компонента с провайдером контекста и его потомками
    return (
        <SubmenuContext.Provider value={{ activeSubmenu, openSubmenu, closeSubmenu }}>
            {children}
        </SubmenuContext.Provider>
    );
};

// Хук для использования контекста подменю
export const useSubmenu = () => {
    return useContext(SubmenuContext);
};
