"https://dmitrydemidov48.github.io/Secret-recording"

import React from 'react';
import '../../styles/IframeComponent.css';
const IframeComponentWeather = () => {
    return (
        <div className="weather-frame">
            <div className="slider-container">
                <div className="slide">
                    <iframe
                        className="iframe-weather"
                        src="https://dmitrydemidov48.github.io/Secret-recording/"
                        title="Multiroom App"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default IframeComponentWeather;