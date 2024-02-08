


    import React from 'react';
import '../../styles/IframeComponent.css';
export const IframeComponentLinkShort = () => {
    return (
        <div className="weather-frame">
            <div className="slider-container">
                <div className="slide">
                    <iframe
                        className="iframe-weather"
                        src="https://dmitrydemidov48.github.io/linkshort/"
                        title="Multiroom App"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

