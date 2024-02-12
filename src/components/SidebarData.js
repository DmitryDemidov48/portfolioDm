import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { MdOutlineGames } from "react-icons/md";
import { LuCalculator } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { TiWeatherCloudy } from "react-icons/ti";
import { MdOutlineShortText } from "react-icons/md"

export const SidebarData = [
    {
        title: "About Me",
        path: "/portfoliodm",
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
                title: "Сalculator",
                path: "/services1",
                icon: <LuCalculator />,
                cName: "sub-nav",
            },
            {
                title: "ToDo",
                path: "/services2",
                icon: <LuListTodo />,
                cName: "sub-nav",
            },

            {
                title: "Weather",
                path: "/services3",
                icon: <TiWeatherCloudy />,
            },
            {
                title: "LinkShort",
                path: "/services4",
                icon: <MdOutlineShortText />,
            },
            {
                title: "SecretRecording",
                path: "/services5",
                icon: <MdOutlineShortText />,
            },
            {
                title: "Table",
                path: "/services5",
                icon: <TiWeatherCloudy />,
            },



        ],
    },
    {
        title: "Game",
        icon: <FaIcons.FaGamepad />,
        path: "/game",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: "Multiroom",
                path: "/game/Multiroom",
                icon: <MdOutlineGames />,
                cName: "sub-nav",
            },
            {
                title: "Space",
                path: "/game/space",
                icon: <MdOutlineGames />,
                cName: "sub-nav",
            },
            {
                title: "Tower",
                path: "/game/Tower",
                icon: <MdOutlineGames />,
            },
            {
                title: "Cave",
                path: "/game/Cave",
                icon: <MdOutlineGames />,
            },
        ],

    },
    {
        title: "Contact",
        path: "/contact",
        icon: <FaIcons.FaPhone />,
    },


];
