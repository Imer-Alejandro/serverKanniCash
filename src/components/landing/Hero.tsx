"use client";

import React, { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const dashCardRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll < window.innerHeight) {
        if (gridRef.current) gridRef.current.style.transform = `translateY(${scroll * 0.25}px)`;
        if (blobsRef.current) blobsRef.current.style.transform = `translateY(${scroll * 0.4}px)`;
        if (contentRef.current) contentRef.current.style.transform = `translateY(${scroll * 0.1}px)`;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !dashCardRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / 60;
      const dy = (e.clientY - cy) / 60;

      dashCardRef.current.style.transform = `perspective(1500px) rotateY(${dx}deg) rotateX(${-dy}deg) translateX(15%) scale(1.02)`;
      
      const floatingElems = heroRef.current.querySelectorAll(".floating-ui");
      floatingElems.forEach((el, idx) => {
        const speed = (idx + 1) * 15;
        const x = (e.clientX - cx) / speed;
        const y = (e.clientY - cy) / speed;
        (el as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    const handleMouseLeave = () => {
      if (!dashCardRef.current) return;
      dashCardRef.current.style.transform = "perspective(1500px) rotateY(0deg) rotateX(0deg) translateX(15%) scale(1)";
      const floatingElems = heroRef.current?.querySelectorAll(".floating-ui");
      floatingElems?.forEach((el) => {
        (el as HTMLElement).style.transform = `translate(0, 0)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    heroRef.current?.addEventListener("mousemove", handleMouseMove);
    heroRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      heroRef.current?.removeEventListener("mousemove", handleMouseMove);
      heroRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-grid" ref={gridRef}></div>
      <div className="hero-blobs" ref={blobsRef}>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="particle p-1"></div>
      <div className="particle p-2"></div>
      <div className="particle p-3"></div>

      <div className="hero-content" ref={contentRef}>
        <div className="hero-badge reveal visible">
          <span></span> Diseñado para RD 🇩🇴
        </div>
        <h1 className="hero-title reveal visible">
          Gestiona tus préstamos de forma <em>simple y sin errores</em>
        </h1>
        <p className="hero-sub reveal visible">
          La app diseñada para prestamistas informales en República Dominicana. Control total de clientes, cuotas e intereses — todo en tu celular.
        </p>
        <div className="hero-actions reveal visible">
          <a href="#precios" className="btn-primary">
            Empezar gratis
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="#como-funciona" className="btn-ghost">Ver cómo funciona</a>
        </div>
        <div className="hero-trust reveal visible">
          <div className="trust-avatars">
            <span style={{ background: "#e0f2fe", color: "#0369a1", fontSize: "12px", fontWeight: "700" }}>JM</span>
            <span style={{ background: "#dcfce7", color: "#15803d", fontSize: "12px", fontWeight: "700" }}>MR</span>
            <span style={{ background: "#fef9c3", color: "#a16207", fontSize: "12px", fontWeight: "700" }}>PG</span>
          </div>
          <span>+500 prestamistas ya confían en nosotros</span>
        </div>
      </div>

      <div className="hero-visual reveal visible">
        <div className="floating-ui f-pill-1">
          <div className="f-icon">✓</div>
          Préstamo Aprobado
        </div>
        <div className="floating-ui f-pill-2">
          <div className="f-icon">$</div>
          +RD$ 4,500
        </div>
        <div className="floating-ui f-pill-3">
          <div className="f-icon">👤</div>
          Cliente nuevo
        </div>
        <div className="floating-ui f-pill-4">
          <div className="f-icon" style={{ background: '#25d366' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.435 5.634 1.436h.005c6.558 0 11.894-5.335 11.897-11.893 0-3.18-1.238-6.17-3.486-8.418z"/></svg>
          </div>
          WhatsApp enviado
        </div>
        <div className="floating-ui f-card">
          <div className="f-label">Recaudación</div>
          <div className="f-bar"></div>
        </div>

        <div className="phone-mockup" ref={dashCardRef} id="hero-video-container">
          <div className="phone-frame">
            <div className="phone-island"></div>
            <video autoPlay muted loop playsInline poster="/landi/preview.jpeg" className="hero-video">
              <source src="/landi/video_header.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
