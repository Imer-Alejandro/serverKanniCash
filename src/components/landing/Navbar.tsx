"use client";

import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav id="navbar" className={isScrolled ? "scrolled" : ""}>
      <a href="#" className="nav-logo">
        <div className="nav-logo-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
        Kannicash
      </a>

      <div 
        className={`nav-toggle ${isMenuOpen ? "active" : ""}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><a href="#problema" onClick={() => setIsMenuOpen(false)}>Soluciones</a></li>
        <li><a href="#como-funciona" onClick={() => setIsMenuOpen(false)}>Cómo funciona</a></li>
        <li><a href="#alcance" onClick={() => setIsMenuOpen(false)}>Alcance</a></li>
        <li><a href="#precios" onClick={() => setIsMenuOpen(false)}>Precios</a></li>
      </ul>

      <div className="nav-right">
        <a href="#" className="btn-login">Iniciar sesión</a>
        <a href="#precios" className="nav-cta">Empieza gratis</a>
      </div>
    </nav>
  );
}
