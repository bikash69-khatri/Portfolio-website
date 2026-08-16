import SectionTitle from "./SectionTitle";
import { developmentProjects } from "../data/projects";

function ProjectMock({ tone, title }) {
  return (
    <div className={`project-mock ${tone}`}>
      <div className="project-browser"><span/><span/><span/></div>
      {tone === "movie" ? (
        <div className="movie-layout">
          <b>MovieHunt</b><div className="search-pill" />
          <div className="poster-row"><i/><i/><i/><i/></div>
        </div>
      ) : (
        <div className="learn-layout">
          <div className="learn-side"><span/><span/><span/><span/></div>
          <div className="learn-main"><b>Learn HTML & CSS</b><p>Build the web from zero.</p><code>&lt;h1&gt;Hello&lt;/h1&gt;</code></div>
        </div>
      )}
      <span className="mock-title">{title}</span>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section className="section" id="projects">
      <div className="shell">
        <SectionTitle eyebrow="Selected Work" title="Featured development projects." text="Real frontend projects built as part of my learning and project practice." />
        <div className="project-stack">
          {developmentProjects.map((project, index) => (
            <article className="project-card reveal" key={project.title}>
              <div className="project-image-wrap">
                <ProjectMock tone={project.tone} title={project.title} />
                <a className="project-overlay" href={project.liveUrl} target="_blank" rel="noreferrer">
                  <span>View Live Project</span><b>↗</b>
                </a>
              </div>
              <div className="project-info">
                <span className="project-number">0{index + 1}</span>
                <div>
                  <span className="eyebrow">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tech.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-link">View Live Project <span>→</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
