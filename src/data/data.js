import projectimage1 from '../assets/images/project1.svg';
import projectimage2 from '../assets/images/project2.svg';
import projectimage3 from '../assets/images/project3.svg';

const projectsData = [
  {
    img: projectimage1,
    techStack: 'HTML CSS JAVASCRIPT',
    title: 'ChertNodes',
    description: 'Minecraft servers hosting',
    live: true,
    cached: true,
  },
  {
    img: projectimage2,
    techStack: 'React Express Node.js HTML CSS',
    title: 'ProtectX',
    description: 'Discord anti-crash bot',
    live: true,
    cached: false,
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
