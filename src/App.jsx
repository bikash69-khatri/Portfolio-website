import { useEffect } from "react";
import movieHuntPreview from "./assets/projects/moviehunt-preview.png";
import learnWebPreview from "./assets/projects/learnweb-preview.png";

const services = [
  { type: "uiux", title: "UI/UX Design", text: "Made Instagram UI and Khalti app clones while practicing layout, flow, and visual consistency." },
  { type: "graphic", title: "Graphic Design", text: "Created brand visuals for a Canada-based brand, Crossfire Nepal, and Ghanti Party." },
  { type: "poster", title: "Poster & Thumbnail", text: "Designed posters and thumbnails for a consultancy, a podcast, brands, and digital content." },
  { type: "frontend", title: "Frontend Development", text: "Still learning as a beginner, while building simple projects with HTML, CSS, JS, and React." },
];

const skills = [
  { short: "</>", name: "HTML", x: 96, y: 20, color: "#ff765f" },
  { short: "#", name: "CSS", x: 176, y: 20, color: "#75adff" },
  { short: "JS", name: "JS", x: 256, y: 20, color: "#f1d94e" },
  { short: "⚛", name: "React", x: 126, y: 82, color: "#61d7ff" },
  { short: "Ps", name: "PS", x: 206, y: 82, color: "#31b9ff" },
  { short: "Fg", name: "Figma", x: 286, y: 82, color: "#ff64c6" },
];

function ServiceIcon({ type }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (type === "uiux") {
    return (
      <svg {...common}>
        <rect x="4.5" y="3.5" width="15" height="17" rx="2.5" />
        <path d="M8 8h8M8 12h5M8 16h3" />
        <circle cx="16.5" cy="15.5" r="1.8" />
      </svg>
    );
  }

  if (type === "graphic") {
    return (
      <svg {...common}>
        <path d="M12 3.5 20.5 12 12 20.5 3.5 12 12 3.5Z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3.5V9M20.5 12H15M12 20.5V15M3.5 12H9" />
      </svg>
    );
  }

  if (type === "poster") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="2.5" />
        <circle cx="9" cy="9" r="1.5" />
        <path d="m6.5 17 4.2-4.4 2.8 2.7 1.8-1.8 2.2 3.5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4M13.5 5 10.5 19" />
    </svg>
  );
}

const projects = [
  {
    name: "MovieHunt",
    label: "Featured Project",
    description: "A movie discovery website where users can explore, search, and view information about movies.",
    url: "https://bikash69-khatri.github.io/MovieHunt/",
    address: "bikash69-khatri.github.io/MovieHunt",
    image: movieHuntPreview,
    alt: "Screenshot of the MovieHunt project homepage",
    imagePosition: "50% 14%",
  },
  {
    name: "LearnWeb",
    label: "Featured Project",
    description: "A beginner-friendly HTML and CSS learning platform with explanations, code examples, and learning content.",
    url: "https://bikash69-khatri.github.io/LearnWeb/",
    address: "bikash69-khatri.github.io/LearnWeb",
    image: learnWebPreview,
    alt: "Screenshot of the LearnWeb project landing page",
    imagePosition: "12% 12%",
  },
];

function ProjectPreview({ project }) {
  return (
    <div className="browser-mock screenshot-browser">
      <div className="browser-bar">
        <div className="dots"><i></i><i></i><i></i></div>
        <div className="address">{project.address}</div>
      </div>
      <div className="screenshot-page">
        <img
          src={project.image}
          alt={project.alt}
          style={{ "--preview-position": project.imagePosition }}
        />
      </div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("in"));
    }, { threshold: 0.14 });
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="page">
      <header className="topbar">
        <nav className="nav shell-wide">
          <a className="logo" href="#home" aria-label="Bikash Khatri home"><span>B</span><i>K</i></a>
          <div className="navlinks">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#lab">Lab</a>
          </div>
        </nav>
      </header>

      <main className="shell" id="home">
        <section className="hero reveal">
          <div className="hero-top">
            <div className="avatar-wrap">
              <div className="avatar-glow"></div>
              <div className="avatar">🧑🏻‍💻</div>
            </div>
            <div className="hero-line">
              <div className="hello">Hello! I Am <b>Bikash Khatri</b></div>
              <div className="curve"></div>
              <p>A Designer who</p>
              <h1>
                Turns an idea
                <br />into <span className="typing-word" aria-label="visuals">visuals...</span>
              </h1>
              <small>Because thoughtful details create memorable experiences.</small>
            </div>
          </div>

          <div className="intro" id="about">
            <h2>I'm a UI/UX Designer.<span className="cursor"></span></h2>
            <p className="status">Currently, I'm learning and building frontend projects with <b>React.</b></p>
            <p className="bio">I'm Bikash Khatri, a UI/UX and graphic designer with 6+ months of design experience. I create clean interfaces, promotional designs, posters, thumbnails, and modern websites while growing my frontend skills through hands-on projects.</p>
          </div>
        </section>

        <section className="experience reveal">
          <h2>Work Experience</h2>
          <div className="service-grid">
            {services.map((s, i) => (
              <article className="service-card" key={s.title} style={{"--i": i}}>
                <div className="service-icon"><ServiceIcon type={s.type} /></div>
                <div className="service-copy">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-orbit reveal" id="lab">
          <div className="skills-copy">
            <p>I'm currently building a <b>design + frontend</b> skill set</p>
            <small>that turns ideas into usable, visually strong digital experiences.</small>
          </div>

          <div className="skill-cloud">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-node"
                title={skill.name}
                style={{ left: `${skill.x}px`, top: `${skill.y}px` }}
              >
                <div className="skill-badge" style={{ "--skill-color": skill.color }}>{skill.short}</div>
                <span className="skill-label">{skill.name}</span>
              </div>
            ))}
            <svg className="skill-lines" viewBox="0 0 420 430" aria-hidden="true">
              {skills.map((skill) => {
                const x = skill.x;
                const y = skill.y + 28;
                return <path key={skill.name} d={`M ${x} ${y} C ${x} 192, 210 244, 210 338`} />;
              })}
            </svg>
            <div className="core">
              <div className="core-glow"></div>
              <div className="core-circle"><span>BK</span></div>
              <div className="orbit orbit1"></div>
              <div className="orbit orbit2"></div>
              <div className="orbit orbit3"></div>
              <i className="orb-dot d1"></i><i className="orb-dot d2"></i><i className="orb-dot d3"></i><i className="orb-dot d4"></i>
            </div>
          </div>
        </section>

        <section className="projects">
          {projects.map((p, i) => (
            <article className={`project reveal ${i % 2 ? "reverse" : ""}`} key={p.name}>
              <div className="project-copy">
                <span>{p.label}</span>
                <h2>{p.name}</h2>
                <div className="project-description">{p.description}</div>
                <div className="project-tools"><i>✣</i><i>⚛</i></div>
              </div>
              <a className="project-visual" href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.name}`}>
                <div className="purple-halo"></div>
                <ProjectPreview project={p} />
              </a>
            </article>
          ))}
        </section>

        <section className="contact reveal" id="contact">
          <h2>Contact</h2>
          <p>I'm currently looking to join a cross-functional team that values improving people's lives through accessible design, or to collaborate on a creative project.</p>
          <a className="email" href="mailto:vkas4real@gmail.com">vkas4real@gmail.com</a>
          <div className="socials">
            <a href="https://www.instagram.com/bikasnull?igsh=a2lmM2NtNTRpc3A1" target="_blank" rel="noreferrer">◎</a>
            <a href="https://www.facebook.com/profile.php?id=61580368121093" target="_blank" rel="noreferrer">f</a>
            <a href="mailto:vkas4real@gmail.com">G</a>
          </div>
        </section>
      </main>
    </div>
  );
}
