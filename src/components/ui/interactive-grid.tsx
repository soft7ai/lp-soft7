import { useRef, useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface InteractiveGridProps {
  className?: string;
  gridSize?: number;
  glowRadius?: number;
  lineColor?: string;
  glowColor?: string;
}

export const InteractiveGrid = ({
  className,
  gridSize = 50,
  glowRadius = 150,
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

    // Draw vertical lines
    for (let x = 0; x <= width; x += gridSize) {
      const distX = Math.abs(x - mouseX);
      const distY = Math.min(
        Math.abs(mouseY),
        Math.abs(height - mouseY),
        ...Array.from({ length: Math.ceil(height / gridSize) + 1 }, (_, i) => 
          Math.abs(i * gridSize - mouseY)
        )
      );
      const dist = Math.sqrt(distX * distX + distY * distY);
      const intensity = Math.max(0, 1 - dist / glowRadius);
      
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      
      if (intensity > 0) {
        ctx.strokeStyle = glowColor.replace("0.4", `${0.1 + intensity * 0.5}`);
        ctx.lineWidth = 1 + intensity * 2;
      } else {
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;
      }
      ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y <= height; y += gridSize) {
      const distY = Math.abs(y - mouseY);
      const distX = Math.min(
        Math.abs(mouseX),
        Math.abs(width - mouseX),
        ...Array.from({ length: Math.ceil(width / gridSize) + 1 }, (_, i) => 
          Math.abs(i * gridSize - mouseX)
        )
      );
      const dist = Math.sqrt(distX * distX + distY * distY);
      const intensity = Math.max(0, 1 - dist / glowRadius);
      
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      
      if (intensity > 0) {
        ctx.strokeStyle = glowColor.replace("0.4", `${0.1 + intensity * 0.5}`);
        ctx.lineWidth = 1 + intensity * 2;
      } else {
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;
      }
      ctx.stroke();
    }

    // Draw intersection points near mouse
    for (let x = 0; x <= width; x += gridSize) {
      for (let y = 0; y <= height; y += gridSize) {
        const dist = Math.sqrt(
          Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2)
        );
        const intensity = Math.max(0, 1 - dist / glowRadius);
        
        if (intensity > 0) {
          ctx.beginPath();
          ctx.arc(x, y, 2 + intensity * 4, 0, Math.PI * 2);
          ctx.fillStyle = glowColor.replace("0.4", `${intensity * 0.8}`);
          ctx.fill();
        }
      }
    }

    animationRef.current = requestAnimationFrame(draw);
  }, [gridSize, glowRadius, lineColor, glowColor]);

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
