"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface TypeWriterProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
}

export const TypeWriter = ({
  text,
  className = "",
  delay = 0,
  speed = 30,
  cursor = true,
}: TypeWriterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, text, delay, speed]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {cursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
        />
      )}
    </span>
  );
};

interface TypeWriterMultiProps {
  lines: Array<{
    text: string;
    className?: string;
  }>;
  className?: string;
  speed?: number;
  lineDelay?: number;
}

export const TypeWriterMulti = ({
  lines,
  className = "",
  speed = 30,
  lineDelay = 500,
}: TypeWriterMultiProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedTexts, setDisplayedTexts] = useState<string[]>(
    lines.map(() => "")
  );
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const typeNextLine = (lineIndex: number) => {
      if (lineIndex >= lines.length) {
        setIsComplete(true);
        return;
      }

      const line = lines[lineIndex];
      let charIndex = 0;

      const interval = setInterval(() => {
        if (charIndex <= line.text.length) {
          setDisplayedTexts((prev) => {
            const newTexts = [...prev];
            newTexts[lineIndex] = line.text.slice(0, charIndex);
            return newTexts;
          });
          charIndex++;
        } else {
          clearInterval(interval);
          setCurrentLine(lineIndex + 1);
          setTimeout(() => typeNextLine(lineIndex + 1), lineDelay);
        }
      }, speed);

      return () => clearInterval(interval);
    };

    const timeout = setTimeout(() => typeNextLine(0), 300);
    return () => clearTimeout(timeout);
  }, [isInView, lines, speed, lineDelay]);

  return (
    <span ref={ref} className={className}>
      {lines.map((line, index) => (
        <span key={index} className={line.className}>
          {displayedTexts[index]}
          {index === currentLine && !isComplete && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
            />
          )}
        </span>
      ))}
    </span>
  );
};
