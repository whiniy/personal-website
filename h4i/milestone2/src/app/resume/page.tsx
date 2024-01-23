import React from "react";
import style from "../resume/page.module.css"


export default function Resume() {
    return (
        <div>
            <a className= {style.downloadPDF} href="/resume.pdf" download>DOWNLOAD RESUME</a>
            <div className= {style.container}>
                <section>
                <h2 className= {style.section_title}>Education</h2>
                <div>
                    <h3 className= {style.entry_title}><b>California Polytechnic State University,</b> San Luis Obispo, CA</h3>
                    <h3 className= {style.entry_date}>September 2023 - Present</h3>
                    <ul className= {style.entry_info}>
                        <li>1st year Computer Science Undergraduate</li>
                        <li>Courses: Data Structures, Calculus III</li>
                    </ul>
                </div>   
                <div>
                    <h3 className= {style.entry_title}><b>Mark Keppel High School,</b> Alhambra, CA</h3>
                    <h3 className= {style.entry_date}>August 2019 - May 2023</h3>
                    <ul className= {style.entry_info}>
                        <li>Cumulative GPA: 4.13</li>
                        <li>Courses: AP CSA, AP Physics I, AP Calculus AB & BC, AP Chemistry</li>
                    </ul>
                </div>
                </section>
                <br></br>
                <section>
                <h2 className= {style.section_title}>Experience</h2>
                <div>
                    <h3 className= {style.entry_title}><b>Tomomi AYCE Sushi Restaurant,</b> Alhambra, CA</h3>
                    <h3 className= {style.entry_date}>June 2023 - September 2023</h3>
                    <p className = {style.misc}>Hostess</p>
                    <ul className= {style.entry_info}>
                        <li>Dedicated 20-30 hr/wk to greeting incoming/departing customers with attentive, professional, and warm customer service</li>
                        <li>Determined seating arrangements for customers effectively for walk-ins and reservations</li>
                    </ul>
                    <h3 className= {style.entry_title}><b>Salute for Style,</b> New Haven, CT</h3>
                    <h3 className= {style.entry_date}>September 2021 - May 2022</h3>
                    <p className = {style.misc}>Remote Operations Intern</p>
                    <p className = {style.misc}>Salute for Style is a non-profit organization dedicated to providing free wardrobe for women veterans, active duty military, and military spouses.</p>
                    <ul className= {style.entry_info}>
                        <li>Executed weekly job interviews</li>
                        <li>Co-headed applicant outreach on Indeed and Handshake and assembled 20+ Indeed listings</li>
                    </ul>
                </div>
                </section>
                <br></br>
                <section>
                <h2 className= {style.section_title}>Coursework</h2>
                <ul className= {style.entry_info}>
                    <li>Data Structures - Present</li>
                    <li>Calculus III - Present</li>
                    <li>AP CSA</li>
                    <li>AP Physics</li>
                    <li>AP Calculus AB/BC</li>
                </ul>
                </section>
                <br></br>
                <section>
                <h2 className= {style.section_title}>Skills</h2>
                <ul className= {style.entry_info}>
                    <li>Java/JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>AutoCAD</li>
                    <li>Public Speaking</li>
                    <li>Teamwork</li>
                </ul>
                </section>
                <br></br>
                <section>
                <h2 className= {style.section_title}>Projects</h2>
                <div>
                    <h3 className= {style.entry_title}><b>Hack4Impact Website</b></h3>
                    <p className= {style.misc}>Small and simple website done with Visual Studio Code.</p>
                </div>
                </section>
            </div>
        </div>
    );
}