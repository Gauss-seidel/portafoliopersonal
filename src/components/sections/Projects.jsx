import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import Reveal from '../animations/Reveal'
import StaggerContainer, { StaggerItem } from '../animations/StaggerContainer'

function ProjectCard({ project, index }) {
  const statusLabel = {
    development: 'En desarrollo',
    completed: 'Completado',
    restricted: 'Acceso restringido',
    internal: 'Solo interno',
  }

  const buttonContent = project.url ? (
    <>
      Explorar
      <svg className="project-btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </>
  ) : (
    statusLabel[project.status]
  )

  return (
    <StaggerItem>
      <motion.article
        className="project-card"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="project-card-image-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="project-card-img"
            loading={index < 3 ? 'eager' : 'lazy'}
          />
          <div className="project-card-overlay" />
        </div>

        <div className="project-card-body">
          <h3 className="project-card-title">
            {project.title}
          </h3>
          <p className="project-card-desc">
            {project.description}
          </p>

          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>

          <div className="project-card-footer">
            <motion.a
              href={project.url || '#'}
              target={project.url ? '_blank' : undefined}
              rel={project.url ? 'noopener noreferrer' : undefined}
              className={`project-btn ${project.url ? 'project-btn--active' : 'project-btn--disabled'}`}
              onClick={(e) => !project.url && e.preventDefault()}
            >
              {buttonContent}
            </motion.a>
          </div>
        </div>
      </motion.article>
    </StaggerItem>
  )
}

export default function Projects() {
  return (
    <section className="section section--tall">
      <Reveal>
        <h2 className="section-title">Mis Proyectos</h2>
        <div className="section-divider" style={{ marginBottom: '1rem' }} />
        <p className="section-desc" style={{ marginBottom: '2.5rem' }}>
          Proyectos personales y profesionales que reflejan mi experiencia en desarrollo web full stack.
        </p>
      </Reveal>

      <StaggerContainer className="projects-grid" stagger={0.08}>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </StaggerContainer>
    </section>
  )
}
