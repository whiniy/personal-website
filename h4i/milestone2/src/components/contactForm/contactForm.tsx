"use client"
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import style from "../contactForm/contactForm.module.css"

const EmailForm = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const serviceId = 'service_347w0rr';
        const templateId = 'contact_form';
        const publicKey = 'giLU5GdzMHGkdj1Jc';
        
        const templateParams = {
            from_name: name,
            user_email: email,
            to_name: 'Winnie Trinh',
            message: message,
        };

        
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Success!');
                setName('');
                setEmail('');
                setMessage('');
                
                
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Oh No! ' + JSON.stringify(error));
            });
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className={style.divContainer}>
                <h3 className={style.label}>Name</h3>
                <input className={style.input}
                    type = "text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className={style.divContainer}>
                <h3 className={style.label}>Email</h3>
                <input className={style.input}
                    type = "email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className={style.divContainer}>
                <h3 className={style.label}>Message</h3>
                <textarea className={style.message}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
            </div>
            <div>
            <button type="submit" className={style.submit}>Send</button>
            </div>

        </form>

    )

}

export default EmailForm