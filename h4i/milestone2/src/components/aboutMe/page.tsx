"use client";
import React from "react";
import style from "./page.module.css";
import Image from "next/image";

const AboutMe: React.FC = () => {
    return (
        <div className= {style.container}>
            <div className={style.item}>
                <h1 className={style.name}>Winnie Trinh</h1>
            </div>

            <div className= {style.item}>
                <Image width={0} height={0} sizes="100vw" style={{ width: '60%', height: 'auto' }} className= {style.homePic} src= "/homePic.jpeg" alt="Image of me and my friends!"></Image>
            </div>
        </div>
    );
};

export default AboutMe;
