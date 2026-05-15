"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

// Rotating review cards data
const REVIEWS = [
  {
    left:  { initials: "MR", bg: "#f0fdf4", color: "#16a34a", name: "María R.", text: "Maravilloso. ¡Todo bajo control!" },
    right: { initials: "JP", bg: "#eff6ff", color: "#2563eb", name: "José P.",  text: "Antes usaba libretas. Ahora esto." },
  },
  {
    left:  { initials: "AC", bg: "#fdf4ff", color: "#9333ea", name: "Ana C.",    text: "Los reportes son increíbles." },
    right: { initials: "RM", bg: "#fff7ed", color: "#ea580c", name: "Roberto M.", text: "Cobros al día, clientes felices." },
  },
  {
    left:  { initials: "LV", bg: "#f0fdf4", color: "#059669", name: "Luis V.",   text: "Nunca más perderé un cobro." },
    right: { initials: "CS", bg: "#fefce8", color: "#ca8a04", name: "Carmen S.", text: "La mejor inversión del año." },
  },
];

export default function PremiumPricingHero() {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const sectionRef   = useRef<HTMLElement>(null);
  const phoneRef     = useRef<HTMLDivElement>(null);
  const scrollWrapRef= useRef<HTMLDivElement>(null);
  const [reviewIdx, setReviewIdx]     = useState(0);
  const [leftVisible, setLeftVisible]   = useState(true);
  const [rightVisible, setRightVisible] = useState(true);

  // ── Staggered card rotation: left fades first, right 400ms later ──
  useEffect(() => {
    const id = setInterval(() => {
      // Step 1: fade out LEFT
      setLeftVisible(false);
      // Step 2: 400ms later, fade out RIGHT
      setTimeout(() => setRightVisible(false), 400);
      // Step 3: 1100ms total — content is fully hidden, swap
      setTimeout(() => {
        setReviewIdx(i => (i + 1) % REVIEWS.length);
        // Step 4: fade in RIGHT first
        setRightVisible(true);
        // Step 5: 350ms later, fade in LEFT
        setTimeout(() => setLeftVisible(true), 350);
      }, 1100);
    }, 7000); // 7s between rotations
    return () => clearInterval(id);
  }, []);

  // ── CANVAS: Dotted RD Map ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Dominican Republic silhouette — accurate clockwise polygon
    const rdMainland = [
      [168,310],[172,285],[178,265],[188,248],[205,238],
      [235,228],[280,218],[330,212],[385,208],[435,205],[490,204],[545,208],
      [595,215],[640,222],[675,232],[705,245],
      // Samaná Peninsula base (integrated into mainland for single shape)
      [718,250],[725,238],[740,225],[762,215],[790,212],[815,220],[828,235],
      [820,250],[800,258],[770,262],[740,260],[720,258],
      // East cape + south coast
      [745,268],[790,278],[840,300],[868,328],[878,360],[875,395],
      [862,425],[842,450],[815,470],[782,482],[750,488],
      [770,468],[792,462],[808,470],[812,490],[800,510],[778,520],[755,516],[735,505],
      [710,510],[668,512],[620,512],[572,510],[524,506],[476,502],
      [428,498],[380,492],[335,485],[295,474],[268,460],[248,442],
      [235,422],[228,400],[230,378],[238,358],[248,340],[260,324],[270,312],[168,310],
    ];

    let animFrame: number;
    let width = 0, height = 0;
    let scale = 1, ox = 0, oy = 0;

    const setup = () => {
      width  = canvas.parentElement?.clientWidth  || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width  = width  * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const buildPath = (points: number[][]) => {
      ctx.beginPath();
      points.forEach(([x, y], i) => {
        const px = x * scale + ox;
        const py = y * scale + oy;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      });
      ctx.closePath();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Compute scale from bounding box
      const xs = rdMainland.map(p => p[0]);
      const ys = rdMainland.map(p => p[1]);
      const minX = Math.min(...xs), maxX = Math.max(...xs);
      const minY = Math.min(...ys), maxY = Math.max(...ys);
      const mapW = maxX - minX, mapH = maxY - minY;
      const pad = 50;
      scale = Math.min((width - pad * 2) / mapW, (height - pad * 2) / mapH) * 0.90;
      ox = (width  - mapW * scale) / 2 - minX * scale;
      oy = (height - mapH * scale) / 2 - minY * scale;

      // Clip dot grid to shape
      ctx.save();
      buildPath(rdMainland);
      ctx.clip();

      const spacing = 12;
      const r = 1.5;

      // Radial gradient: center dots more opaque, edges fade
      const cx = width  / 2;
      const cy = height / 2;
      const maxDist = Math.sqrt(cx * cx + cy * cy);

      for (let row = 0; row * spacing < height + spacing; row++) {
        for (let col = 0; col * spacing < width + spacing; col++) {
          const dotX = col * spacing;
          const dotY = row * spacing;
          const dist = Math.sqrt((dotX - cx) ** 2 + (dotY - cy) ** 2);
          const fade = Math.max(0.05, 0.4 - (dist / maxDist) * 0.3); // 0.4 center → 0.1 edges
          ctx.fillStyle = `rgba(150, 170, 200, ${fade})`;
          ctx.beginPath();
          ctx.arc(dotX, dotY, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();
      animFrame = requestAnimationFrame(render);
    };

    window.addEventListener("resize", () => { setup(); });
    setup();
    render();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", setup);
    };
  }, []);

  // ── Scroll parallax: phone rises as user scrolls ──
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollWrapRef.current) return;
      const scrolled = window.scrollY;
      scrollWrapRef.current.style.transform = `translateY(${-scrolled * 0.35}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Mouse tilt on phone ──
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const onMove = (e: MouseEvent) => {
      const { width, height, left, top } = section.getBoundingClientRect();
      const cx = e.clientX - left - width / 2;
      const cy = e.clientY - top  - height / 2;
      if (phoneRef.current) {
        phoneRef.current.style.transform =
          `perspective(1200px) rotateY(${cx / 90}deg) rotateX(${-cy / 90}deg)`;
      }
    };
    const onLeave = () => {
      if (phoneRef.current)
        phoneRef.current.style.transform = `perspective(1200px) rotateY(0deg) rotateX(0deg)`;
    };
    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const review = REVIEWS[reviewIdx];

  return (
    <section ref={sectionRef} className="pricing-hero-section">

      {/* 1. Canvas dotted map */}
      <canvas ref={canvasRef} className="pricing-hero-canvas" />

      {/* 2. Smoke blobs — blue/cyan tones like main hero */}
      <div className="pricing-hero-blobs">
        <div className="ph-blob ph-blob-1" />
        <div className="ph-blob ph-blob-2" />
        <div className="ph-blob ph-blob-3" />
      </div>

      {/* 3. Text content */}
      <div className="pricing-hero-text">
        <h1 className="pricing-hero-h1">
          Gestiona cobros, clientes y
          operaciones desde un <em>solo lugar</em>
        </h1>
        <p className="pricing-hero-p">
          La plataforma definitiva para prestamistas modernos en República Dominicana.
          Elige tu plan y comienza hoy mismo, sin complicaciones.
        </p>
        <div className="pricing-hero-ctas">
          <a href="#precios" className="btn-primary" style={{ padding: "11px 22px", fontSize: "0.9rem" }}>
            Ver planes
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="/soporte" className="btn-ghost" style={{ padding: "11px 22px", fontSize: "0.9rem" }}>Hablar con soporte</a>
        </div>
        <div className="pricing-hero-trust">
          <div className="trust-avatars">
            <span style={{ background: "#e0f2fe", color: "#0369a1", fontSize: "11px", fontWeight: 800 }}>JM</span>
            <span style={{ background: "#dcfce7", color: "#15803d", fontSize: "11px", fontWeight: 800 }}>MR</span>
            <span style={{ background: "#fef9c3", color: "#a16207", fontSize: "11px", fontWeight: 800 }}>PG</span>
          </div>
          <span className="pricing-trust-label">+500 prestamistas ya confían en nosotros</span>
        </div>
      </div>

      {/* 4. Phone + floating review cards */}
      <div className="pricing-hero-visual">

        {/* Review card LEFT — fades out first, fades in last */}
        <div
          className="ph-float-card ph-card-left"
          style={{
            opacity:    leftVisible ? 1 : 0,
            transform:  leftVisible ? 'translateY(0px)' : 'translateY(10px)',
            transition: 'opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <div className="ph-card-avatar" style={{ background: review.left.bg, color: review.left.color }}>
            {review.left.initials}
          </div>
          <div className="ph-card-body">
            <div className="ph-card-stars">★★★★★</div>
            <p className="ph-card-name">{review.left.name}</p>
            <p className="ph-card-sub">{review.left.text}</p>
          </div>
        </div>

        {/* Review card RIGHT — fades out last, fades in first */}
        <div
          className="ph-float-card ph-card-right"
          style={{
            opacity:    rightVisible ? 1 : 0,
            transform:  rightVisible ? 'translateY(0px)' : 'translateY(10px)',
            transition: 'opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <div className="ph-card-avatar" style={{ background: review.right.bg, color: review.right.color }}>
            {review.right.initials}
          </div>
          <div className="ph-card-body">
            <div className="ph-card-stars">★★★★★</div>
            <p className="ph-card-name">{review.right.name}</p>
            <p className="ph-card-sub">{review.right.text}</p>
          </div>
        </div>

        {/* Glow behind phone */}
        <div className="ph-center-glow" />

        {/* Scroll parallax wrapper */}
        <div ref={scrollWrapRef} className="ph-scroll-wrapper">
          {/* Mouse-tilt wrapper */}
          <div ref={phoneRef} className="ph-mockup">
            <div className="ph-mockup-frame">
              <div className="ph-mockup-island" />
              <video
                src="/landi/video_header.mp4"
                autoPlay muted loop playsInline
                className="ph-mockup-video"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
