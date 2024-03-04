import React from "react";
import IframeComponentCalcul from "../components/applications/IframeComponentCalcul";
import IframeComponentToDo from "../components/applications/IframeComponentToDo";
import IframeComponentWeather from "../components/applications/IframeComponentWeather";
import IframeComponentLinkShort from "../components/applications/IframeComponentLinkShort";
import IframeSecretRecording from "../components/applications/iframeSecretRecording";
import IframeComponentTable from "../components/applications/iframeComponentTable";



export const Application = () => {
    return (
        <div className="container-services">
            <IframeComponentCalcul/>
            <IframeComponentTable/>
           <IframeComponentToDo/>
           <IframeComponentWeather/>
            <IframeComponentLinkShort/>
            <IframeSecretRecording/>
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

export const Table  = () => {
    return (
        <div className="services">
            <IframeComponentTable/>
        </div>
    )
}
export const Weather = () => {
    return (
        <div className="services">
         <IframeComponentWeather/>
        </div>
    );
};

export const LinkShort = () => {
    return (
        <div className="services">
            <IframeComponentLinkShort/>
        </div>
    );
}


export const SecretRecording = () => {
    return (
        <div className="services">
            <IframeSecretRecording/>
        </div>
    );
}