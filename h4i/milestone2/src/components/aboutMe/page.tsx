"use client";
import React from "react";
import style from "./page.module.css";
import Image from "next/image";

const AboutMe: React.FC = () => {
    return (
        <div className={style.aboutMeContainer}>
            <div className={style.text}>
                <h1 className={style.title}>NICE TO MEET YOU!</h1>
                <p className={style.description}>Hi! My name is Winnie and I'm a second year Computer Science major at
                    Cal Poly. I found my passion in computer science during my junior year of high school when I 
                    took the AP CSA course. Java has long been my favorite programming language for its precise syntax 
                    and familiar structure. I currently work more with Python and web development 
                    languages, however, furthering my Java skills is always something I'm working towards. 
                </p>
            </div>
            <Image
                    width={0} height={0} sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className={style.homePic}
                    src="/aboutMe.png"
                    alt="Image of me and my friends!"
            />
        </div>
    );
};

export default AboutMe;