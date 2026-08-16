import crossfire from "../assets/posters/crossfire.jpg";
import spain from "../assets/posters/spain-world-cup.jpg";
import messi from "../assets/posters/world-cup-messi.jpg";
import thumbnail from "../assets/thumbnails/father-son.jpg";

export const posterDesigns = [
  { title: "Crossfire RMZ 250", category: "Brand Poster", image: crossfire },
  { title: "Spain — World Cup Dreams", category: "Football Poster", image: spain },
  { title: "World Cup Final Concept", category: "Football Poster", image: messi },
];

export const thumbnails = [
  { title: "Father & Son Thumbnail", category: "Thumbnail Design", image: thumbnail },
];

export const galleryItems = [
  ...posterDesigns.map((item) => ({ ...item, type: "Posters" })),
  ...thumbnails.map((item) => ({ ...item, type: "Thumbnails" })),
  { title: "Instagram Clone", category: "UI/UX Practice", type: "UI/UX", placeholder: "IG" },
  { title: "Khalti App Clone", category: "UI/UX Practice", type: "UI/UX", placeholder: "K" },
  { title: "Canadian Brand Posters", category: "Branding", type: "Branding", placeholder: "BK" },
];
