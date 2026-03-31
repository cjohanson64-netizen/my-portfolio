import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="featured-projects">
      <div className="section-heading">
        <p className="section-eyebrow">Featured Work</p>
        <h2>Projects that best represent how I think and build</h2>
      </div>

      <div className="project-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}