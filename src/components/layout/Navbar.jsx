import { NavLink } from "react-router-dom";
import siteContent from "../../data/siteContent";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Resume", to: "/resume" },
  { label: "Projects", to: "/projects" },
];

export default function Navbar() {
  const { contact } = siteContent;

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <div className="site-nav-brand">
          <NavLink to="/" className="site-logo">
            Carl Johanson
          </NavLink>
          <p className="site-tagline">Software Engineer · Systems · Automation</p>
        </div>

        <div className="site-nav-right">
          <div className="site-nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="site-nav-socials">
            <a href={contact.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}