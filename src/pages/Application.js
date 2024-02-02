// Filename - pages/Services.js

import React from "react";
import IframeComponentCalcul from "../components/applications/IframeComponentCalcul";
import IframeComponentToDo from "../components/applications/IframeComponentToDo";
import IframeComponentWeather from "../components/applications/IframeComponentWeather";



export const Application = () => {
    return (
        <div className="container-services">
            <IframeComponentCalcul/>
           <IframeComponentToDo/>
           <IframeComponentWeather/>
        </div>
    );
};


export const Calcul = () => {
    return (
        <div className="services">
            <IframeComponentCalcul/>
        </div>
    );
};

export const ToDo = () => {
    return (
        <div className="services">
            <IframeComponentToDo/>
        </div>
    );
};

export const Weather = () => {
    return (
        <div className="services">
         <IframeComponentWeather/>
        </div>
    );
};
