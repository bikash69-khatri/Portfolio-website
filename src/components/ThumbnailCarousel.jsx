import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { thumbnails } from "../data/designs";

export default function ThumbnailCarousel() {
  const [lightbox, setLightbox] = useState(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => {
    if (thumbnails.length > 1) setIndex((i) => (i + 1) % thumbnails.length);
  };
  const prev = () => {
    if (thumbnails.length > 1) setIndex((i) => (i - 1 + thumbnails.length) % thumbnails.length);
  };

  useEffect(() => {
    if (paused || thumbnails.length <= 1) return;
    const timer = setInterval(next, 3800);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="section soft-section">
      <div className="shell">
        <div className="carousel-heading">
          <SectionTitle eyebrow="Thumbnail Design" title="Visual hooks for digital content." text="Auto-scroll is ready for multiple thumbnails. Hover pauses it, controls move manually, and clicking opens a fullscreen preview." />
          <div className="carousel-controls compact-controls">
            <button onClick={prev} aria-label="Previous thumbnail">←</button>
            <button onClick={next} aria-label="Next thumbnail">→</button>
          </div>
        </div>
        <div className="thumb-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="thumb-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {thumbnails.map((thumb) => (
              <div className="thumb-slide" key={thumb.title}>
                <button className="thumb-card" onClick={() => setLightbox(thumb)}>
                  <img src={thumb.image} alt={thumb.title} />
                  <div><span>{thumb.category}</span><strong>{thumb.title}</strong><i>↗</i></div>
                </button>
                <div className="thumb-placeholder"><span>+</span><b>Add more thumbnails</b><small>Drop future work into assets/thumbnails and add it to designs.js</small></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {lightbox && (
        <div className="lightbox" role="dialog" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} aria-label="Close preview">×</button>
          <img src={lightbox.image} alt={lightbox.title} onClick={(e) => e.stopPropagation()} />
          <span>{lightbox.title}</span>
        </div>
      )}
    </section>
  );
}
