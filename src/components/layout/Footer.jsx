import siteContent from "../../data/siteContent";

export default function Footer() {
  const { contact } = siteContent;

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-copy">
          <h2 className="site-footer-name">Carl Biggers-Johanson</h2>
          <p className="site-footer-description">
            Educator and learning experience developer creating curriculum,
            interactive learning tools, and thoughtful software.
          </p>
        </div>

        <div className="site-footer-links">
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={contact.email}>Email</a>
        </div>
      </div>
    </footer>
  );
}