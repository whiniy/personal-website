import style from "../app/portfolio/portfolio.module.css"
import Link from "next/link";
import Image from "next/image";

type Project = {
    title: string;
    image: string;
    description: string;
    link: string;
};

const ProjectText: 
    React.FC<Project> = ({
        title,
        image,
        description,
        link,
    }) => (
        <main>
            <h1 className = {style.page_title}>Projects!</h1>
            <div className = {style.project}>
                <img className = {style.project_details} src={link}/>
            </div>
            <div className = {style.project_details}>
                <p className = {style.project_name}>{title}</p>
                <p className = {style.project_description}>{description}</p>
                <Link href={link} id="learnMore">Learn More</Link>
            </div>
        </main>
    );

export default ProjectText