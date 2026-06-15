import './App.css'
import logo from './assets/logo_01_pequeno.png'
import generic from './assets/generic_01.png'
import {
  navLinks,
  featuredTrips,
  highlights,
  testimonials,
  trustItems,
} from './data/siteContent'

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="#top" aria-label="Machado Viagens">
            <img src={logo} alt="Logo Machado Viagens" />
          </a>

          <nav className="main-nav" aria-label="Navegação principal">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="btn btn--primary btn--header" href="#contato">
            Planejar viagem
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero__content">
            <span className="eyebrow">Agência de viagens com curadoria premium</span>

            <h1>
              Viagens pensadas com elegância, segurança e atenção aos detalhes.
            </h1>

            <p className="hero__text">
              A nova presença digital da Machado Viagens deve comunicar confiança,
              estética refinada e atendimento consultivo. Nesta primeira versão,
              usamos a imagem `generic` como placeholder para definir composição,
              respiro e hierarquia visual.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="#destinos">
                Ver inspirações
              </a>
              <a className="btn btn--secondary" href="#diferenciais">
                Entender a proposta
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
                src={generic}
                alt="Imagem placeholder usada para definir posições e composição visual"
              />
            </div>

            <div className="hero__floating-card">
              <span className="hero__floating-label">Posicionamento inicial</span>
              <strong>Marca premium com tom consultivo</strong>
              <p>
                Priorize clareza, confiança e uma apresentação visual sofisticada.
              </p>
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
            <span className="section-heading__eyebrow">Inspiração inicial</span>
            <h2>Blocos para destacar experiências e estilos de viagem</h2>
            <p>
              Aqui você não está vendendo pacote de forma genérica. Está apresentando
              possibilidades com curadoria, posicionamento e valor percebido.
            </p>
          </div>

          <div className="trip-grid">
            {featuredTrips.map((trip) => (
              <article className="trip-card" key={trip.title}>
                <div className="trip-card__media">
                  <img
                    src={generic}
                    alt={`Imagem placeholder para ${trip.title}`}
                  />
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
            <span className="section-heading__eyebrow">Base da experiência</span>
            <h2>O site precisa parecer uma agência confiável antes de parecer uma vitrine</h2>
            <p>
              Nesta etapa, o foco é mostrar posicionamento, sofisticação e organização
              da informação.
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

        <section id="depoimentos" className="section">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Prova social</span>
            <h2>Área pronta para depoimentos reais</h2>
            <p>
              Por enquanto, mantenha placeholders. Quando for publicar, substitua por
              depoimentos autênticos e verificáveis.
            </p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.author + item.context}>
                <p className="testimonial-card__quote">“{item.quote}”</p>
                <strong>{item.author}</strong>
                <span>{item.context}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="section">
          <div className="cta-box">
            <div>
              <span className="section-heading__eyebrow">Próxima ação</span>
              <h2>Pronto para transformar esta base em uma home comercial?</h2>
              <p>
                Depois que esta etapa estiver aprovada visualmente, o próximo passo é
                adicionar formulário de orçamento, CTA de WhatsApp, páginas internas e
                refinamentos de conversão.
              </p>
            </div>

            <a className="btn btn--primary" href="#top">
              Validar esta primeira versão
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Machado Viagens • atendimento consultivo • viagens com identidade</p>
      </footer>
    </div>
  )
}

export default App