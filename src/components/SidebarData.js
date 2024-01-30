

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "About Us",
        path: "/about-us",
        icon: <AiIcons.AiFillHome />,

    },
    {
        title: "Applcations",
        path: "/services",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Calcul",
                path: "/services/services1",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "ToDo",
                path: "/services/services2",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Weather",
                path: "/services/services3",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Game",
        icon: <FaIcons.FaGamepad />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: "Multiroom",
                path: "/game/Multiroom",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Space",
                path: "/game/space",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Tower",
                path: "/game/Tower",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Cave",
                path: "/game/Cave",
                icon: <IoIcons.IoIosPaper />,
            },
        ],

    },
    {
        title: "Contact",
        path: "/contact",
        icon: <FaIcons.FaPhone />,
    },


];
