"use client";

import { useEffect, useRef } from "react";

const VoidNebula = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
      updateInterval: number;
      counter: number;
    }

    // Create particles
    const particleCount = 80;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() * 60 + 240, // Blue to purple range
        updateInterval: Math.random() * 100 + 50,
        counter: 0,
      });
    }

    let time = 0;
    let animationFrameId: number;

    const animate = () => {
      time += 1;

      // Create semi-transparent trail effect
      ctx.fillStyle = "rgba(10, 15, 30, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.counter++;

        // Slow, organic movement
        if (particle.counter > particle.updateInterval) {
          particle.vx += (Math.random() - 0.5) * 0.1;
          particle.vy += (Math.random() - 0.5) * 0.1;
          particle.counter = 0;

          // Speed limit
          const speed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2);
          if (speed > 0.5) {
            particle.vx = (particle.vx / speed) * 0.5;
            particle.vy = (particle.vy / speed) * 0.5;
          }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Pulsing opacity
        particle.opacity =
          0.2 +
          0.3 * Math.sin(time * 0.01 + index) +
          0.2 * Math.sin(time * 0.005 + index * 0.5);

        // Draw particle glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );

        gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, ${particle.opacity})`);
        gradient.addColorStop(0.7, `hsla(${particle.hue}, 100%, 50%, ${particle.opacity * 0.3})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 50%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core particle
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 80%, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.15;
            ctx.strokeStyle = `hsla(260, 100%, 50%, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Add subtle nebula clouds
      const cloudCount = 3;
      for (let c = 0; c < cloudCount; c++) {
        const cloudX = Math.sin(time * 0.0001 + c * 2) * canvas.width * 0.3 + canvas.width / 2;
        const cloudY = Math.cos(time * 0.00015 + c * 1.5) * canvas.height * 0.3 + canvas.height / 2;

        const cloudGradient = ctx.createRadialGradient(
          cloudX,
          cloudY,
          0,
          cloudX,
          cloudY,
          300
        );

        const hue = 250 + c * 30;
        cloudGradient.addColorStop(0, `hsla(${hue}, 80%, 30%, 0.05)`);
        cloudGradient.addColorStop(0.5, `hsla(${hue}, 80%, 20%, 0.02)`);
        cloudGradient.addColorStop(1, `hsla(${hue}, 80%, 10%, 0)`);

        ctx.fillStyle = cloudGradient;
        ctx.beginPath();
        ctx.arc(cloudX, cloudY, 300, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "linear-gradient(135deg, #050510 0%, #0a0820 50%, #050508 100%)" }}
    />
  );
};

export default VoidNebula;
