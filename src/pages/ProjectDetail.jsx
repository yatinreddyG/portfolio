import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import projects from "../data/projects";
import "./ProjectDetail.css";

// Screenshots can be plain URL strings or { src, caption } objects — this
// normalizes either shape so the gallery/lightbox never has to care which.
function normalizeShot(shot, i, title) {
  if (typeof shot === "string") {
    return { src: shot, caption: "", alt: `${title} screenshot ${i + 1}` };
  }
  return {
    src: shot.src,
    caption: shot.caption || "",
    alt: shot.alt || shot.caption || `${title} screenshot ${i + 1}`,
  };
}

function ScreenshotGallery({ title, screenshots }) {
  const [openIndex, setOpenIndex] = useState(null);
  const shots = screenshots.map((s, i) => normalizeShot(s, i, title));

  useEffect(() => {
    if (openIndex === null) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((idx) => (idx + 1) % shots.length);
      if (e.key === "ArrowLeft") setOpenIndex((idx) => (idx - 1 + shots.length) % shots.length);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openIndex, shots.length]);

  return (
    <>
      <div className="screenshot-grid">
        {shots.map((shot, i) => (
          <button
            key={shot.src + i}
            type="button"
            className="screenshot-thumb"
            onClick={() => setOpenIndex(i)}
            aria-label={`Open ${shot.alt} full size`}
          >
            <img src={shot.src} alt={shot.alt} loading="lazy" />
            {shot.caption && <span className="screenshot-caption">{shot.caption}</span>}
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
          >
            ✕
          </button>

          {shots.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              aria-label="Previous screenshot"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((openIndex - 1 + shots.length) % shots.length);
              }}
            >
              ‹
            </button>
          )}

          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={shots[openIndex].src} alt={shots[openIndex].alt} />
            {shots[openIndex].caption && (
              <figcaption>{shots[openIndex].caption}</figcaption>
            )}
          </figure>

          {shots.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              aria-label="Next screenshot"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((openIndex + 1) % shots.length);
              }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="page project-detail fade-in">
      <Link to="/projects" className="back-link">← All projects</Link>

      <div className="detail-head">
        <div className="project-emoji">{project.emoji}</div>
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
          <ScreenshotGallery title={project.title} screenshots={project.screenshots} />
        </section>
      )}
    </div>
  );
}

export default ProjectDetail;
