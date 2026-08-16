import SectionTitle from "./SectionTitle";

const categories = [
  ["Brand Posters", "Poster designs created for Canadian brands."],
  ["Crossfire Bike Posters", "Promotional bike posters connected to Crossfire in Nepal."],
  ["School & College Posters", "Promotional and announcement visuals for schools and colleges."],
  ["Education Consultancy", "Promotional work for education consultancies, including Quality Education-related designs."],
  ["Political Campaign Design", "A Ghanti / Rastriya Swatantra Party poster presented strictly as a design project."],
];

export default function GraphicDesign() {
  return (
    <section className="section" id="designs">
      <div className="shell">
        <div className="design-intro reveal">
          <SectionTitle eyebrow="Graphic Design" title="Visual work built to stop the scroll." />
          <div className="design-stat"><b>6+</b><span>Months of design experience</span></div>
        </div>
        <div className="design-category-grid">
          {categories.map(([title, text], index) => (
            <article key={title} className="design-category reveal">
              <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><i>↗</i>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
