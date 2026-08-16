import SectionTitle from "./SectionTitle";
import { uiuxProjects } from "../data/projects";

function DeviceMock({ tone }) {
  return (
    <div className={`device-stage ${tone}`}>
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-ui">
          <div className="phone-top"><span/><i/></div>
          <div className="story-row"><i/><i/><i/><i/></div>
          <div className="phone-card"><b/><span/><span/></div>
          <div className="phone-card small"><b/><span/></div>
        </div>
      </div>
      <div className="ui-chip chip-one">Auto Layout</div>
      <div className="ui-chip chip-two">Components</div>
    </div>
  );
}

export default function UIUXProjects() {
  return (
    <section className="section soft-section" id="uiux">
      <div className="shell">
        <SectionTitle eyebrow="UI/UX Design" title="Interface practice focused on structure, flow, and visual clarity." />
        <div className="uiux-grid">
          {uiuxProjects.map((project) => (
            <article className="uiux-card reveal" key={project.title}>
              <DeviceMock tone={project.tone} />
              <div className="uiux-copy">
                <span className="eyebrow">{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                <button className="disabled-link" title="Add your Figma link later">View Design <span>↗</span></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
