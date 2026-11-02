import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const {
    title,
    category,
    status,
    year,
    tagline,
    shortDescription,
    techStack,
    highlights,
    githubUrl,
    liveUrl,
    caseStudyUrl,
    image,
    alt,
  } = project;

  return (
    <article className="project-card glass">
      <div className="project-card-image-wrap">
        <img className="project-card-image" src={image} alt={alt} />
      </div>

      <div className="project-card-body">
        <div className="project-card-meta">
          <span className="project-card-category">{category}</span>
          <span className="project-card-status">
            {status} {year ? `· ${year}` : ""}
          </span>
        </div>

        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-tagline">{tagline}</p>
        <p className="project-card-description">{shortDescription}</p>

        <ul className="project-card-tech-list">
          {techStack.map((tech) => (
            <li key={tech} className="project-card-tech-item">
              {tech}
            </li>
          ))}
        </ul>

        {highlights?.length > 0 && (
          <ul className="project-card-highlights">
            {highlights.slice(0, 3).map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}

        <div className="project-card-links">
          {caseStudyUrl ? (
            <Link className="button" to={caseStudyUrl}>
              Read Case Study
            </Link>
          ) : null}
          {githubUrl ? (
            <a
              className="button button-secondary"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          ) : null}

          {liveUrl ? (
            <a
              className="button"
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}