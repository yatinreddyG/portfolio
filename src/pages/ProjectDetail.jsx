import { Link, useParams, Navigate } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="page project-detail fade-in">
      <Link to="/projects" className="back-link">← All projects</Link>

      <div className="detail-head">
        <div className="project-emoji" style={{ background: project.color + "22", color: project.color }}>
          {project.emoji}
        </div>
        <h1>{project.title}</h1>
        <p className="lead">{project.tagline}</p>

        <div className="tag-row">
          {project.stack.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <div className="detail-actions">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Live demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
              View on GitHub
            </a>
          )}
        </div>
      </div>

      {project.summary && (
        <section className="section">
          <h2>Overview</h2>
          <p>{project.summary}</p>
        </section>
      )}

      {project.problem && (
        <section className="section">
          <h2>The problem</h2>
          <p>{project.problem}</p>
        </section>
      )}

      {project.approach && (
        <section className="section">
          <h2>Approach</h2>
          <p>{project.approach}</p>
        </section>
      )}

      {project.challenges?.length > 0 && (
        <section className="section">
          <h2>Challenges & solutions</h2>
          <ul className="challenge-list">
            {project.challenges.map((c, i) => (
              <li key={i} className="card">{c}</li>
            ))}
          </ul>
        </section>
      )}

      {project.results && (
        <section className="section">
          <h2>Results</h2>
          <p>{project.results}</p>
        </section>
      )}

      {project.screenshots?.length > 0 && (
        <section className="section">
          <h2>Screenshots</h2>
          <div className="screenshot-grid">
            {project.screenshots.map((src, i) => (
              <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ProjectDetail;
