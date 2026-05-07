import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import Reveal from '../animations/Reveal'
import StaggerContainer, { StaggerItem } from '../animations/StaggerContainer'

export default function Skills() {
  return (
    <section className="section section--default">
      <Reveal>
        <h2 className="section-title">Habilidades T&eacute;cnicas</h2>
        <div className="section-divider" style={{ marginBottom: '2.5rem' }} />
      </Reveal>

      <StaggerContainer className="skills-grid" stagger={0.15}>
        {skillCategories.map((cat) => (
          <StaggerItem key={cat.id}>
            <motion.div
              className="skill-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-card-accent" />

              <div className="skill-card-icon">{cat.icon}</div>
              <h3 className="skill-card-title">{cat.title}</h3>

              <ul className="skill-list">
                {cat.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    <svg className="skill-check" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
