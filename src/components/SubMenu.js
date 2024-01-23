import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SubMenuStyles.css";
import { useSubmenu } from "./SubmenuContext";

const SubMenu = ({ item }) => {
    const { activeSubmenu,openSubmenu } = useSubmenu();
    const [isHovered, setIsHovered] = useState(false);


    const handleMouseEnter = () => {
        setIsHovered(true);
        openSubmenu(item.path);
    };



    return (
        <>
            <div
                className={`sidebar-link ${activeSubmenu === item.path && isHovered }`}
                onMouseEnter={handleMouseEnter}
            >
                <Link to={item.path}>
                    <div >
                        {item.icon}
                        <span className="sidebar-label">{item.title}</span>
                    </div>
                </Link>
            </div>
            {item.subNav && activeSubmenu === item.path && isHovered && (
                <div className='submenu-container'>
                    {item.subNav.map((subItem, index) => (
                        <Link
                            to={subItem.path}
                            key={index}
                            className={`dropdown-link ${activeSubmenu === subItem.path }`}
                        >
                            <div>
                                {subItem.icon}
                                <span className="sidebar-label">
                                    {subItem.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default SubMenu;
