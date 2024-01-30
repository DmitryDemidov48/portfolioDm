import React from 'react';
import '../../styles/IframeComponent.css';
const IframeComponentsTower = () => {
    return (
        <div className="video-frame">
            <div className="slider-container">
                <div className="slide">
                    <iframe
                        className="map"
                        src="https://dmitrydemidov48.github.io/tower_js/"
                        title="Multiroom App"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default IframeComponentsTower;