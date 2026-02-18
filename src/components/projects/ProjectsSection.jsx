import ProjectCard from "./ProjectCard";
import "./projects.css";

export default function ProjectsSection() {

  const projects = [
    {
      title: "AI Finance Tracker",
      image: "/project1.png",
      github: "https://github.com/yourusername/ai-finance-tracker"
    },
    {
      title: "Contactless Vending Machine",
      image: "/project2.jpg",
      github: "https://github.com/yourusername/contactless-vending-machine"
    },
    {
      title: "BethelAG website",
      image: "/project3.png",
      github: "https://github.com/yourusername/bethelag"
    },
    {
      title: "Simple Calculator using Tkinter",
      image: "/project4.jpg",
      github: "https://github.com/yourusername/simple-calculator"
    }
  ];

  return (
    <section id="projects-section" className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
