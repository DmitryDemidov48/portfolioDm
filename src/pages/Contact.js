import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';
import SocialLinks from "../components/SocialLinks";

// Получение значений из переменных
const serviceID = process.env.EMAILJS_SERVICE_ID;
const templateID = process.env.EMAILJS_TEMPLATE_ID;
const userID = process.env.USER_ID;

// Компонент формы электронной почты
const EmailForm = () => {
    // Состояние для сообщения об ошибке
    const [errorMessage, setErrorMessage] = useState(null);

    // Инициализация emailjs с пользовательским идентификатором
    emailjs.init(userID);

    // Обработчик отправки формы
    const handleSubmit = async (e) => {
        e.preventDefault(); // Предотвращение стандартного поведения формы
        const btn = document.getElementById('button');
        btn.value = 'Sending...'; // Изменение текста кнопки при отправке

        try {
            // Отправка формы через emailjs
            await emailjs.sendForm(serviceID, templateID, e.target);
            btn.value = 'Send Email'; // Восстановление исходного текста кнопки
            console.log('Email sent successfully'); // Вывод сообщения об успешной отправке
        } catch (err) {
            // Обработка ошибки отправки почты
            btn.value = 'Send Email'; // Восстановление исходного текста кнопки
            console.error('Email sending failed:', err); // Вывод сообщения об ошибке в консоль
            setErrorMessage('Failed to send email. Please try again.'); // Установка сообщения об ошибке
        }
    };

    // Возвращение JSX разметки формы и сообщений об ошибке
    return (
        <div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {/* Форма для ввода данных для отправки */}
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

export default EmailForm; // Экспорт компонента формы
