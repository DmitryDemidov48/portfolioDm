import React from "react";
import IframeComponentMultiroom from "../components/game/IframeComponent";
import IframeComponentSpace from "../components/game/IframeComponentSpace";
import IframeComponentsTower from "../components/game/IframeComponentsTower";
import IframeComponentsCave from "../components/game/IframeComponentsCave";



export const Game = () => {
    return (
        <div className="container-services">
           <h1>"Пожалуйста, переключитесь на десктопную версию сайта.</h1>
        </div>
    );
};


export const Space = () => {
    return (
        <div className="services">
            <IframeComponentSpace/>

        </div>
    );
};
export const Multiroom = () => {
    return (
        <div className="services">
            <IframeComponentMultiroom/>

        </div>
    );
};

export const Tower = () => {
    return (
        <div className="services">
            <IframeComponentsTower/>
        </div>
    );
};

export const Cave = () => {
    return (
        <div className="services">
            <IframeComponentsCave/>
        </div>
    );
};
