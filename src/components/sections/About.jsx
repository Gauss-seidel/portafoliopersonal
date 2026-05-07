import Reveal from '../animations/Reveal'
import StaggerContainer, { StaggerItem } from '../animations/StaggerContainer'

const interests = [
  'Desarrollo Web', 'React & Frontend', 'Enseñanza',
  'Proyectos Integradores', 'Diseño Intuitivo', 'Optimización',
]

export default function About() {
  return (
    <section className="section section--tall">
      <Reveal>
        <h2 className="section-title">Sobre m&iacute;</h2>
        <div className="section-divider" style={{ marginBottom: '2.5rem' }} />
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-image-wrapper" x={-30}>
          <div className="about-image-inner">
            <div className="about-image-glow" />
            <img
              src="/images/photo.jpg"
              alt="Willian N&uacute;&ntilde;ez"
              className="about-image"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal className="about-text">
          <p className="about-text-intro">
            Hola, soy <strong className="about-text-em">Willian N&uacute;&ntilde;ez</strong>,{' '}
            desarrollador web apasionado por crear interfaces claras, funcionales y con atenci&oacute;n al detalle.
          </p>
          <p className="about-text-body">
            Me especializo en construir experiencias frontend modernas con{' '}
            <span className="about-text-highlight">React y JavaScript</span>,
            combinando c&oacute;digo limpio con dise&ntilde;o intuitivo. Mi enfoque est&aacute; en la{' '}
            <span className="about-text-highlight">performance, accesibilidad y experiencia de usuario</span>.
          </p>
          <p className="about-text-body" style={{ marginBottom: '1.5rem' }}>
            Cuando no estoy programando, disfruto ense&ntilde;ar, experimentar con nuevas tecnolog&iacute;as
            o explorar t&eacute;cnicas avanzadas de desarrollo web.
          </p>

          <StaggerContainer stagger={0.08}>
            <div className="interest-tags">
              {interests.map((item) => (
                <StaggerItem key={item}>
                  <span className="interest-tag">{item}</span>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </Reveal>
      </div>
    </section>
  )
}
