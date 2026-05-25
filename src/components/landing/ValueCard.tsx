"use client";

import React, { useState } from "react";

interface Props {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export default function ValueCard({ icon, title, description }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--white)",
        padding: "32px 24px",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--gray-100)",
        transition: "all 0.25s ease",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        boxShadow: hover ? "var(--shadow-float)" : "none",
        transform: hover ? "translateY(-8px)" : "translateY(0)",
        borderColor: hover ? "var(--primary)" : "var(--gray-100)",
      }}
    >
      {icon ? (
        <div
          style={{
            fontSize: "2.5rem",
            marginBottom: "16px",
            height: "48px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {icon}
        </div>
      ) : null}
      <h4
        style={{
          fontWeight: 800,
          color: "var(--gray-900)",
          marginBottom: "12px",
          fontSize: "1.1rem",
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontSize: "0.95rem",
          color: "var(--gray-600)",
          margin: 0,
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </div>
  );
}
