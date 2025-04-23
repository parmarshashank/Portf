import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import { useSound } from '../hooks/useSound';

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
}

const ProjectCard = ({ title, description, role, technologies, githubLink, liveLink, image }: ProjectCardProps) => {
  const { play } = useSound('/sounds/arcade-ui-6-229503.mp3', { volume: 0.5 });

  return (
    <div 
      className="project-card"
      onMouseEnter={() => play()}
    >
      <div className="project-card__image-container">
        <Image
          src={image}
          alt={title}
          className="project-card__image"
          width={600}
          height={340}
        />
        <div className="project-card__overlay">
          <div className="project-card__links">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-card__link">
              <FiGithub />
              <span>Source</span>
            </a>
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-card__link">
                <FiExternalLink />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__role">{role}</p>
        <p className="project-card__description">{description}</p>
        <div className="project-card__technologies">
          {technologies.map((tech) => (
            <span key={tech} className="project-card__tech">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "MAA (My Alerting Ally)",
      role: "Full Stack Web Developer",
      description: "A web-based MedTech solution to automate patient medication alerts. Developed secure authentication and implemented a hospital-based authorization system.",
      image: "/images/project1.png",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "Prisma", "PostgreSQL", "TurboRepo"],
      githubLink: "https://github.com/parmarshashank/maa"
    },
    {
      title: "MANSI",
      role: "Backend Developer",
      description: "Mental Assistance and Network for Supportive Interactions - Developed authentication system and secure sign-in pages. Ensured a robust user access flow for this mental health project.",
      image: "/images/project2.png",
      technologies: ["Node.js", "Express.js", "JWT", "WS"],
      githubLink: "https://github.com/Sneha73685/MANSI/tree/backend"
    },
    {
      title: "SangKriti",
      role: "React Developer",
      description: "Developed an interactive React-based UI for an event-driven community website. Integrated dynamic elements to enhance user engagement and accessibility while ensuring seamless data flow.",
      image: "/images/project3.png",
      technologies: ["JavaScript", "React.js", "Tailwind CSS"],
      githubLink: "https://github.com/parmarshashank/sangkriti"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects__header">
        <h2 className="projects__title">FEATURED QUESTS</h2>
        <p className="projects__subtitle">Notable Projects</p>
      </div>
      
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className="projects__achievement">
        <h3 className="projects__achievement-title">Achievements</h3>
        <div className="achievement-card">
          <div className="achievement-card__content">
            <h4>Tech Lead, Vividhata Club</h4>
            <p>Organized online coding contests, designed customized questions, and implemented test cases for automated evaluation. Conducted workshops on Cyber Security and Blockchain. Developed and maintained vividhata.tech.</p>
          </div>
          <div className="achievement-card__content">
            <h4>LeetCode Expert</h4>
            <p>Solved 600+ problems focusing on data structures and algorithms. Currently rated 1750+ in LeetCode contests.</p>
            <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer" className="achievement-card__link">
              <FiExternalLink />
              <span>View Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 