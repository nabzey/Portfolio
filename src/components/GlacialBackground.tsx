import React, { useEffect, useRef } from 'react';

const GlacialBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(173, 216, 230, ${particle.opacity})`;
        ctx.fill();

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-gray-900 dark:via-blue-900 dark:to-cyan-900" />

      {/* Animated waves */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
        <svg viewBox="0 0 1200 120" className="w-full h-full">
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1200,40 1200,60 L1200,120 L0,120 Z"
            fill="url(#wave-gradient)"
            className="animate-pulse"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 50,0; 0,0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(173, 216, 230, 0.3)" />
              <stop offset="50%" stopColor="rgba(135, 206, 235, 0.5)" />
              <stop offset="100%" stopColor="rgba(173, 216, 230, 0.3)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ pointerEvents: 'none' }}
      />

      {/* Floating ice-like elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-sm animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-200/20 rounded-full blur-sm animate-bounce" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-blue-200/20 rounded-full blur-sm animate-bounce" style={{ animationDelay: '4s' }} />
    </div>
  );
};

export default GlacialBackground;