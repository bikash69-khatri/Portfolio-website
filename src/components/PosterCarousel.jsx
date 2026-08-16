import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { posterDesigns } from "../data/designs";

export default function PosterCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(null);

  const next = () => setIndex((i) => (i + 1) % posterDesigns.length);
  const prev = () => setIndex((i) => (i - 1 + posterDesigns.length) % posterDesigns.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4200);
    return () => clearInterval(timer);
  }, [paused]);

  const pointerDown = (e) => { startX.current = e.clientX; };
  const pointerUp = (e) => {
    if (startX.current == null) return;
    const diff = e.clientX - startX.current;
    if (Math.abs(diff) > 45) diff > 0 ? prev() : next();
    startX.current = null;
  };

  return (
    <section className="section carousel-section">
      <div className="shell">
        <div className="carousel-heading">
          <SectionTitle eyebrow="Poster Carousel" title="Selected poster & visual designs." text="Auto-advancing, hover-pausable, swipe-friendly, and designed to keep each artwork’s original composition visible." />
          <div className="carousel-controls">
            <button onClick={prev} aria-label="Previous poster">←</button>
            <span>{String(index + 1).padStart(2, "0")} / {String(posterDesigns.length).padStart(2, "0")}</span>
            <button onClick={next} aria-label="Next poster">→</button>
          </div>
        </div>
        <div
          className="poster-viewport reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={pointerDown}
          onPointerUp={pointerUp}
        >
          <div className="poster-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {posterDesigns.map((poster) => (
              <article className="poster-slide" key={poster.title}>
                <div className="poster-image-shell"><img src={poster.image} alt={poster.title} draggable="false" /></div>
                <div className="poster-caption"><span>{poster.category}</span><h3>{poster.title}</h3><p>Design</p></div>
              </article>
            ))}
          </div>
        </div>
        <div className="carousel-dots">
          {posterDesigns.map((p, i) => <button key={p.title} className={i === index ? "active" : ""} onClick={() => setIndex(i)} aria-label={`Go to ${p.title}`} />)}
        </div>
      </div>
    </section>
  );
}
