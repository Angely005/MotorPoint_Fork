import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { Car, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* Marca */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <Car />
              </div>
              <span className="footer-logo-text">
                Motor<span className="highlight">Point</span>
              </span>
            </Link>

            <p className="footer-description">
              Tu tienda de confianza para repuestos y accesorios. Calidad garantizada desde 2020.
            </p>

            <div className="footer-social">
              <a href="#" className="footer-social-link"><Facebook /></a>
              <a href="#" className="footer-social-link"><Instagram /></a>
            </div>
          </div>

          {/* Productos */}
          <div className="footer-section">
            <h3 className="footer-section-title">Productos</h3>
            <ul className="footer-section-list">
              <li><a className="footer-section-link" href="#">Repuestos Autos</a></li>
              <li><a className="footer-section-link" href="#">Repuestos Motos</a></li>
              <li><a className="footer-section-link" href="#">Catálogo</a></li>
              <li><a className="footer-section-link" href="#">Ofertas</a></li>
            </ul>
          </div>

          {/* Compañia */}
          <div className="footer-section">
            <h3 className="footer-section-title">Empresa</h3>
            <ul className="footer-section-list">
              <li><a href="#" className="footer-section-link">Nosotros</a></li>
              <li><a href="#" className="footer-section-link">Tiendas</a></li>
              <li><a href="#" className="footer-section-link">Contacto</a></li>
            </ul>
          </div>

          {/* Soporte */}
          <div className="footer-section">
            <h3 className="footer-section-title">Soporte</h3>
            <ul className="footer-section-list">
              <li><a href="#" className="footer-section-link">Envíos</a></li>
              <li><a href="#" className="footer-section-link">Garantías</a></li>
              <li><a href="#" className="footer-section-link">Términos</a></li>
              <li><a href="#" className="footer-section-link">Privacidad</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2025 MotorPoint. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
