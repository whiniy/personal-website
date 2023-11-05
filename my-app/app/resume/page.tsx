import Link from "next/link";
import style from "./page.module.css";

export default function Resume() {
    return (
      // replace everything in between the <header> & <header /> tags
      // with your resume code from your earlier milestones
      <header>
        <main>
        <Link id="downloadPDF" href="resume.pdf" download>Download Resume</Link>
        <div className ="resume">
            <section className ="section">
            <h2 className ="section-title">Education</h2>
            <div className ="entry">
                <h3 className ="entry-title"><b>California Polytechnic State University,</b> San Luis Obispo, CA</h3>
                <h3 className ="entry-title">September 2023 - Present</h3>
                <p className ="entry-info">• 1st year Computer Science Undergraduate</p>
                <p className ="entry-info">• Courses: Data Structures, Calculus III</p>
            </div>
            <div className ="entry">
                <h3 className ="entry-title"><b>Mark Keppel High School,</b> Alhambra, CA</h3>
                <h3 className ="entry-title">August 2019 - May 2023</h3>
                <p className ="entry-info">• Cumulative GPA: 4.13</p>
                <p className ="entry-info">• Courses: AP CSA, AP Physics I, AP Calculus AB & BC, AP Chemistry</p>
            </div>
            </section>
            <section className ="section">
            <h2 className ="section-title">Experience</h2>
            <div className ="entry">
                <h3 className ="entry-title"><b>Tomomi AYCE Sushi Restaurant,</b> Alhambra, CA</h3>
                <h3 className ="entry-title">June 2023 - September 2023</h3>
                <p className ="entry-info">Hostess</p>
                <p className ="entry-info">• Dedicated 20-30 hr/wk to greeting incoming/departing customers with attentive, professional, and warm customer service</p>
                <p className ="entry-info">• Determined seating arrangements for customers effectively for walk-ins and reservations</p>
                <h3 className ="entry-title"><b>Salute for Style,</b> New Haven, CT</h3>
                <h3 className ="entry-title">September 2021 - May 2022</h3>
                <p className ="entry-info">Remote Operations Intern</p>
                <p className ="entry-info">Salute for Style is a non-profit organization dedicated to providing free wardrobe for women veterans, active duty military, and military spouses.</p>
                <p className ="entry-info">• Executed weekly job interviews</p>
                <p className ="entry-info">• Co-headed applicant outreach on Indeed and Handshake and assembled 20+ Indeed listings</p>
            </div>
            </section>
            <section className ="section">
            <h2 className ="section-title">Coursework</h2>
            <ul className ="course-list">
                <li>Data Structures - Present</li>
                <li>Calculus III - Present</li>
                <li>AP CSA</li>
                <li>AP Physics</li>
                <li>AP Calculus AB/BC</li>
            </ul>
            </section>
            <section className ="section">
            <h2 className ="section-title">Skills</h2>
            <ul className ="skill-list">
                <li>Java/JavaScript</li>
                <li>HTML/CSS</li>
                <li>AutoCAD</li>
                <li>Public Speaking</li>
                <li>Teamwork</li>
            </ul>
            </section>
            <section className ="section">
            <h2 className ="section-title">Projects</h2>
            <div className ="entry">
                <h3 className ="entry-title">Hack4Impact Website</h3>
                <p className ="entry-info">Small and simple website done with Visual Studio Code</p>
            </div>
            </section>
        </div>
        </main>
      </header>
    );
}
  
  