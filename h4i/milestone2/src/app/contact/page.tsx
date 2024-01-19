import React from "react";
import style from "../contact/page.module.css"

export default function Contact() {
    return (
        <div className = {style.container}>
            <h1 className= {style.page_title}>Contact Me!</h1>
            <form>
                <div className= {style.row}>
                    <div className= {style.column}>
                        <label htmlFor="name" className = {style.label}>Name</label>
                    </div>
                    
                    <div className= {style.column}>
                        <input type="text" className = {style.input} required/>
                    </div>
                </div>
                
                <br></br>

                <div className= {style.row}>
                    <div className= {style.column}>
                        <label htmlFor="email" className = {style.label}>Email</label>
                    </div>
                    
                    <div className= {style.column}>
                        <input type="email" className = {style.input} required/>
                    </div>
                </div>

                <br></br>

                <div className= {style.row}>
                    <div className= {style.column}>
                        <label htmlFor="message" className = {style.label}>Message</label>
                    </div>
                    
                    <div className= {style.column}>
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