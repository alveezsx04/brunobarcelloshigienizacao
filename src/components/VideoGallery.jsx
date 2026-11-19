
import './VideoGallery.scss';

const videos = [
  {
    title: 'Extração profunda em sofá',
    description: 'A sujeira sai na primeira passada.',
    src: '/videos/sofa.mp4',
  },
  {
    title: 'Higienização de colchão',
    description: 'Mais cuidado, limpeza e conforto para suas noites.',
    src: '/videos/colchao.mp4',
  },
];

function VideoGallery() {
  return (
    <section className="video-gallery" id="videos">
      <div className="video-gallery__container">

        <div className="video-gallery__header">
          <h2>Veja a limpeza acontecendo</h2>
          <p>Vídeos reais dos nossos serviços.</p>
        </div>

        <div className="video-gallery__grid">
          {videos.map((video, index) => (
            <article
              className="video-gallery__card"
              key={index}
            >
              <div className="video-gallery__media">
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>

              <div className="video-gallery__content">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default VideoGallery;