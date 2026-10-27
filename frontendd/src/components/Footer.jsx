import { contactInfo } from '../data/data'

function Footer() {
  return (
    <footer className="footer">
      <p>&lt;ketlin<span>.dev&gt;</span> · Ketlin Oliveira, desenvolvedora full-stack</p>
      <p className="footer-links">
        <a href={contactInfo.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={contactInfo.instagram} target="_blank" rel="noreferrer">Instagram</a>
      </p>
    </footer>
  )
}

export default Footer
