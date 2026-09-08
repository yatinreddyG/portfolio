import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./Home.css";

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="page home">
      <section className="hero fade-in">
        <div className="hero-text">
          <span className="pill">👋 Welcome to my portfolio</span>
          <h1>
            Hi, I'm <span className="gradient-text">Yatin Reddy</span>
          </h1>
          <p className="hero-sub">
            I'm a final-year CS student who likes turning half-formed ideas into things people can
            actually click around and use. Most of my projects start with a messy dataset and end up
            as a live app — resume scoring, MRI-based diagnosis, health prediction, whatever the
            problem calls for. Still learning as I go, but I ship.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">View my projects</Link>
            <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
          </div>
        </div>

        <div className="hero-photo">
          {/* Swap this placeholder for <img src="/portrait.jpg" alt="Yatin Reddy" /> once the photo is added */}
          <div className="hero-photo-placeholder">GY</div>
        </div>
      </section>

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
              <div className="project-emoji" style={{ background: p.color + "22", color: p.color }}>
                {p.emoji}
              </div>
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
