import React from "react";
import style from "../contact/page.module.css"

export default function Contact() {
    return (
        <div className = {style.container}>
            <h1 className= {style.page_title}>Contact Me!</h1>
            <form>
                <div>
                    <div>
                        <label htmlFor="name" className = {style.label}>Name</label>
                    </div>
                    
                    <div>
                        <input type="text" className = {style.input} required/>
                    </div>
                </div>
                
                <br></br>

                <div>
                    <div>
                        <label htmlFor="email" className = {style.label}>Email</label>
                    </div>
                    
                    <div>
                        <input type="email" className = {style.input} required/>
                    </div>
                </div>

                <br></br>

                <div>
                    <div>
                        <label htmlFor="message" className = {style.label}>Message</label>
                    </div>
                    
                    <div>
                        <textarea className = {style.message}></textarea>
                    </div>
                </div>
                <div>
                    <input type="submit" className = {style.submit} required/>
                </div>
            </form>
        </div>
    );
}