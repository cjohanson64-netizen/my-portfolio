import { Link } from "react-router-dom";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import siteContent from "../data/siteContent";

export default function HomePage() {
  const { hero, homeIntro, strengths, profileImage } = siteContent;

  return (
    <section className="page page-home">
      <div className="hero hero-layout glass">
        <div className="hero-copy">
          <p className="hero-eyebrow">{hero.eyebrow}</p>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>

          <div className="hero-actions">
            <Link className="button" to={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Link>
            <Link className="button button-secondary" to={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="profile-image-shell hero-profile-shell">
          <img
            className="profile-image"
            src={profileImage.src}
            alt={profileImage.alt}
          />
        </div>
      </div>

      <section className="home-intro glass">
        <div className="section-heading">
          <p className="section-eyebrow">Introduction</p>
          <h2>{homeIntro.heading}</h2>
        </div>

        <div className="home-intro-copy">
          {homeIntro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="strengths-section">
        <div className="section-heading">
          <p className="section-eyebrow">Strengths</p>
          <h2>What I bring to software work</h2>
        </div>

        <div className="strengths-grid">
          {strengths.map((strength) => (
            <article key={strength.title} className="strength-card glass">
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </article>
          ))}
        </div>
      </section>

      <FeaturedProjects />
    </section>
  );
}