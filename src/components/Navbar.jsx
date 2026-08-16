import { useEffect, useState } from "react";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["uiux", "UI/UX"],
  ["designs", "Designs"],
  ["contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50%", threshold: [0.15, 0.35, 0.6] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className={`navbar-wrap ${compact ? "compact" : ""}`}>
      <nav className="navbar shell">
        <button className="brand" onClick={() => goTo("home")} aria-label="Go home">
          <span className="brand-mark">BK</span>
          <span className="brand-name">Bikash Khatri</span>
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([id, label]) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => goTo(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          className={`menu-button ${open ? "open" : ""}`}
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
