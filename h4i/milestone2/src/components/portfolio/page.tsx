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
    <div className={style.porfolioContainer}>
      <h1 className={style.title}>PROJECTS</h1>
      <div className={style.prevDiv}>
        {[0, 1, 2, 3].map((col) => (
          <div key={col} className={style.column}>
            {projects
              .filter((_, index) => index % 4 === col)
              .map((project) => (
                <div className={style.individualPrev} key={project._id}>
                  <ProjectPrev
                    slug={project.slug ?? ""}
                    title={project.title ?? "Untitled"}
                    image={project.image ?? "No image"}
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