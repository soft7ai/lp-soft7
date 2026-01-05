import { useRef, useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface InteractiveGridProps {
  className?: string;
  gridSize?: number;
  glowRadius?: number;
  connectionRadius?: number;
  lineColor?: string;
  glowColor?: string;
}

interface Point {
  x: number;
  y: number;
  intensity: number;
}

export const InteractiveGrid = ({
  className,
  gridSize = 50,
  glowRadius = 150,
  connectionRadius = 120,
  lineColor = "hsl(var(--primary) / 0.1)",
  glowColor = "hsl(var(--primary) / 0.4)",
}: InteractiveGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    const { x: mouseX, y: mouseY } = mouseRef.current;

    ctx.clearRect(0, 0, width, height);

    // Draw base grid lines (vertical)
    for (let x = 0; x <= width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw base grid lines (horizontal)
    for (let y = 0; y <= height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Collect active points near mouse
    const activePoints: Point[] = [];
    
    for (let x = 0; x <= width; x += gridSize) {
      for (let y = 0; y <= height; y += gridSize) {
        const dist = Math.sqrt(
          Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2)
        );
        const intensity = Math.max(0, 1 - dist / glowRadius);
        
        if (intensity > 0) {
          activePoints.push({ x, y, intensity });
        }
      }
    }

    // Draw connections between active points
    for (let i = 0; i < activePoints.length; i++) {
      for (let j = i + 1; j < activePoints.length; j++) {
        const p1 = activePoints[i];
        const p2 = activePoints[j];
        const dist = Math.sqrt(
          Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
        );

        if (dist < connectionRadius) {
          const connectionIntensity = (1 - dist / connectionRadius) * Math.min(p1.intensity, p2.intensity);
          
          // Create gradient for connection line
          const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          gradient.addColorStop(0, `hsla(217, 91%, 60%, ${connectionIntensity * 0.8})`);
          gradient.addColorStop(0.5, `hsla(200, 100%, 55%, ${connectionIntensity * 0.9})`);
          gradient.addColorStop(1, `hsla(217, 91%, 60%, ${connectionIntensity * 0.8})`);
          
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1 + connectionIntensity * 2;
          ctx.stroke();
        }
      }
    }

    // Draw connection to mouse cursor from nearest points
    for (const point of activePoints) {
      const dist = Math.sqrt(
        Math.pow(point.x - mouseX, 2) + Math.pow(point.y - mouseY, 2)
      );
      
      if (dist < connectionRadius) {
        const connectionIntensity = (1 - dist / connectionRadius) * point.intensity;
        
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.strokeStyle = `hsla(217, 91%, 60%, ${connectionIntensity * 0.5})`;
        ctx.lineWidth = 1 + connectionIntensity;
        ctx.stroke();
      }
    }

    // Draw glowing intersection points
    for (const point of activePoints) {
      // Outer glow
      const glowGradient = ctx.createRadialGradient(
        point.x, point.y, 0,
        point.x, point.y, 8 + point.intensity * 12
      );
      glowGradient.addColorStop(0, `hsla(217, 91%, 60%, ${point.intensity * 0.8})`);
      glowGradient.addColorStop(0.5, `hsla(200, 100%, 55%, ${point.intensity * 0.4})`);
      glowGradient.addColorStop(1, `hsla(217, 91%, 60%, 0)`);
      
      ctx.beginPath();
      ctx.arc(point.x, point.y, 8 + point.intensity * 12, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();
      
      // Core point
      ctx.beginPath();
      ctx.arc(point.x, point.y, 2 + point.intensity * 3, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(200, 100%, 70%, ${0.6 + point.intensity * 0.4})`;
      ctx.fill();
    }

    // Draw cursor glow
    if (mouseX > 0 && mouseY > 0 && mouseX < width && mouseY < height) {
      const cursorGlow = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        mouseX, mouseY, 30
      );
      cursorGlow.addColorStop(0, `hsla(200, 100%, 60%, 0.3)`);
      cursorGlow.addColorStop(1, `hsla(217, 91%, 60%, 0)`);
      
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 30, 0, Math.PI * 2);
      ctx.fillStyle = cursorGlow;
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(draw);
  }, [gridSize, glowRadius, connectionRadius, lineColor, glowColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateDimensions = () => {
      const parent = canvas.parentElement;
      if (parent) {
        const { width, height } = parent.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      animationRef.current = requestAnimationFrame(draw);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions, draw]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 };
  };

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 pointer-events-auto", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  );
};
