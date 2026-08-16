import { useEffect, useState } from "react";

const roles = [
  "UI/UX Designer",
  "Graphic Designer",
  "Poster & Thumbnail Designer",
  "Frontend Developer",
];

export default function Hero() {
  const [role, setRole] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setRole((r) => (r + 1) % roles.length), 2400);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero section" id="home">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />
      <div className="shell hero-grid">
        <div className="hero-copy reveal visible">
          <span className="eyebrow">Hello, I’m Bikash</span>
          <h1>
            Designing <span>clarity.</span>
            <br />Building <span>experiences.</span>
          </h1>
          <div className="role-line">
            <span className="role-dot" />
            <strong key={roles[role]}>{roles[role]}</strong>
          </div>
          <p className="hero-intro">
            I create engaging designs, intuitive user experiences, and modern frontend websites by combining creativity with technology.
          </p>
          <div className="hero-actions">
            <button className="button primary" onClick={() => scrollTo("projects")}>View My Work <span>↗</span></button>
            <button className="button ghost" onClick={() => scrollTo("contact")}>Let&apos;s Connect</button>
          </div>
          <div className="hero-meta">
            <div><b>6+ Months</b><span>Design Experience</span></div>
            <div><b>3–4 Months</b><span>Frontend Learning</span></div>
            <div><b>2 Live</b><span>Frontend Projects</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Creative design and development preview">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="visual-core">
            <div className="core-logo">BK</div>
            <span>DESIGN × CODE</span>
          </div>
          <div className="float-card card-ui">
            <span className="tiny-label">FIGMA</span>
            <div className="mock-browser"><i/><i/><i/></div>
            <div className="mock-layout"><span/><span/><span/></div>
          </div>
          <div className="float-card card-code">
            <span className="tiny-label">REACT</span>
            <code><em>const</em> idea = <strong>design</strong> + code;</code>
            <code><em>return</em> &lt;Experience /&gt;;</code>
          </div>
          <div className="float-card card-poster">
            <span>POSTER</span>
            <b>VISUAL<br/>IMPACT</b>
            <i>↗</i>
          </div>
        </div>
      </div>
      <div className="scroll-cue"><span /> Scroll to explore</div>
    </section>
  );
}
