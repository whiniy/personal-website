"use client"
import React, { useRef } from "react";
import style from "../home/page.module.css";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import AboutMe from "@/components/aboutMe/page";
import dynamic from "next/dynamic";
import Portfolio from "@/components/portfolio/page";

export default function Home() {
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);
    const resumeRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref : any) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={style.container}>
            <div className={style.homeContainer}>
            <Navbar 
                scrollToSection={scrollToSection} 
                aboutRef={aboutRef} 
                portfolioRef={portfolioRef} 
                resumeRef={resumeRef} 
                contactRef={contactRef} 
            />

            <h1 className={style.name}>WINNIE TRINH</h1>
            <h3 className={style.description}>CAL POLY &middot; COMPUTER SCIENCE</h3>
            <Image
                width={0} height={0} sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className={style.homePic}
                src="/testHome.png"
                alt="Image of me and my friends!"
            />
            </div>

            <section ref={aboutRef} id="aboutMe" className={style.section}>
                <AboutMe />
            </section>

            <section ref={portfolioRef} id="portfolio" className={style.section}>
                <Portfolio />
            </section>

            <section ref={resumeRef} id="resume" className={style.section}>
                <h2>Resume Section</h2>
                <p>Content for the resume section...</p>
            </section>

            <section ref={contactRef} id="contact" className={style.section}>
                <h2>Contact Section</h2>
                <p>Content for the contact section...</p>
            </section>
        </div>
    );
}
