import React from 'react';
import { FaTelegram, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div>

            <div className="social-links">
                <a href="https://t.me/objdefault ">
                    <FaTelegram /> Telegram
                </a>
                <a href="https://github.com/DmitryDemidov48">
                    <FaGithub /> GitHub
                </a>
            </div>
        </div>
    );
};

export default SocialLinks;
