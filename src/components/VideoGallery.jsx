
import './VideoGallery.scss';

const results = [
  {
    type: 'image',
    title: 'Higienização de sofá',
    description: 'Resultado de uma limpeza profissional.',
    src: '/images/sofaaa.jpeg',
  },
  {
    type: 'video',
    title: 'Limpeza de colchão',
    description: 'Acompanhe o processo de extração.',
    src: '/videos/higienizacaocolchao.mp4',
  },
  {
    type: 'image',
    title: 'Antes e Depois',
    description: 'Cuidado e limpeza para seu sofá.',
    src: '/images/sofa-antesedepois.jpeg',
  },
  {
    type: 'video',
    title: 'Antes e Depois',
    description: 'Veja a diferença.',
    src: '/videos/@r07qxo  - R⤓Download.mp4',
  },
];

function VideoGallery() {
  return (
    <section className="video-gallery" id="videos">
      <div className="video-gallery__container">

        <div className="video-gallery__header">
          <span>Nosso trabalho</span>
          <h2>Resultados que fazem a diferença.</h2>
          <p>
            Confira alguns dos nossos trabalhos e veja
            o cuidado em cada higienização.
          </p>
        </div>

        <div className="video-gallery__grid">
          {results.map((item, index) => (
            <article className="video-gallery__card" key={index}>

              <div className="video-gallery__media">
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    preload="metadata"
                  />
                )}
              </div>

              <div className="video-gallery__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default VideoGallery;
