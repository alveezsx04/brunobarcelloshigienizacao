
import { useState } from 'react';
import './Header.scss';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__container">

        <a href="#" className="header__logo" onClick={closeMenu}>
          BRUNO
          <span>BARCELLOS.</span>
        </a>

        <button
          className="header__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`header__nav ${menuOpen ? 'active' : ''}`}>
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#servicos" onClick={closeMenu}>Serviços</a>
          <a href="#videos" onClick={closeMenu}>Resultados</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>


<a
  href="https://wa.me/5511963609062?text=Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!"
  className="header__button"
  target="_blank"
  rel="noopener noreferrer"
  onClick={closeMenu}
>
  Solicitar orçamento
</a>

        </nav>

      </div>
    </header>
  );
}

export default Header;
