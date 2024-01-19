import React from "react";
import style from "../app/home/page.module.css"
import Image from 'next/image'

export default function Home() {
    return (
        <div className= {style.container}>
            <div className= {style.row}>
                <div className= {style.column}>
                    <Image width={0} height={0} sizes="100vw" style={{ width: '50%', height: 'auto' }} className= {style.homePic} src= "/IMG_6018.jpeg" alt="A video of an image of the sky and clouds being too big"></Image>
                </div>
                <div className= {style.column}>
                    <p className= {style.content}>Hi! My name is Winnie Trinh, and I am a <em>first year Computer Science major</em> at <strong>Cal Poly 
                    SLO</strong>. My hobbies are mastering the skill of doing my nails, working out, going on hikes, and hanging
                        out with my friends. I also love trying new things or opportunities that take me out of my comfort zone! 
                        Nothing too athletic though...like long distance running...
                        <br></br>
                        <br></br>
                        This quarter, I strive to make new friends, connections, and thrive in the classes I'm most interested/engaged 
                        in such as my Calculas and Data Structures class.
                    </p>
                </div>
            </div>
        </div>
    );
}