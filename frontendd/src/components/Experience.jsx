import { useEffect, useRef } from 'react'
import { experienceData } from '../data/data'

function TimelineItem({ item }) {
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
    <div ref={ref} className={`timeline-item ${item.side} reveal`}>
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <span className="tl-period">{item.period}</span>
        <h3 className="tl-title">{item.title}</h3>
        <ul className="tl-points">
          {item.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
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
        {experienceData.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Experience
