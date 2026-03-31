import siteContent from "../data/siteContent";

export default function AboutPage() {
  const { about, profileImage } = siteContent;

  return (
    <section className="page page-about">
      <div className="about-panel about-layout glass">
        <div className="about-copy-column">
          <div className="section-heading">
            <p className="section-eyebrow">About</p>
            <h1>{about.heading}</h1>
            <p>{about.intro}</p>
          </div>

          <div className="about-copy">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-focus">
            <h2>Current Focus</h2>
            <p>{about.currentFocus}</p>
          </div>
        </div>

        <div className="profile-image-shell about-profile-shell">
          <img
            className="profile-image"
            src={profileImage.src}
            alt={profileImage.alt}
          />
        </div>
      </div>
    </section>
  );
}