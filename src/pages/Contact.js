import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';
import SocialLinks from "../components/SocialLinks";

const serviceID = process.env.EMAILJS_SERVICE_ID;
const templateID = process.env.EMAILJS_TEMPLATE_ID;
const userID = process.env.USER_ID;

const EmailForm = () => {
    const [errorMessage, setErrorMessage] = useState(null);

    emailjs.init(userID);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const btn = document.getElementById('button');
        btn.value = 'Sending...';

        try {
            await emailjs.sendForm(serviceID, templateID, e.target);
            btn.value = 'Send Email';
            console.log('Email sent successfully');
        } catch (err) {
            btn.value = 'Send Email';
            console.error('Email sending failed:', err);
            setErrorMessage('Failed to send email. Please try again.');
        }
    };

    return (
        <div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form id="contact-form" className="email-form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="to_name">Имя</label>
                    <input type="text" name="to_name" id="to_name" />
                </div>
                <div className="field">
                    <label htmlFor="from_name">Фамилия</label>
                    <input type="text" name="from_name" id="from_name" />
                </div>
                <div className="field">
                    <label htmlFor="message">Сообщение</label>
                    <input type="text" name="message" id="message" />
                </div>
                <div className="field">
                    <label htmlFor="reply_to">Почта</label>
                    <input type="text" name="reply_to" id="reply_to" />
                </div>
                <input type="submit" id="button" value="Send Email" />
            </form>
            <SocialLinks/>
        </div>
    );
};

export default EmailForm;
