import SectionTitle from "./SectionTitle";

const services = [
  ["01", "UI/UX Design", "Clean and user-friendly interfaces with strong usability, hierarchy, and flow."],
  ["02", "Graphic Design", "Posters, promotional graphics, social media designs, and visual communication."],
  ["03", "Poster & Thumbnail", "Attention-grabbing visual concepts for brands, organizations, schools, colleges, and digital platforms."],
  ["04", "Frontend Development", "Responsive websites using HTML, CSS, JavaScript, and React."],
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="about-grid reveal">
          <SectionTitle eyebrow="About" title="Creative thinker with a designer’s eye and a builder’s mindset." />
          <div className="about-copy">
            <p>
              I&apos;m Bikash Khatri, a UI/UX designer, graphic designer, and frontend developer. I enjoy creating clean interfaces, promotional designs, posters, thumbnails, and modern websites.
            </p>
            <p>
              I&apos;m currently expanding my frontend development skills through hands-on projects using HTML, CSS, JavaScript, and React.
            </p>
            <div className="experience-note">
              <span>Design</span><b>6+ Months Experience</b>
              <span>Frontend</span><b>3–4 Months Learning & Project Practice</b>
            </div>
          </div>
        </div>

        <div className="subsection-heading reveal">
          <span>What I Do</span>
          <p>Designing useful, modern experiences across screens and visual media.</p>
        </div>
        <div className="service-grid">
          {services.map(([num, title, text]) => (
            <article className="service-card reveal" key={title}>
              <div className="service-top"><span>{num}</span><i>↗</i></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="card-line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
