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

  const close = () => setIsMenuOpen(false);

  return (
    <nav id="navbar" className={isScrolled ? "scrolled" : ""}>

      {/* ── LOGO: Kanni + cash italic blue ── */}
      <a href="/" className="nav-logo" style={{ gap: "0", letterSpacing: "-0.04em" }}>
        <span style={{ fontWeight: 800, color: "var(--gray-900)" }}>Kanni</span>
        <em style={{
          fontFamily: "var(--font-instrument)",
          fontStyle: "italic",
          fontWeight: 400,
          color: "var(--primary)",
        }}>cash</em>
      </a>

      {/* ── MOBILE TOGGLE ── */}
      <div
        className={`nav-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* ── NAV LINKS ── */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li><a href="/" onClick={close}>Inicio</a></li>
        <li><a href="/demostracion" onClick={close}>Demostración</a></li>
        <li><a href="/soporte" onClick={close}>contactos</a></li>
        <li><a href="/precios"   onClick={close}>Precios</a></li>
        <li><a href="https://blog.kannicash.com" target="_blank" rel="noopener noreferrer" onClick={close}>Blog</a></li>
        {/* Mobile-only CTA buttons */}
        <li className="mobile-only">
          <a href="https://portal.kannicash.com" target="_blank" rel="noopener noreferrer" className="nav-btn-login" onClick={close}>Iniciar sesión</a>
        </li>
        <li className="mobile-only">
          <a href="https://portal.kannicash.com" target="_blank" rel="noopener noreferrer" className="nav-btn-cta" onClick={close}>Empezar gratis</a>
        </li>
      </ul>

      {/* ── DESKTOP RIGHT BUTTONS ── */}
      <div className="nav-right">
        <a href="https://portal.kannicash.com" target="_blank" rel="noopener noreferrer" className="nav-btn-login">Iniciar sesión</a>
        <a href="https://portal.kannicash.com" target="_blank" rel="noopener noreferrer" className="nav-btn-cta">Empezar gratis →</a>
      </div>

    </nav>
  );
}
