import tablaImg from "@/assets/instruments/tabla.png";
import dholakImg from "@/assets/instruments/dholak.png";
import harmoniumImg from "@/assets/instruments/harmonium.png";
import ukuleleImg from "@/assets/instruments/ukulele.png";
import violinImg from "@/assets/instruments/violin.png";
import fluteImg from "@/assets/instruments/flute.png";
import mandolinImg from "@/assets/instruments/mandolin.png";
import vocalImg from "@/assets/hero/vocal.jpg";

// ── Paste this as your full INSTRUMENTS array in data.ts ──────────────────

export const INSTRUMENTS = [
  {
    name: "Tabla",
    category: "Indian Classical Percussion",
    color: "#F59E0B",
    height: 380,
    curriculum: "Gandharva certified curriculum",
    img: "https://images.unsplash.com/photo-1568219656418-15c329312bf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Piano & Keyboard",
    category: "Western Classical",
    color: "#7C3AED",
    height: 320,
    curriculum: "Trinity certified curriculum",
    img: "https://images.unsplash.com/photo-1632008341003-5c6767c7d237?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Guitar",
    category: "Acoustic & Electric",
    color: "#0D9488",
    height: 420,
    curriculum: "Trinity certified curriculum",
    img: "https://cdn.mos.cms.futurecdn.net/Mt4Uis69VRU6EsBbTdF5Qm-750-80.jpg.webp",
  },
  {
    name: "Dholak",
    category: "Indian Classical Percussion",   // ← was "Indian Folk Percussion"
    color: "#F43F5E",
    height: 280,
    curriculum: null,                           // ← no curriculum text
    img: "https://www.carvedculture.in/cdn/shop/articles/Indian-Dholak_Drum-The-Complete-Guide_68f25b2e-b994-460f-8768-2da4673398ac.jpg?v=1774273778&width=900",
  },
  {
    name: "Harmonium",
    category: "Indian Classical Keys",
    color: "#0EA5E9",
    height: 350,
    curriculum: "Gandharva certified curriculum",
    img: "https://i.ibb.co/rRL7TfkT/harmonium.jpg",
  },
  {
    name: "Vocal",
    category: "Hindustani,Carnatic & Western Singing",
    color: "#65A30D",
    height: 300,
    curriculum: "Gandharva certified curriculum",
    img: vocalImg,
  },
  {
    name: "Mandolin",
    category: "Western Strings",
    color: "#EAB308",
    height: 360,
    curriculum: null,                           // ← no curriculum text for now
    img: "https://www.calmusical.com/wp-content/uploads/2025/02/2100AF-e1741164363242.jpg",
  },
  {
    name: "Violin",
    category: "Hindustani,Carnatic & Western Strings",
    color: "#DB2777",
    height: 400,
    curriculum: null,                           // ← no curriculum text for now
    img: "https://images.unsplash.com/photo-1624367171718-14026220ee35?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Flute",
    category: "Wind",
    color: "#4F46E5",
    height: 290,
    curriculum: null,                           // ← no curriculum text for now
    img: "https://images.unsplash.com/photo-1645772647876-76f184a402a1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sitar",
    category: "Indian Classical Strings",
    color: "#F97316",
    height: 420,
    curriculum: null,
    img: "https://m.media-amazon.com/images/I/51izbO+NA9L._SL1280_.jpg",
  },
  {
    name: "Ukulele",
    category: "Western Strings",
    color: "#22C55E",
    height: 300,
    curriculum: null,
    img: "https://cordobaguitars.com/data/6/0a000415015e69438d167c20c/image/jpeg",
  },
  {
    name: "Veena",
    category: "Carnatic Classical Strings",
    color: "#A855F7",
    height: 430,
    curriculum: null,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Saraswati_veena_%28Indian_long-necked_lute%29.png/1920px-Saraswati_veena_%28Indian_long-necked_lute%29.png",
  },
];
export const TESTIMONIALS = [
  {
    quote: "I am getting classes for classical music here. The atmosphere is very musical. Teacher is well trained and versatile and the owner himself is very kind genuine and visharad in Tabla. Great experience.",
    name: "Ayush Kumar",
    instrument: "Classical Music / Tabla"
  },
  {
    quote: "I started going to this class 2 yeas back and now I have successfully passed my 1st tabla exam. The Sir us very general and gentle and hears The opinions of others before deciding . Thank for teaching me so good.",
    name: "Vivek Kulkarni",
    instrument: "Tabla"
  },
  {
    quote: "It's a great music academy.The the sirs pay ful attention and correct you when required.It is fun and exiting to learn music at this academy.",
    name: "Vishal Gavhane",
    instrument: "Music"
  },
  {
    quote: "Varjay music academy is best for learning singing and Tabla the teacher's vishal sir and arvind sir are exceptionally good at teaching and are masters in their field overall this academy is best",
    name: "Nikita Pawar",
    instrument: "Singing / Tabla"
  },
  {
    quote: "This class is very good for learning tabla and keyboard, also guitar. Overall teaching is good and the sir is very kind.this is a great class for kids to learn instruments.",
    name: "Swapna Gunjal",
    instrument: "Tabla / Keyboard / Guitar"
  },
  {
    quote: "Learning Guitar since last one year. Great faculty and flexibility of timings as well... Overall a great experience ...",
    name: "Rakesh Patil",
    instrument: "Guitar"
  },
  {
    quote: "My kid started going to Varjay music academy since March for keyboard class. The teaching approach is very good, it starts with the basic and progresses as per kids learning capacity. My experience with the academy is very satisfactory.",
    name: "Rutuja Wabgaonkar",
    instrument: "Keyboard"
  },
  {
    quote: "My Son Advait is learning Tabla from Arvind sir and Parth is learning singing from Vishal sir and we are very happy with the teachers.. Highly recommended.... Dedicated teachers",
    name: "Dr. Amit Saxena",
    instrument: "Tabla / Singing"
  },
  {
    quote: "It is a very good music class even shivansh learns a lot of things and also he enjoys it thanks you sir",
    name: "Vijay Shinde",
    instrument: "Music"
  },
  {
    quote: "A talented passionate teacher & motivator.Best wishes Arvind. Rao.",
    name: "AumShreesainam Sainath",
    instrument: "Music"
  }
];

export const GALLERY = [
  "https://varjaymusic.com/wp-content/uploads/2024/07/tabla.jpg",
  "https://varjaymusic.com/wp-content/uploads/2024/05/SRG_1204-copy-scaled-1-1024x576.jpg",
  "https://varjaymusic.com/wp-content/uploads/2024/05/how-to-play-acous123tic-guitar.jpg",
  "https://i.ibb.co/BVZTvSpG/arvind.jpg",
  "https://varjaymusic.com/wp-content/uploads/2025/11/gp17-1024x458.jpg",
  vocalImg,
  "https://images.unsplash.com/photo-1632008341003-5c6767c7d237?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
