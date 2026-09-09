import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <div className="page projects-page fade-in">
      <div className="page-head">
        <h1>My <span className="gradient-text">Projects</span></h1>
        <p className="lead">
          A collection of full-stack and machine learning projects — click into any of them for the
          full case study: the problem, the approach, the challenges, and the results.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="card project-card">
            <div className="project-emoji">{p.emoji}</div>
            <h3>{p.title}</h3>
            <p>{p.tagline}</p>
            <div className="tag-row">
              {p.stack.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <span className="view-link">View case study →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
