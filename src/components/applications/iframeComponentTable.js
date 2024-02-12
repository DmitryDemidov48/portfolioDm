import React from 'react';
import '../../styles/IframeComponent.css';
const IframeComponentTable = () => {
    return (
        <div className="weather-frame">
            <div className="slider-container">
                <div className="slide">
                    <iframe
                        className="iframe-weather"
                        src="https://dmitrydemidov48.github.io/table/"
                        title="Multiroom App"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default IframeComponentTable;



