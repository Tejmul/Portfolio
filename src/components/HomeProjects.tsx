"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export const products = [

  {
    title: "Amazon Music Clone",
    link: "music-app-lovat-seven.vercel.app",
    thumbnail: "/courses/amazon.avif",
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
  }


];

function HomeProjects() {
  return <HeroParallax products={products} />;
}

export default HomeProjects;
