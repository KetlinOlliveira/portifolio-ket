import { useEffect, useRef } from 'react'
import { experienceData } from '../data/data'

function TimelineItem({ item, side }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`timeline-item ${side} reveal${item.inProgress ? ' in-progress' : ''}`}>
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <span className="tl-period">{item.period}</span>
        <h3 className="tl-title">{item.title}</h3>
        {item.org && <p className="tl-org">{item.org}</p>}
        <ul className="tl-points">
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        {item.tags && (
          <div className="project-stack">
            {item.tags.map((tag) => (
              <span key={tag} className="stack-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section id="experiencia" className="section">
      <p className="section-tag">Minha trajetória</p>
      <h2 className="section-title">Experiência & Cursos</h2>

      <div className="timeline">
        <div className="timeline-line"></div>
        {experienceData.map((item, i) => (
          <TimelineItem key={item.id} item={item} side={i % 2 === 0 ? 'left' : 'right'} />
        ))}
      </div>
    </section>
  )
}

export default Experience
