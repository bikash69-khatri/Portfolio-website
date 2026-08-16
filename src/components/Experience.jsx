import SectionTitle from "./SectionTitle";

const timeline = [
  ["Graphic Design", "6+ Months", "Poster, promotional, education, brand, and visual design work."],
  ["UI/UX Design", "Practice & Personal Projects", "Instagram clone, Khalti clone, and other interface concepts."],
  ["Frontend Development", "3–4 Months Learning & Practice", "MovieHunt and LearnWeb — a learning and project journey, not professional employment."],
];

export default function Experience() {
  return (
    <section className="section soft-section">
      <div className="shell">
        <SectionTitle eyebrow="Journey" title="Experience timeline." />
        <div className="timeline">
          {timeline.map(([title, period, text], index) => (
            <article className="timeline-item reveal" key={title}>
              <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div><span className="eyebrow">{period}</span><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
