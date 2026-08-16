import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { galleryItems } from "../data/designs";

const filters = ["All", "Posters", "UI/UX", "Thumbnails", "Branding"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [preview, setPreview] = useState(null);
  const visible = filter === "All" ? galleryItems : galleryItems.filter((item) => item.type === filter);

  return (
    <section className="section gallery-section">
      <div className="shell">
        <SectionTitle eyebrow="Creative Gallery" title="One place for the visual side of my work." />
        <div className="filter-row reveal">
          {filters.map((item) => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}
        </div>
        <div className="gallery-grid">
          {visible.map((item, index) => (
            <button className={`gallery-card g-${index % 5}`} key={`${item.title}-${index}`} onClick={() => item.image && setPreview(item)}>
              {item.image ? <img src={item.image} alt={item.title} /> : <div className={`gallery-placeholder ${item.type?.replaceAll("/", "-").toLowerCase()}`}><b>{item.placeholder}</b><span>{item.type}</span></div>}
              <div className="gallery-overlay"><span>{item.category}</span><strong>{item.title}</strong><i>↗</i></div>
            </button>
          ))}
        </div>
      </div>
      {preview && (
        <div className="lightbox" onClick={() => setPreview(null)}><button onClick={() => setPreview(null)}>×</button><img src={preview.image} alt={preview.title}/><span>{preview.title}</span></div>
      )}
    </section>
  );
}
