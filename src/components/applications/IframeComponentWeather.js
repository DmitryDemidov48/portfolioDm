import React from 'react';
import '../../styles/IframeComponent.css';
const IframeComponentWeather = () => {
    return (
        <div className="video-frame">
            <div className="slider-container">
                <div className="slide">
                    <iframe
                        className="iframe"
                        src="https://dmitrydemidov48.github.io/weather_js/"
                        title="Multiroom App"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default IframeComponentWeather;