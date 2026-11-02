import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const orderedProjects = [...projects].sort(
    (a, b) => (a.portfolioPriority ?? 99) - (b.portfolioPriority ?? 99)
  );

  return (
    <section className="all-projects">
      <div className="section-heading">
        <p className="section-eyebrow">All Projects</p>
        <h2>Learning-first work, plus the technical systems behind it</h2>
      </div>

      <div className="project-grid">
        {orderedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
