import "./projects.css";

export default function ProjectCard({ title, image, github }) {
  return (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-image-wrapper">
        <img src={image} alt={title} />
        <div className="project-overlay">
          <span>View on GitHub</span>
        </div>
      </div>

      <div className="project-info">
        <h3>{title}</h3>
      </div>
    </a>
  );
}
