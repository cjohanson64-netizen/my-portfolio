import resumeData from "../data/resume";
import siteContent from "../data/siteContent";

export default function ResumePage() {
  const {
    heading,
    intro,
    identity,
    summary,
    skillGroups,
    projects,
    experience,
    education,
  } = resumeData;

  const { profileImage } = siteContent;

  return (
    <section className="page page-resume">
      <div className="resume-panel glass">
        <div className="resume-top">
          <div className="resume-top-copy">
            <div className="section-heading">
              <p className="section-eyebrow">Resume</p>
              <h1>{heading}</h1>
              <p>{intro}</p>
            </div>

            <section className="resume-identity">
              <h2>{identity.name}</h2>
              <p>{identity.location}</p>
              <div className="resume-contact-links">
                <a href={`mailto:${identity.email}`}>{identity.email}</a>
                <span>•</span>
                <a href={`tel:${identity.phone.replace(/[^0-9]/g, "")}`}>
                  {identity.phone}
                </a>
                <span>•</span>
                <a href={identity.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <span>•</span>
                <a href={identity.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </section>

            <div className="resume-actions">
              <button className="button" type="button" onClick={() => window.print()}>
                Print / Save as PDF
              </button>
            </div>
          </div>

          <div className="profile-image-shell resume-profile-shell">
            <img
              className="profile-image"
              src={profileImage.src}
              alt={profileImage.alt}
            />
          </div>
        </div>

        <section className="resume-section">
          <h2>Professional Summary</h2>
          <ul className="resume-list">
            {summary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="resume-section">
          <h2>Instructional Design & Technical Skills</h2>
          <div className="resume-skill-groups">
            {skillGroups.map((group) => (
              <article key={group.title} className="resume-skill-group glass">
                <h3>{group.title}</h3>
                <ul className="resume-skill-list">
                  {group.items.map((item) => (
                    <li key={item} className="resume-skill-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Selected Learning & Technology Projects</h2>
          <div className="resume-entry-list">
            {projects.map((project) => (
              <article key={project.title} className="resume-entry glass">
                <div className="resume-entry-header">
                  <div>
                    <h3>
                      {project.title} — {project.role}
                    </h3>
                  </div>

                  <div className="resume-entry-links">
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    ) : null}
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    ) : null}
                  </div>
                </div>

                <ul className="resume-list">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>
          <div className="resume-entry-list">
            {experience.map((job) => (
              <article key={`${job.title}-${job.dates}`} className="resume-entry glass">
                <div className="resume-entry-header">
                  <div>
                    <h3>{job.title}</h3>
                    <p>
                      {job.organization} — {job.location}
                    </p>
                  </div>
                  <p>{job.dates}</p>
                </div>

                <ul className="resume-list">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <ul className="resume-list">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}