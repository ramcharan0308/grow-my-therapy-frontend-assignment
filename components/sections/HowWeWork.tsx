import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { mayaData } from "@/data/mayaData";

export const HowWeWorkSection: React.FC = () => {
  const { howWeWork } = mayaData;

  return (
    <section id="about" className="py-16 md:py-24 bg-[#F2ECE4] border-b border-theme-border/50">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Image (Official Headshot) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-theme-border/70 aspect-[4/5]">
              <img
                src={howWeWork.headshot}
                alt="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="inline-block text-xs md:text-sm uppercase tracking-widest font-semibold text-theme-secondary">
              {howWeWork.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-heading text-theme-text leading-tight">
              {howWeWork.h2}
            </h2>
            <div className="space-y-4 text-theme-muted text-base md:text-lg leading-relaxed">
              {howWeWork.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <div className="pt-2">
              <Button variant="primary" size="md">
                <a href="#contact">{howWeWork.cta}</a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
