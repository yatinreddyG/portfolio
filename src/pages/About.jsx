import "./About.css";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "C"],
  },
  {
    title: "Web & App Development",
    skills: ["React.js", "Node.js", "HTML5", "CSS", "Bootstrap", "Spring Boot", "Flask"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "H2", "Apache Tomcat"],
  },
  {
    title: "Core CS",
    skills: ["OOP", "DSA", "DBMS", "Operating Systems", "Computer Networks"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Linux", "AWS", "Google Colab", "Power BI"],
  },
  {
    title: "Cloud & Practices",
    skills: ["AWS Cloud Foundations", "AWS Cloud Operations", "VMware Workstation (basics)", "Agile", "Debugging & Testing"],
  },
];

const certifications = [
  "AWS Academy Graduate — Cloud Foundations (Trained)",
  "AWS Academy Graduate — Cloud Operations (Trained)",
  "NPTEL — Programming in Java (Elite Silver)",
  "NPTEL — Python for Data Science (Elite Silver)",
  "RINEX — Web Development Course and Web Internship",
  "Zscaler Networking Virtual Internship — AICTE EduSkills",
  "JNCIA-Junos (Junos, Associate) — Juniper Networks",
  "Red Hat Training: Getting Started with Linux Fundamentals (RH104 – RHA)",
];

function About() {
  return (
    <div className="page about fade-in">
      <div className="page-head">
        <h1>About <span className="gradient-text">me</span></h1>
        <p className="lead">
          Computer Science Engineering student with hands-on experience building software and web
          applications using Java, Python, JavaScript, React, Spring Boot, Flask, and MySQL.
          I enjoy taking a project from a messy dataset or a blank repo all the way to a working,
          testable, full-stack application — across AI-driven tools, databases, and REST APIs.
        </p>
      </div>

      <section className="section about-grid">
        <div className="card about-card">
          <h3>🎓 Education</h3>
          <p><strong>Bachelor of Technology (B.Tech) — Computer Science and Engineering</strong></p>
          <p>CVR College of Engineering, Hyderabad</p>
          <p>CGPA: 8.20 / 10 · Expected 2027</p>
        </div>
        <div className="card about-card">
          <h3>🎯 What I'm into</h3>
          <p>
            Building reliable full-stack and AI-driven applications — resume analysis, medical
            imaging, and health prediction — with a strong foundation in OOP, DSA, DBMS, operating
            systems, and computer networks. I like debugging real problems until they're actually
            solved, not just working around them.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="card skill-card">
              <h4>{group.title}</h4>
              <div className="tag-row">
                {group.skills.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Certifications & achievements</h2>
        <div className="cert-list">
          {certifications.map((c) => (
            <div key={c} className="card cert-item">{c}</div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
