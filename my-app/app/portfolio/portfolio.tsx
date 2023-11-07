import style from "./portfolio.module.css";
import React from "react";
import Link from "next/link";

export default function Contact() {
    return (
        <main>
            <h1 className = {style.page_title}></h1>
            <div className = {style.project}>
                <img className = {style.project_details} src="website.png" alt="Screenshot of the home page of Winnie's personal website"/>
            </div>
            <div className = {style.project_details}>
                <p className = {style.project_name}>Winnie's Personal Website</p>
                <p className = {style.project_description}>This website was created using Visual Studio Code in HTML and CSS as well as Git.</p>
                <Link href="index.html" id="learnMore">Learn More</Link>
            </div>
        </main>
    );
}