import { useState } from 'react'
import { skillCategories, skillsData } from '../data/data'

function Skills() {
  const [active, setActive] = useState('all')

  const visible = skillsData.filter(
    (s) => active === 'all' || s.category === active
  )

  return (
    <section id="skills" className="section">
      <p className="section-tag">O que eu uso</p>
      <h2 className="section-title">Skills</h2>

      <div className="skills-filters" role="group" aria-label="Filtrar skills por categoria">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn${active === cat.id ? ' active' : ''}`}
            onClick={() => setActive(cat.id)}
            aria-pressed={active === cat.id}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="skills-grid-dynamic">
        {visible.map((skill) => (
          <div key={skill.label} className={`skill-card${skill.learning ? ' learning' : ''}`}>
            {skill.icon
              ? <i className={skill.icon} aria-hidden="true"></i>
              : <span className="skill-short" aria-hidden="true">{skill.short}</span>}
            <span>{skill.label}</span>
            {skill.learning && <span className="skill-badge">estudando</span>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
