import ProjectGrid from "../components/projects/ProjectGrid";

export default function ProjectsPage() {
  return (
    <section className="page page-projects">
      <div className="section-heading">
        <p className="section-eyebrow">Portfolio</p>
        <h1>Learning experiences, curriculum tools, and thoughtful software</h1>
        <p>
          My projects begin with real problems and explore how clear content,
          meaningful practice, and supportive technology can improve an experience.
          SightLine is my flagship example of instructional design and software
          development working together.
        </p>
        <p>
          Alongside learning-focused projects, I include technical work that shows
          how I organize complex systems and build usable applications.
        </p>
      </div>

      <ProjectGrid />
    </section>
  );
}
