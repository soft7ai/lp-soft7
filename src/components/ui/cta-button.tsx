"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";

interface CTAButtonProps extends ButtonProps {
  pulseColor?: string;
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, children, pulseColor = "primary", ...props }, ref) => {
    return (
      <motion.div
        className="relative inline-block"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated glow rings */}
        <motion.div
          className={cn(
            "absolute inset-0 rounded-md bg-primary/30 blur-md",
            "pointer-events-none"
          )}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={cn(
            "absolute inset-0 rounded-md bg-primary/20 blur-xl",
            "pointer-events-none"
          )}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        
        {/* Button with shimmer effect */}
        <Button
          ref={ref}
          className={cn(
            "relative overflow-hidden",
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
            "before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
            "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40",
            "transition-shadow duration-300",
            className
          )}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    );
  }
);
CTAButton.displayName = "CTAButton";

export { CTAButton };
