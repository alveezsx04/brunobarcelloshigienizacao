
import './Contact.scss';

import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="contact__container">

        <h2>
          Pronto para renovar
          <br />
          seus estofados?
        </h2>

        <p>
          Solicite seu orçamento e acompanhe nosso trabalho.
        </p>

        <div className="contact__actions">

          <a
            href="https://wa.me/11963609062?text=Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__button"
          >
            <FaWhatsapp />
            Falar no WhatsApp
          </a>

          <a
            href="https://www.instagram.com/barcellos._higienizacao?avpt=cngwNTBvM3g2emJp"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__button contact__button--instagram"
          >
            <FaInstagram />
            Siga nossa pagina no instagram
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;
