import React from 'react';
import '../../styles/IframeComponent.css';
const IframeComponentCalcul = () => {
    return (
        <div className="calc-frame">
            <div className="slider-container">
                <div className="slide">
                    <iframe
                        className="iframe-calc"
                        src="https://dmitrydemidov48.github.io/calculator_js/"
                        title="Multiroom App"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default IframeComponentCalcul;