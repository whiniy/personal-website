import connectDB from "../../helpers/db"
import style from "./portfolio.module.css"
import Project from "../../database/projectSchema"
import React from "react";
import Link from "next/link";
import Portfolio from "./portfolio";
import ProjectText from "@/components/project";

async function getProjects() {
    await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const projects = await Project.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return projects
	} catch (err) {
	    return null
	}
}


export default async function Home() {
    const p = await getProjects()
    if (p) {
        return (
            <div>
                <main>
                    <h2 className = {style.page_title}>Projects!</h2>
                    <ol>
                        {p.map((ProjectText:any) => (
                            <li key={ProjectText.id}>{ProjectText.title}</li>
                        ))} 
                    </ol>
                    
                    {/*{p.map(project => 
                        <ProjectText

                        title={project.title}
                        image={project.image}
                        description={project.description}
                        link={project.link}
                        />
                    )}*/}
                </main>
            </div>
        )
    }
    else {
        return (
            <div>
                <main>
                <h3 className = {style.page_title}>No projects found!</h3>
                </main>
            </div>

        )
    }

}

