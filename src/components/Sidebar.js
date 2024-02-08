import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "../styles/Sidebar.css";


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false); // Состояние для отображения/скрытия бокового меню

    // Функция для переключения состояния бокового меню
    const showSidebar = () => setSidebar(!sidebar);

    const sidebarRef = useRef(null); // Создание ссылки на DOM-элемент бокового меню

    // Эффект для обработки кликов вне бокового меню
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setSidebar(false);
            }
        };

        document.addEventListener("click", handleOutsideClick); // Добавление слушателя событий для кликов

        // Функция для удаления слушателя событий
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [sidebarRef]); // Зависимость, указывающая, когда нужно вызывать эффект

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="Nav" ref={sidebarRef}>
                    <Link to="#" className="NavIcon" onClick={showSidebar}>
                        <FaIcons.FaBars />
                    </Link>
                    <h1 className="HeaderTitle">Project Portfolio</h1>

                </div>
                <nav className={`SidebarNav ${sidebar ? "open" : ""}`} >
                    <div className="SidebarWrap">
                        <Link to="#" className={`NavIcon ${sidebar ? 'rotate' : ''}`} >
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </Link>
                        {SidebarData.map((item, index) => ( // Итерация по данным бокового меню
                            <SubMenu item={item} key={index} /> // Вывод компонента подменю
                        ))}
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;