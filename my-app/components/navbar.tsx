import Link from "next/link";
import React from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
        <nav className ={style.navbar}>
            <h1 className ={style.logo}></h1>
            <Link href="index.html" className = {style.personalWebsite}>personal website</Link>
            <ul className = {style.nav_list}>
                <li className = {style.navA}><a className = {style.a} href="index.html">Home</a></li>
                <li className = {style.navA}><a className = {style.a} href="blog.html">Blog</a></li>
                <li className = {style.navA}><a className = {style.a} href="portfolio.html">Portfolio</a></li>
                <li className = {style.navA}><a className = {style.a} href="resume.html">Resume</a></li>
                <li className = {style.navA}><a className = {style.a} href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
}




