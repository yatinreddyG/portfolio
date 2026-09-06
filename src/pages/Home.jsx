import { Link } from "react-router-dom";
import projects from "../data/projects";
import "./Home.css";

function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="page home">
      <section className="hero fade-in">
        <span className="pill">👋 Welcome to my portfolio</span>
        <h1>
          Hi, I'm <span className="gradient-text">Yatin Reddy</span> —
          <br />
          I build AI-powered applications that solve real problems.
        </h1>
        <p className="hero-sub">
          Full-stack developer focused on machine learning and web engineering. I like taking an idea
          from a messy dataset all the way to a working, deployed application — resume analysis,
          medical imaging, health prediction, and more.
        </p>
        <div className="hero-actions">
          <Link to="/projects" className="btn btn-primary">View my projects</Link>
          <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
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
