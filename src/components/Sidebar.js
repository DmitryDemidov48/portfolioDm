import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "../styles/Sidebar.css";

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setSidebar(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [sidebarRef]);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className="Nav" ref={sidebarRef}>
                    <Link to="#" className="NavIcon" onClick={showSidebar}>
                        <FaIcons.FaBars />
                    </Link>
                    <h1 className="HeaderTitle">Дмитрий Демидов</h1>
                </div>
                <nav className={`SidebarNav ${sidebar ? "open" : ""}`} >
                    <div className="SidebarWrap">
                        <Link to="#" className={`NavIcon ${sidebar ? 'rotate' : ''}`} >
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </Link>
                        {SidebarData.map((item, index) => (
                            <SubMenu item={item} key={index} />
                        ))}
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;
