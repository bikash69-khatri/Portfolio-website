import SectionTitle from "./SectionTitle";
import { skillGroups } from "../data/skills";

const marks = {
  HTML: "</>", CSS: "#", JS: "JS", React: "⚛", PS: "Ps", Figma: "Fg"
};

export default function Skills() {
  return (
    <section className="section soft-section" id="skills">
      <div className="shell">
        <SectionTitle eyebrow="Skills" title="Tools I use to turn ideas into digital work." text="No fake percentages — just the technologies and tools I actively use and learn." />
        <div className="skills-layout">
          {skillGroups.map((group) => (
            <div className="skill-group reveal" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.items.map((skill) => (
                  <div className="skill-card" key={skill}>
                    <span className="skill-icon">{marks[skill]}</span>
                    <strong>{skill}</strong>
                    <i>↗</i>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
