import './App.css'
import { useEffect, useRef, useState } from 'react'
import {
  MapPin,
  Clock,
  Users,
  Mail,
  Camera,
  Phone,
  Building2,
  Menu,
  X,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import logo from './assets/logo_01_pequeno.png'
import logoPoster from './assets/logo_01.png'
import heroImage from './assets/Foto 27.jpeg'
import destino01 from './assets/Foto 11.jpeg'
import destino02 from './assets/FOTO 21.jpeg'
import { galleryMedia, featuredVideoMedia } from './data/galleryMedia'
import {
  brandContent,
  navLinks,
  featuredTrips,
  highlights,
  serviceSteps,
  aboutContent,
  testimonials,
  featuredVideos,
  galleryItems,
  trustItems,
  contactInfo,
} from './data/siteContent'

const tripImages = [destino01, destino02]
const tripAlts = [
  'Praia das Fontes - Ceará: a força das águas doces encontra a imensidão do mar, com bicas que brotam das falésias coloridas.',
  'Vista da janela da aeronave da Azul - Aeroporto de Santos Dumont - Rio de Janeiro - RJ.',
]
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showFloatingCta, setShowFloatingCta] = useState(false)
  const [videoIndex] = useState(() =>
    Math.floor(Math.random() * featuredVideos.length)
  )
  const galleryRef = useRef(null)
  const heroCtaRef = useRef(null)
  const contactCtaRef = useRef(null)

  useEffect(() => {
    const targets = [heroCtaRef.current, contactCtaRef.current].filter(Boolean)
    const visible = new Set()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.add(entry.target)
        } else {
          visible.delete(entry.target)
        }
      })
      setShowFloatingCta(visible.size === 0)
    })
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => setMenuOpen((open) => !open)
  const closeMenu = () => setMenuOpen(false)
  const muteVideo = (video) => {
    if (video) video.muted = true
  }
  const scrollGallery = (direction) => {
    galleryRef.current?.scrollBy({
      left: direction * galleryRef.current.clientWidth * 0.8,
      behavior: 'smooth',
    })
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="#top" aria-label={brandContent.name}>
            <img src={logo} alt={`Logo ${brandContent.name}`} />
          </a>

          <button
            className="menu-toggle"
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav
            id="main-menu"
            className={`main-nav${menuOpen ? ' main-nav--open' : ''}`}
            aria-label="Navegação principal"
          >
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
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
                ref={heroCtaRef}
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
                alt="Praia de Itacarézinho - Itacaré - Bahia."
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
                  <img src={tripImages[index]} alt={tripAlts[index]} />
                </div>

                <div className="trip-card__body">
                  <span className="trip-card__tag">{trip.tag}</span>
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

        <section id="sobre" className="section">
          <div className="section-heading">
            <span className="section-heading__eyebrow">{aboutContent.eyebrow}</span>
            <h2>{aboutContent.title}</h2>
          </div>

          <div className="about-text">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <strong>{aboutContent.signature}</strong>
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

        <section id="experiencias" className="section section--soft">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Cultura e experiências</span>
            <h2>Momentos que fazem parte da viagem</h2>
            <p>
              Além dos destinos, valorizamos vivências locais: sabores, tradições e
              encontros que transformam qualquer roteiro em uma história inesquecível.
            </p>
          </div>

          <div className="video-feature">
            <div className="video-feature__media">
              <video
                key={videoIndex}
                src={featuredVideoMedia[videoIndex]}
                ref={muteVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={logoPoster}
                className="video-feature__video"
                aria-label={featuredVideos[videoIndex].caption}
              >
                <p>Seu navegador não suporta vídeo.</p>
              </video>
            </div>
            <div className="video-feature__content">
              <span className="eyebrow">{featuredVideos[videoIndex].eyebrow}</span>
              <h3>{featuredVideos[videoIndex].title}</h3>
              <p className="video-feature__caption">
                {featuredVideos[videoIndex].caption}
              </p>
              <p className="video-feature__text">
                {featuredVideos[videoIndex].text}
              </p>
            </div>
          </div>
        </section>

        <section id="galeria" className="section">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Destinos reais</span>
            <h2>Lugares que nossos clientes viveram com a Machado Viagens</h2>
            <p>
              Registros de viagens planejadas por nós pelo Brasil e pelo
              mundo, do Egito à Serra Gaúcha, com experiências de cultura,
              gastronomia e natureza.
            </p>
          </div>

          <div className="gallery-carousel__wrap">
            <div className="gallery-carousel" ref={galleryRef}>
              {galleryItems.map((item, index) => (
                <article
                  className="trip-card gallery-card"
                  key={`${item.title}-${index}`}
                >
                  <div className="trip-card__media">
                    {item.type === 'video' ? (
                      <video
                        src={galleryMedia[index]}
                        ref={muteVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        aria-label={item.description}
                      />
                    ) : (
                      <img
                        src={galleryMedia[index]}
                        alt={item.description}
                        loading="lazy"
                      />
                    )}
                  </div>

                  <div className="trip-card__body">
                    <span className="trip-card__tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="gallery-carousel__nav">
              <button
                type="button"
                className="gallery-carousel__btn"
                onClick={() => scrollGallery(-1)}
                aria-label="Ver destinos anteriores"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="gallery-carousel__btn"
                onClick={() => scrollGallery(1)}
                aria-label="Ver próximos destinos"
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        <section id="clientes" className="section section--soft">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Satisfação dos clientes</span>
            <h2>Histórias reais de quem viajou com a gente</h2>
            <p>
              Depoimentos de clientes que viveram experiências em destinos
              especiais pelo Brasil e pelo mundo.
            </p>
          </div>

          <div className="marquee" aria-label="Carrossel de depoimentos de clientes">
            <div className="marquee__track">
              {testimonials.map((item) => (
                <article className="quote-card" key={item.name}>
                  <div className="quote-card__stars" aria-label="Avaliação 5 de 5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="quote-card__text">{item.text}</p>
                  <footer className="quote-card__footer">
                    <strong>{item.name}</strong>
                    <span>{item.date}</span>
                  </footer>
                </article>
              ))}
              {testimonials.map((item) => (
                <article className="quote-card" key={`dup-${item.name}`} aria-hidden="true">
                  <div className="quote-card__stars">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="quote-card__text">{item.text}</p>
                  <footer className="quote-card__footer">
                    <strong>{item.name}</strong>
                    <span>{item.date}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section">
          <div className="cta-box">
            <div>
              <span className="section-heading__eyebrow">Contato</span>
              <h2>Pronto para começar a planejar sua próxima viagem?</h2>
              <p>{contactInfo.whatsappText}</p>

              <ul className="contact-list" aria-label="Informações de contato">
                <li>
                  <MapPin size={22} aria-hidden="true" />
                  <span>{contactInfo.location}</span>
                </li>
                <li>
                  <Clock size={22} aria-hidden="true" />
                  <span>{contactInfo.hours}</span>
                </li>
                <li>
                  <Users size={22} aria-hidden="true" />
                  <span>Responsáveis: {contactInfo.owners.join(' e ')}</span>
                </li>
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="contact-link"
                  >
                    <Mail size={22} aria-hidden="true" />
                    <span>{contactInfo.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={contactInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <Camera size={22} aria-hidden="true" />
                    <span>Instagram @machado.viagenss</span>
                  </a>
                </li>
                <li>
                  <a
                    href={contactInfo.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <Phone size={22} aria-hidden="true" />
                    <span>WhatsApp +55 11 91955-0417</span>
                  </a>
                </li>
                <li>
                  <Building2 size={22} aria-hidden="true" />
                  <span>CNPJ {contactInfo.cnpj}</span>
                </li>
              </ul>
            </div>

            <a
              ref={contactCtaRef}
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
        <p className="site-footer__privacy">{contactInfo.privacyPolicy}</p>
      </footer>

      <a
        className={`floating-cta${showFloatingCta ? ' floating-cta--visible' : ''}`}
        href={brandContent.primaryCta.href}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <Phone size={20} aria-hidden="true" />
        <span>Fale conosco</span>
      </a>
    </div>
  )
}

export default App
