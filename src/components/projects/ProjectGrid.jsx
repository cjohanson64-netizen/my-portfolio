import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <section className="all-projects">
      <div className="section-heading">
        <p className="section-eyebrow">All Projects</p>
        <h2>A growing collection of educational, technical, and experimental work</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}