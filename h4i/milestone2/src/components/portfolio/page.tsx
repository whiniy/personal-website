"use client";
import React, { useEffect, useState } from "react";
import style from "./page.module.css";
import ProjectPrev from "@/components/projectPrev/projectPrev";

export default function Portfolio() {
  const [projects, setProjects] = useState<any[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/portfolio");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(true);
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return <div>Failed to load projects.</div>;
  }
  else {
  return (
    <div>
      <h1 className={style.title}>PROJECTS</h1>
      <div className={style.prevDiv}>
        {[0, 1, 2].map((col) => (
          <div key={col} className={style.column}>
            {projects
              .filter((_, index) => index % 3 === col)
              .map((project) => (
                <div className={style.individualPrev} key={project._id}>
                  <ProjectPrev
                    slug={project.slug ?? ""}
                    title={project.title ?? "Untitled"}
                    description={project.description ?? "No description"}
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
   );
   }
}


/*
const Portfolio: React.FC = () => {
   const blogs = getBlogs()
   if (blogs == null) {
      return (
         <div>
            <h1>My Blogs!</h1>
            <br></br>
            <h2>Error finding blogs!</h2>
         </div>
      )
   } else {
      return (
         <div>
             <div className = {style.navDiv}><NavMenu/></div>
             <h1 className={style.title}>My Blogs!</h1>
             <div>
                 {blogs.map((blog: { id: React.Key | null | undefined; slug: string; title: string; date: string; description: string; }) => 
                     <div key={blog.id}>
                         <BlogPrev
                             slug={blog.slug} 
                             title={blog.title}
                             date={blog.date}
                             description={blog.description}
                         />
                     </div>
                 )}
             </div>
         </div>
     )
   }
};

export default Portfolio;
*/