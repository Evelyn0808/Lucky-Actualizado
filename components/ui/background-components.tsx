'use client';
import React, { useState } from "react";

export const Component = ({ children }: { children?: React.ReactNode }) => {
  // Manteniendo el estado tal como indica el código proporcionado
  const [count, setCount] = useState(0);

  return (
    <div style={{ minHeight: '100vh', width: '100%', position: 'relative', backgroundColor: 'white' }}>
      
      {/* Soft Yellow Glow */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 0,
          backgroundImage: `radial-gradient(circle at center, #FFF991 0%, transparent 70%)`,
          opacity: 0.6,
          mixBlendMode: "multiply",
          pointerEvents: "none"
        }}
      />
      
      {/* Warm Orange Glow Right */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 0,
          background: "transparent",
          backgroundImage: `radial-gradient(circle at top right, rgba(255, 140, 60, 0.5), transparent 70%)`,
          filter: "blur(80px)",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none"
        }}
      />
      
      {/* Your Content/Components (z-index configurado correctamente para estar por encima del fondo) */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>
      
    </div>
  );
};

export default Component;
