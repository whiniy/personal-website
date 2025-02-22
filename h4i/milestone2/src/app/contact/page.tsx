import React from "react";
import style from "../contact/page.module.css"
import EmailForm from "@/components/contactForm/contactForm";
import NavMenu from "@/components/dropDownNav/navMenu"

export default function Contact() {
    return (
        <div>
            <div className = {style.navDiv}><NavMenu/></div>
            <div className = {style.container} id="contactMe">
            <h1 className= {style.page_title} >Contact Me!</h1>
            <EmailForm/>
        </div>
        </div>
    );
}