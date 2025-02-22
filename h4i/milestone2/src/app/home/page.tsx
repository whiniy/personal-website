import React from "react";
import style from "../home/page.module.css"
import Image from 'next/image'
import Navbar from "@/components/navbar/navbar";

export default function Home() {
    return (
        <div className= {style.container}>
            <div className= {style.row}>
                <div className= {style.textColumn}>
                    <div><div className={style.text}>
                        <h3 className={style.school}>CAL POLY</h3>
                        <h1 className={style.name}>Winnie Trinh</h1>
                    </div>
                    <div className={style.nav}><Navbar/></div></div>
                </div>
                <div className= {style.column}>
                <Image width={0} height={0} sizes="100vw" style={{ width: '70%', height: 'auto' }} className= {style.homePic} src= "/homePic.jpeg" alt="Image of me and my friends!"></Image>
                </div>
            </div>
        </div>
    );
}