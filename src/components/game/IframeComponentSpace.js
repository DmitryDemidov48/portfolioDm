import React from 'react';
import '../../styles/IframeComponent.css';


const IframeComponentSpace = () => {
    return (
        <div className="video-frame">
            <div className="slider-container">
                <div className="slide">
                    <iframe
                        className="iframe"
                        src="https://dmitrydemidov48.github.io/spaceInvaders/"
                        title="Space Invaders App"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default IframeComponentSpace;
