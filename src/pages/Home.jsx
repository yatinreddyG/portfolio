import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./Home.css";

function Home() {
  const featured = projects.slice(0, 3);
  const [photoOpen, setPhotoOpen] = useState(false);

  useEffect(() => {
    if (!photoOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setPhotoOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [photoOpen]);

  return (
    <div className="page home">
      <section className="hero fade-in">
        <div className="hero-text">
          <span className="kicker">// portfolio</span>
          <h1>
            Hi, I'm <span className="gradient-text">Yatin Reddy</span>
          </h1>
          <p className="hero-sub">
            Computer Science Engineering student with hands-on experience building full-stack and
            AI-driven applications using Java, Python, JavaScript, React, Spring Boot, and Flask. I
            enjoy taking a problem from idea to a working, deployed application — resume analysis,
            medical imaging, health prediction — backed by a strong foundation in DSA, DBMS, and
            problem solving. Passionate about building reliable software and continuously growing my
            technical skills.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">View my projects</Link>
            <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
          </div>
        </div>

        <div className="hero-photo">
          <button
            type="button"
            className="hero-photo-btn"
            onClick={() => setPhotoOpen(true)}
            aria-label="View full-size photo"
          >
            <img src="/portrait.webp" alt="Yatin Reddy" />
          </button>
        </div>
      </section>

      {photoOpen && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setPhotoOpen(false)}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close"
            onClick={() => setPhotoOpen(false)}
          >
            ✕
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src="/portrait.webp" alt="Yatin Reddy" />
          </figure>
        </div>
      )}

      <section className="section highlights">
        <div className="card highlight">
          <h3>3</h3>
          <p>Full-stack & ML projects shipped end to end</p>
        </div>
        <div className="card highlight">
          <h3>AI</h3>
          <p>Hands-on with LLM APIs, CNNs, and transfer learning</p>
        </div>
        <div className="card highlight">
          <h3>Java · Python · JS</h3>
          <p>Comfortable across the stack, backend to frontend</p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Featured work</h2>
          <Link to="/projects" className="see-all">See all projects →</Link>
        </div>
        <div className="project-grid">
          {featured.map((p) => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="card project-card fade-in">
              <div className="project-emoji">{p.emoji}</div>
              <h3>{p.title}</h3>
              <p>{p.tagline}</p>
              <div className="tag-row">
                {p.stack.slice(0, 3).map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
