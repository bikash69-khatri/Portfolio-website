import SectionTitle from "./SectionTitle";

const flow = ["IDEA", "UI/UX", "VISUAL DESIGN", "FRONTEND", "FINAL PRODUCT"];
const steps = [
  ["01", "Understand", "Understand the idea and requirements."],
  ["02", "Explore", "Research references and possible visual directions."],
  ["03", "Design", "Create the UI, visual concept, or graphic design."],
  ["04", "Build", "Convert designs into responsive frontend experiences."],
  ["05", "Refine", "Improve details, responsiveness, and user experience."],
];

export default function Workflow() {
  return (
    <section className="section workflow-section">
      <div className="shell">
        <div className="design-dev reveal">
          <div><span className="eyebrow">Design + Development</span><h2>From idea to interactive experience.</h2><p>I enjoy taking an idea from visual concept to a functional frontend experience.</p></div>
          <div className="flow-path">
            {flow.map((item, index) => <div key={item} className="flow-step"><span>{item}</span>{index < flow.length - 1 && <i>↓</i>}</div>)}
          </div>
        </div>
        <SectionTitle eyebrow="How I Work" title="Simple process. Thoughtful details." />
        <div className="workflow-grid">
          {steps.map(([num, title, text]) => <article className="workflow-card reveal" key={title}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  );
}
