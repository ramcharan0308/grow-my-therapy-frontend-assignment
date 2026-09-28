import React from "react";
import { clsx } from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={clsx("max-w-3xl mb-12", alignmentClasses[align], className)}>
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-widest font-semibold text-theme-muted mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-theme-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-theme-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
