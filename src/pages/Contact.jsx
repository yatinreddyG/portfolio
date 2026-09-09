import "./Contact.css";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "yatinreddy20@gmail.com",
    href: "mailto:yatinreddy20@gmail.com",
    tag: "@",
  },
  {
    label: "GitHub",
    value: "github.com/yatinreddyG",
    href: "https://github.com/yatinreddyG",
    tag: "</>",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yatin-reddy-gujjula",
    href: "https://www.linkedin.com/in/yatin-reddy-gujjula-b327b2368/",
    tag: "in",
  },
  {
    label: "Phone",
    value: "+91 939-058-7894",
    href: "tel:+919390587894",
    tag: "call",
  },
];

function Contact() {
  return (
    <div className="page contact-page fade-in">
      <div className="page-head">
        <h1>Let's <span className="gradient-text">connect</span></h1>
        <p className="lead">
          Whether you want to talk about a project, an opportunity, or just say hi — I'd love to hear
          from you.
        </p>
      </div>

      <div className="contact-grid">
        {CONTACT_LINKS.map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="card contact-card">
            <span className="contact-emoji">{c.tag}</span>
            <div>
              <h4>{c.label}</h4>
              <p>{c.value}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="resume-cta card">
        <div>
          <h3>Want the full picture?</h3>
          <p>Download my resume for a complete summary of my experience and skills.</p>
        </div>
        <a href="/resume.pdf" download className="btn btn-primary">Download resume</a>
      </div>
    </div>
  );
}

export default Contact;
