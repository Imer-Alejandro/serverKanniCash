"use client";

import React, { useEffect, useRef } from 'react';

export default function DottedMapRD() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    const dotDensity = 8; // Pixels between dots
    const dotSize = 1.5;

    // More accurate silhouette path for Dominican Republic
    const rdPath = new Path2D("M893,524c-5-2-12-6-16-9c-7-5-10-10-15-13c-7-4-15-6-23-6c-13,0-26,4-36,12c-12,9-22,21-36,25c-15,4-30-2-45-7c-17-6-35-12-53-15c-11-2-22-2-33-2c-15,0-30,4-44,9c-20,7-39,18-60,23c-14,3-28,2-41-1c-14-3-28-10-41-17c-12-7-23-15-36-22c-12-7-26-11-40-10c-15,1-29,8-42,16c-11,7-22,14-33,21c-14,8-28,15-44,18c-12,2-24,0-35-5c-14-6-26-16-37-27c-10-10-19-22-26-35c-7-13-11-28-11-43c0-14,3-28,9-41c8-16,21-31,36-43c13-11,28-19,45-24c16-5,32-6,49-4c17,2,33,7,48,16c14,8,26,19,37,31c10,11,18,24,25,37c7,14,12,29,15,45c3,17,3,34,1,51c-2,14-5,28-10,42c-7,18-18,34-31,48c-12,13-26,24-42,32c-14,7-29,11-45,12c-17,1-34-1-50-6c-16-5-31-13-44-24c-12-10-23-22-30-36c-8-15-12-32-13-49c-1-17,2-34,8-50c6-16,16-31,28-44c11-12,25-22,40-29c15-7,31-11,48-12c17-1,34,1,50,6c16,5,30,13,43,24c11,10,21,22,28,36c7,14,11,30,12,46c1,17-2,34-8,50c-6,16-16,31-28,44c-11,12-24,22-39,29c-15,7-32,10-48,11c-17,1-34-1-50-6c-16-5-31-13-43-24c-12-11-21-24-28-39c-7-15-11-32-11-49c0-18,3-35,10-51c8-17,20-32,35-44c14-11,31-19,48-23c18-4,36-4,53-1c17,3,34,10,49,20c14,9,26,21,36,35c10,14,17,30,21,46c4,17,4,35,1,53c-3,17-9,34-18,49c-10,17-23,32-38,44c-14,11-31,19-49,23c-18,4-36,4-54,1c-17-3-33-10-48-20c-14-10-25-22-34-36c-9-15-14-31-16-48c-2-17,1-34,7-50c6-16,16-31,28-44c12-12,26-22,42-29c15-7,32-10,49-10c17,0,34,3,49,10c15,7,29,17,40,29c12,13,22,28,28,44c6,16,9,33,7,50c-2,17-7,33-16,48c-9,14-20,26-34,36c-15,10-31,17-48,20c-18,3-36,3-54-1c-18-4-35-12-49-23c-15-12-28-27-38-44c-9-15-15-32-18-49c-3-18-3-36,1-53c4-16,11-32,21-46c10-14,22-26,36-35c15-10,32-17,49-20c17-3,35-3,53,1c17,4,34,12,48,23c15,12,27,27,35,44c7,16,10,33,10,51c0,17-4,34-11,49c-7,15-17,28-28,39c-12,11-26,20-43,24c-16,5-33,7-50,6c-16-1-33-5-48-11c-15-7-28-17-39-29c-12-12-22-28-28-44c-6-16-9-33-8-50c1-16,5-32,12-46c7-14,17-26,28-36c13-11,27-19,43-24c16-5,33-7,50-6c16,1,32,5,46,11c14,7,27,17,37,28c11,12,20,26,27,41c7,15,10,31,11,48c1,17-1,34-7,50c-6,16-16,31-28,44c-12,12-26,21-41,27c-15,6-32,9-49,10c-17,1-34-1-50-6c-16-5-31-13-44-24c-12-10-23-23-31-37c-8-15-12-32-13-49c-1-17,2-34,9-50c7-16,17-31,29-43c12-12,27-22,43-28c16-6,33-9,50-9c17,0,34,3,50,9c16,6,31,16,43,28c12,12,22,27,29,43c7,16,10,33,9,50c-1,17-5,34-13,49c-8,14-19,27-31,37c-13,11-28,19-44,24c-16,5-33,7-50,6c-17-1-34-5-49-11c-15-7-29-17-41-27c-12-11-22-25-28-40c-7-15-10-31-11-48c-1-17,1-34,7-50c6-16,16-31,28-44c12-13,26-23,41-30c15-7,32-11,50-12c17-1,34,1,50,6c16,5,31,13,44,24c12,11,23,24,30,39c8,15,12,32,13,50c1,17-2,34-8,50c-6,16-16,31-28,44c-12,12-26,22-41,29c-15,7-32,11-49,12c-17,1-34-1-51-6c-17-5-32-13-46-24c-13-11-25-24-33-40c-9-15-13-33-14-51c-1-17,2-35,9-51c7-16,18-31,31-44c13-12,29-22,46-29c17-7,35-10,54-11c18,0,37,3,54,11c17,7,32,17,46,29c13,13,24,28,31,44c7,16,10,34,9,51c-1,18-5,36-14,51c-8,16-20,29-33,40c-14,11-29,19-46,24c-17,5-34,7-51,6z");

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - width / 2) / 25;
      mouseY = (e.clientY - height / 2) / 25;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#e2e8f0';

      const offscreen = document.createElement('canvas');
      offscreen.width = 1000;
      offscreen.height = 1000;
      const offCtx = offscreen.getContext('2d');
      if (!offCtx) return;

      offCtx.fillStyle = 'black';
      offCtx.fill(rdPath);

      const imageData = offCtx.getImageData(0, 0, 1000, 1000);
      const data = imageData.data;

      const scale = Math.min(width / 1000, height / 800) * 0.9;
      const offsetX = (width - 1000 * scale) / 2;
      const offsetY = (height - 800 * scale) / 2;

      for (let y = 0; y < 1000; y += dotDensity) {
        for (let x = 0; x < 1000; x += dotDensity) {
          const index = (y * 1000 + x) * 4;
          if (data[index + 3] > 50) {
            // Subtle mouse parallax for dots
            const dotX = x * scale + offsetX + mouseX * (x / 1000);
            const dotY = y * scale + offsetY + mouseY * (y / 1000);
            
            ctx.beginPath();
            ctx.arc(dotX, dotY, dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="dotted-map-container">
      <canvas 
        ref={canvasRef} 
        style={{ width: '100%', height: '100%', display: 'block' }} 
      />
    </div>
  );
}
