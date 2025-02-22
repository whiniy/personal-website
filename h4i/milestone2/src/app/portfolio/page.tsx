import React from "react"
import connectDB from "../../../backend/helpers/db"
import ProjectS from "../../../backend/database/projectSchema"
import ProjectPrev from "@/components/projectPrev/projectPrev"
import style from "../portfolio/page.module.css"
import NavMenu from "@/components/dropDownNav/navMenu"

async function getProjects(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const projects = await ProjectS.find().orFail()
			// send a response as the blogs as the message
	    return projects
	} catch (err) {
	    return null
	}
}

export default async function Project() {
    const projects = await getProjects()
    if (projects == null) {
        return (
            <div>
                <h1>PROJECTS</h1>
                <br></br>
                <h2>Error finding projects!</h2>
            </div>
        )
    } else {
        return (
            <div>
                <div className = {style.navDiv}><NavMenu/></div>
                <h1 className={style.title}>PROJECTS</h1>
                <div className = {style.prevDiv}>
                    {projects.map(project => 
                    <div className = {style.individualPrev}
                    key={project.id}>
                        <ProjectPrev
                            slug={project.slug} 
                            title={project.title}
                            description={project.description}
                        />
                    </div>
                    )}
                </div>
            </div>
        )
    }
}