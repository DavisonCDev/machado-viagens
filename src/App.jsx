import './App.css'
import logo from './assets/logo_01_pequeno.png'
import heroImage from './assets/hero_01.jpeg'
import destino01 from './assets/destino_01.jpeg'
import destino02 from './assets/destino_02.jpeg'
import destino03 from './assets/destino_03.jpeg'
import {
  brandContent,
  navLinks,
  featuredTrips,
  highlights,
  serviceSteps,
  trustItems,
  contactInfo,
} from './data/siteContent'

const tripImages = [destino01, destino02, destino03]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="#top" aria-label={brandContent.name}>
            <img src={logo} alt={`Logo ${brandContent.name}`} />
          </a>

          <nav className="main-nav" aria-label="Navegação principal">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="btn btn--primary btn--header"
            href={brandContent.primaryCta.href}
            target="_blank"
            rel="noreferrer"
          >
            {brandContent.primaryCta.label}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero__content">
            <span className="eyebrow">{brandContent.eyebrow}</span>

            <h1>{brandContent.title}</h1>

            {brandContent.description.map((paragraph) => (
              <p key={paragraph} className="hero__text">
                {paragraph}
              </p>
            ))}

            <div className="hero__actions">
              <a
                className="btn btn--primary"
                href={brandContent.primaryCta.href}
                target="_blank"
                rel="noreferrer"
              >
                {brandContent.primaryCta.label}
              </a>

              <a className="btn btn--secondary" href={brandContent.secondaryCta.href}>
                {brandContent.secondaryCta.label}
              </a>
            </div>

            <ul className="hero__list" aria-label="Pilares da marca">
              {trustItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero__visual">
            <div className="hero__image-card">
              <img
                src={heroImage}
                alt="Imagem principal da Machado Viagens"
              />
            </div>

            <div className="hero__floating-card">
              <span className="hero__floating-label">{brandContent.floatingCard.label}</span>
              <strong>{brandContent.floatingCard.title}</strong>
              <p>{brandContent.floatingCard.text}</p>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="trust-strip__inner">
            {trustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section id="destinos" className="section">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Experiências que atendemos</span>
            <h2>Soluções de viagem pensadas para diferentes perfis e necessidades</h2>
            <p>
              Trabalhamos com viagens nacionais e internacionais, sempre com foco em
              praticidade, segurança, organização e atendimento próximo.
            </p>
          </div>

          <div className="trip-grid">
            {featuredTrips.map((trip, index) => (
              <article className="trip-card" key={trip.title}>
                <div className="trip-card__media">
                  <img src={tripImages[index]} alt={trip.title} />
                  <span className="trip-card__tag">{trip.tag}</span>
                </div>

                <div className="trip-card__body">
                  <h3>{trip.title}</h3>
                  <p>{trip.description}</p>
                  <small>{trip.details}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="diferenciais" className="section section--soft">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Por que escolher a Machado Viagens</span>
            <h2>Um atendimento pensado para cuidar da sua viagem do começo ao fim</h2>
            <p>
              Nosso trabalho combina proximidade, personalização e atenção aos detalhes
              para que cada roteiro faça sentido para quem vai viver a experiência.
            </p>
          </div>

          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="atendimento" className="section">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Como funciona</span>
            <h2>Atendimento próximo, claro e cuidadoso em todas as etapas</h2>
            <p>
              Queremos que você tenha segurança para planejar e tranquilidade para viajar,
              com suporte humano e atenção real ao que importa para a sua experiência.
            </p>
          </div>

          <div className="testimonial-grid">
            {serviceSteps.map((item) => (
              <article className="testimonial-card" key={item.title}>
                <p className="testimonial-card__quote">{item.description}</p>
                <strong>{item.title}</strong>
                <span>{brandContent.name}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="section">
          <div className="cta-box">
            <div>
              <span className="section-heading__eyebrow">Contato</span>
              <h2>Pronto para começar a planejar sua próxima viagem?</h2>
              <p>{contactInfo.whatsappText}</p>
              <p>
                <strong>Atendimento:</strong> {contactInfo.location}
                <br />
                <strong>Responsáveis:</strong> {contactInfo.owners.join(' e ')}
                <br />
                <strong>WhatsApp:</strong> +55 11 91955-0417
              </p>
            </div>

            <a
              className="btn btn--primary"
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              {contactInfo.whatsappLabel}
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{contactInfo.footerText}</p>
      </footer>
    </div>
  )
}

export default App