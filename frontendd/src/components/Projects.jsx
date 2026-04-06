import { useState, useEffect } from 'react'
import { projectsData } from '../data/data'

function Modal({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0)
  const [fading, setFading] = useState(false)

  // Fecha com ESC
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Bloqueia scroll do body enquanto modal aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'auto' }
  }, [])

  const switchImage = (index) => {
    if (index === activeImg) return
    setFading(true)
    setTimeout(() => {
      setActiveImg(index)
      setFading(false)
    }, 200)
  }

  return (
    <div className="modal-overlay active" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-main-image">
          <img
            src={project.images[activeImg]}
            alt="Imagem do projeto"
            className={fading ? 'img-fade' : ''}
          />
        </div>

        {project.images.length > 1 && (
          <div className="modal-thumbnails">
            {project.images.map((img, i) => (
              <div
                key={i}
                className={`modal-thumb${i === activeImg ? ' active' : ''}`}
                onClick={() => switchImage(i)}
              >
                <img src={img} alt={`Miniatura ${i + 1}`} />
              </div>
            ))}
          </div>
        )}

        <div className="modal-text-content">
          <h3>{project.name}</h3>
          <p>{project.desc}</p>
        </div>

        <div className="modal-actions">
          <button className="btn-outline modal-action-btn" onClick={onClose}>Retornar</button>
          <a href={project.github} className="btn-primary modal-action-btn" target="_blank" rel="noreferrer">
            Acessar Repositório ↗
          </a>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projetos" className="section">
      <p className="section-tag">Meu trabalho</p>
      <h2 className="section-title">Projetos</h2>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="project-card fade-in"
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-thumb">
              <img src={project.thumb} alt={project.name} />
              <div className="project-overlay">Ver mais →</div>
            </div>
            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-stack">
                {project.stack.map((tag) => (
                  <span key={tag} className="stack-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}

export default Projects
