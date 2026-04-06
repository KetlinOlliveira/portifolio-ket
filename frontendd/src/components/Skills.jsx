import { useState } from 'react'
import { skillsData } from '../data/data'

const filters = ['all', 'frontend', 'backend', 'database', 'tools']

function Skills() {
  const [active, setActive] = useState('all')

  const visible = skillsData.filter(
    (s) => active === 'all' || s.category === active
  )

  return (
    <section id="skills" className="section">
      <p className="section-tag">O que eu uso</p>
      <h2 className="section-title">Skills</h2>

      <div className="skills-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn${active === f ? ' active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="skills-grid-dynamic">
        {visible.map((skill) => (
          <div key={skill.label} className="skill-card">
            <i className={skill.icon}></i>
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
