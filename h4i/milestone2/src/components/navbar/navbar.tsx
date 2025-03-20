"use client"
import React from "react";
import style from "./navbar.module.css";

interface NavbarProps {
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
    aboutRef: React.RefObject<HTMLDivElement>;
    portfolioRef: React.RefObject<HTMLDivElement>;
    resumeRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, aboutRef, portfolioRef, resumeRef, contactRef }) => {
    return (
        <div className={style.navDiv}>
            <nav className={style.nav}>
                <ul className={style.list}>
                    <li className={style.navA}>
                        <button className={style.a} onClick={() => scrollToSection(aboutRef)}>About Me</button>
                    </li>
                    <li className={style.navA}><p className={style.dividers}>|</p></li>
                    <li className={style.navA}>
                        <button className={style.a} onClick={() => scrollToSection(portfolioRef)}>Portfolio</button>
                    </li>
                    <li className={style.navA}><p className={style.dividers}>|</p></li>
                    <li className={style.navA}>
                        <button className={style.a} onClick={() => scrollToSection(resumeRef)}>Resume</button>
                    </li>
                    <li className={style.navA}><p className={style.dividers}>|</p></li>
                    <li className={style.navA}>
                        <button className={style.a} onClick={() => scrollToSection(contactRef)}>Contact</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
