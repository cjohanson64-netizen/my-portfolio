import ProjectGrid from "../components/projects/ProjectGrid";

export default function ProjectsPage() {
  return (
    <section className="page page-projects">
      <div className="section-heading">
        <p className="section-eyebrow">Projects</p>

        <h1>
          Software projects focused on structure, reliability, and real-world workflows
        </h1>

        <p>
          These projects reflect my approach to engineering: building systems that
          translate complex workflows into clear, maintainable, and user-facing
          applications. My work spans frontend interfaces, backend services, and
          the architecture that connects them.
        </p>

        <p>
          Many of these projects originate from real problems and evolve through
          iteration, debugging, and continuous refinement to improve usability,
          performance, and system reliability.
        </p>
      </div>

      <ProjectGrid />
    </section>
  );
}