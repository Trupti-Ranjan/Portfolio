import projectimage1 from '../assets/images/Project One.webp'
import projectimage2 from '../assets/images/project-portofolio.webp';
import projectimage3 from '../assets/images/project3.svg';

const projectsData = [
  {
    img: projectimage1,
    techStack: 'JAVASCRIPT REACT GSAP ',
    title: 'Trinacria',
    description: 'Modern UI with GSAP',
    live: true,
    cached: false,
    livelink: "https://animated-trnacria.vercel.app/",
    cachedlink: ""
  },
  {
    img: projectimage2,
    techStack: 'HTML TAILWIND REACT LENIS',
    title: 'Portfolio',
    description: 'My work, skills & journey',
    live: true,
    cached: false,
    livelink: "https://your-portfolio-link.com"
  },
  {
    img: projectimage3,
    techStack: 'CSS Express Node.js',
    title: 'Kahoot Answers Viewer',
    description: 'Get answers to your kahoot quiz',
    live: true,
    cached: false,
  },
];

export default projectsData;
