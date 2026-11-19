
import './Hero.scss';

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__container">

        <div className="hero__content">

          <span className="hero__tag">
            Limpeza profissional de estofados
          </span>

          <h1>
            Seu sofá com cara de <span>novo.</span>
          </h1>

          <p className="hero__description">
            Limpeza e higienização profissional de estofados,
            no conforto da sua casa.
          </p>

          <div className="hero__actions">
            <a href="https://wa.me/5511963609062?text=Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!" className="hero__button">
              Solicitar orçamento
            </a>

            <a href="#videos" className="hero__button hero__button--outline">
              Ver vídeos
            </a>
          </div>

        </div>

        <div className="hero__media">
          <video
            src="/videos/sofa.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />

          <span className="hero__media-label">
            Higienização profissional
          </span>
        </div>

      </div>
    </section>
  );
}

export default Hero;
