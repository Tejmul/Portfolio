"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export const products = [

  {
    title: "Amazon Music Clone",
    link: "music-app-lovat-seven.vercel.app",
    thumbnail: "/courses/Front.png",
  },
  {
    title: "Movie Deck",
    link: "https://tejmul.github.io/Movie-Deck/",
    thumbnail: "/courses/Movie deck.png",
  },
  {
    title: "2048 Game",
    link: "https://tejmul.github.io/2048-game/",
    thumbnail: "/courses/2048.png",
  },
  {
    title: "TIC-TAC-TOE-GAME",
    link: "https://tejmul.github.io/TIC-TAC-TOE/",
    thumbnail: "/courses/tictactoe.jpeg",
  },
  {
    title: "Twitter Clone",
    link: "https://tejmul.github.io/Twitter-Clone/",
    thumbnail: "/courses/twitter.png",
  },
  {
    title: "Pixel Pen",
    link: "https://github.com/Tejmul/pixelpen",
    thumbnail: "/courses/pixelpen.jpeg",
  },
  {
    title: "Amazon Backend",
    link: "amazon-backend-ecru.vercel.app/",
    thumbnail: "/courses/amazon.avif",
  },
  {
    title: "IVF-Calculator",
    link: "https://ivf-calculator-one.vercel.app/",
    thumbnail: "/courses/ivf.jpeg",
  },
  {
    title: "College-Appointment System Server",
    link: "https://github.com/Tejmul/college-appointment-system-server",
    thumbnail: "/courses/appointment.png",
  },
  {
    title: "What-Bytes",
    link: "https://what-bytes-tau.vercel.app/",
    thumbnail: "/courses/What-Bytes.png",
  },
  {
    title: "Hot-News",
    link: "https://hot-news-ashen.vercel.app/",
    thumbnail: "/courses/news.avif",
  },

];

function HomeProjects() {
  return <HeroParallax products={products} />;
}

export default HomeProjects;
