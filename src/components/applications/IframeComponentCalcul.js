import React from 'react';
import '../../styles/IframeComponent.css';
const IframeComponentCalcul = () => {
    return (
        <div className="video-frame">
            <div className="slider-container">
                <div className="slide">
                    <iframe
                        className="iframe"
                        src="https://dmitrydemidov48.github.io/calculator_js/"
                        title="Multiroom App"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default IframeComponentCalcul;