import React from "react";
import style from "../contact/page.module.css"
import EmailForm from "@/components/contactForm/contactForm";

export default function Contact() {
    return (
        <div className = {style.container} id="contactMe">
            <h1 className= {style.page_title} >Contact Me!</h1>
            <EmailForm/>
        </div>
    );
}