import "./Footer.css";

const SOCIALS = [
  { label: "Email", href: "mailto:yatinreddy20@gmail.com" },
  { label: "GitHub", href: "https://github.com/yatinreddyG" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yatin-reddy-gujjula-b327b2368/" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">Gujjula Yatin Reddy</p>
        <div className="footer-links">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer;
