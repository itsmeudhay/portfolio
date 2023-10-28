import uiUxOne from "./assets/web-project-one.png";
import uiUxTwo from "./assets/web-project-two.png";
import uiUxThree from "./assets/web-project-three.png";
import webOne from "./assets/web-project-four.png";
import webTwo from "./assets/web-project-five.png";
import webThree from "./assets/web-project-six.png";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  href: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "uiUx",
    img: uiUxOne,
    title: "Interior Design Website",
    href: "https://itsmeudhay.github.io/interiorplants/",
  },
  {
    id: 1,
    category: "uiUx",
    img: uiUxTwo,
    title: "AI Article Summary Website",
    href: "https://itsmeudhay.github.io/aiarticlesummarizer/",
  },
  {
    id: 2,
    category: "uiUx",
    img: uiUxThree,
    title: "Bank Design Website",
    href: "https://itsmeudhay.github.io/bank/",
  },
  {
    id: 3,
    category: "web",
    img: webOne,
    title: "Restaurant Design Website",
    href: "https://itsmeudhay.github.io/restaurant/",
  },
  {
    id: 4,
    category: "web",
    img: webTwo,
    title: "Dashboard Design Website",
    href: "https://itsmeudhay.github.io/dashboard/",
  },
  {
    id: 5,
    category: "web",
    img: webThree,
    title: "Tindog Landing Page",
    href: "https://itsmeudhay.github.io/tindog/",
  },
];
