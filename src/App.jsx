import './App.css'
import { useState } from 'react'
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
} from 'lucide-react'
import logo from './assets/logo_01_pequeno.png'
import logoPoster from './assets/logo_01.png'
import heroImage from './assets/Foto 27.jpeg'
import destino01 from './assets/Foto 11.jpeg'
import destino02 from './assets/FOTO 21.jpeg'
import destino03 from './assets/Foto 01.jpeg'
import videoAcaraje from './assets/VIDEO.mp4'
import depoimento01 from './assets/depoimentos/depoimento-01.webp'
import depoimento02 from './assets/depoimentos/depoimento-02.webp'
import depoimento03 from './assets/depoimentos/depoimento-03.jpg'
import depoimento04 from './assets/depoimentos/depoimento-04.webp'
import depoimento05 from './assets/depoimentos/depoimento-05.webp'
import depoimento06 from './assets/depoimentos/depoimento-06.webp'
import depoimento07 from './assets/depoimentos/depoimento-07.webp'
import depoimento08 from './assets/depoimentos/depoimento-08.webp'
import galeria29 from './assets/FOTO 29.jpeg'
import galeria30 from './assets/Foto 30.jpeg'
import galeria31 from './assets/Foto 31.jpeg'
import galeria32 from './assets/Foto 32.jpeg'
import galeria33 from './assets/Foto 33.jpeg'
import galeria34 from './assets/Foto 34.jpeg'
import galeria35 from './assets/Foto 35.jpeg'
import galeria37 from './assets/Foto 37.jpeg'
import videoCafeCacau from './assets/VÍDEO 36.mp4'
import videoMirante from './assets/VÍDEO 38.mp4'
import videoTrilha from './assets/VÍDEO 39.mp4'
import {
  brandContent,
  navLinks,
  featuredTrips,
  highlights,
  serviceSteps,
  galleryItems,
  trustItems,
  contactInfo,
} from './data/siteContent'

const tripImages = [destino01, destino02, destino03]
const clientImages = [
  depoimento01,
  depoimento02,
  depoimento03,
  depoimento04,
  depoimento05,
  depoimento06,
  depoimento07,
  depoimento08,
]
const tripAlts = [
  'Praia das Fontes - Ceará: a força das águas doces encontra a imensidão do mar, com bicas que brotam das falésias coloridas.',
  'Vista da janela da aeronave da Azul - Aeroporto de Santos Dumont - Rio de Janeiro - RJ.',
  'Templo de Kom Ombo - Egito.',
]
const galleryMedia = [
  galeria29,
  galeria30,
  galeria31,
  galeria32,
  galeria33,
  galeria34,
  galeria35,
  videoCafeCacau,
  galeria37,
  videoMirante,
  videoTrilha,
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((open) => !open)
  const closeMenu = () => setMenuOpen(false)
  const muteVideo = (video) => {
    if (video) video.muted = true
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
                src={videoAcaraje}
                ref={muteVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={logoPoster}
                className="video-feature__video"
                aria-label="Mulher baiana fazendo acarajé tradicional em Porto Seguro - BA"
              >
                <p>Seu navegador não suporta vídeo.</p>
              </video>
            </div>
            <div className="video-feature__content">
              <span className="eyebrow">Cultura baiana</span>
              <h3>Acarajé feito na hora</h3>
              <p className="video-feature__caption">
                Mulher baiana fazendo acarajé tradicional em Porto Seguro - BA.
              </p>
              <p className="video-feature__text">
                A experiência local faz parte de toda viagem. Conhecer a tradição, o sabor e a
                história por trás de cada prato é o que transforma um destino em memória.
              </p>
            </div>
          </div>
        </section>

        <section id="galeria" className="section">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Destinos reais</span>
            <h2>Lugares que nossos clientes viveram com a Machado Viagens</h2>
            <p>
              Registros de viagens planejadas por nós pelo Brasil, da Serra
              Gaúcha ao litoral baiano, com experiências de cultura,
              gastronomia e natureza.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <article className="trip-card" key={`${item.title}-${index}`}>
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
                  <span className="trip-card__tag">{item.tag}</span>
                </div>

                <div className="trip-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="clientes" className="section section--soft">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Satisfação dos clientes</span>
            <h2>Histórias reais de quem viajou com a gente</h2>
            <p>
              Cada imagem é um registro de experiências vividas pelos nossos clientes em
              destinos especiais ao redor do Brasil e do mundo.
            </p>
          </div>

          <div className="marquee" aria-label="Carrossel de fotos de clientes">
            <div className="marquee__track">
              {clientImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Foto de depoimento de cliente ${index + 1}`}
                  className="marquee__item"
                  loading="lazy"
                />
              ))}
              {clientImages.map((src, index) => (
                <img
                  key={`dup-${index}`}
                  src={src}
                  alt=""
                  className="marquee__item"
                  loading="lazy"
                  aria-hidden="true"
                />
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
                    <span>Instagram/@machado.viagenss</span>
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
                    <span>WhatsApp/+55 11 91955-0417</span>
                  </a>
                </li>
                <li>
                  <Building2 size={22} aria-hidden="true" />
                  <span>CNPJ {contactInfo.cnpj}</span>
                </li>
              </ul>
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
        <p className="site-footer__privacy">{contactInfo.privacyPolicy}</p>
      </footer>

      <a
        className="floating-cta"
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
