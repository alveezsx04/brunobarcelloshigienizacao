
import './Services.scss';

import {
  FaCouch,
  FaBed,
  FaChair,
  FaCarSide,
} from 'react-icons/fa';

const services = [
  {
    number: '1',
    title: 'Sofás',
    description:
      'Remoção de manchas, ácaros e odores com extração profunda.',
    icon: FaCouch,
  },
  {
    number: '2',
    title: 'Colchões',
    description:
      'Higienização antialérgica para um sono mais saudável.',
    icon: FaBed,
  },
  {
    number: '3',
    title: 'Cadeiras & poltronas',
    description:
      'Tecidos, couro e veludo tratados com cuidado.',
    icon: FaChair,
  },
  {
    number: '4',
    title: 'Bancos automotivos',
    description:
      'Interior do carro limpo e cheiroso de novo.',
    icon: FaCarSide,
  },
];

function Services() {
  return (
    <section className="services" id="servicos">
      <div className="services__container">

        <div className="services__header">
          <h2>O que limpamos</h2>
        </div>

        <div className="services__grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="services__card"
                key={service.number}
              >
                <div className="services__icon">
                  <Icon />
                </div>

                <span className="services__number">
                  {service.number}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Services;
