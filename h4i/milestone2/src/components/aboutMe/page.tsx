"use client";
import React from "react";
import style from "./page.module.css";
import Image from "next/image";

const AboutMe: React.FC = () => {
    return (
        <div className={style.gridContainer}>
        <div className= {style.container}>
            <div className={style.text}>
                <h1 className={style.title}>NICE TO MEET YOU!</h1>
                <p className={style.description}>Hi! My name is Winnie and I'm a second year at
                     Cal Poly. 
                </p>
            </div>

            <div className= {style.item}>
                <Image width={0} height={0} sizes="100vw" style={{ width: '60%', height: 'auto' }} className= {style.homePic} src= "/homePic.jpeg" alt="Image of me and my friends!"></Image>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;
