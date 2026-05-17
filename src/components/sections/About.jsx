import Reveal from '../animations/Reveal'
import StaggerContainer, { StaggerItem } from '../animations/StaggerContainer'
import { useLanguage } from '../../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const interests = t('about.interests')

  return (
    <section className="section section--tall">
      <Reveal>
        <h2 className="section-title">{t('about.title')}</h2>
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
            {t('about.intro')}
          </p>
          <p className="about-text-body">
            {t('about.body1')}
          </p>
          <p className="about-text-body" style={{ marginBottom: '1.5rem' }}>
            {t('about.body2')}
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
