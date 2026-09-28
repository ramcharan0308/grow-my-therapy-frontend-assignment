import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { mayaData } from "@/data/mayaData";

export const ScheduleCTASection: React.FC = () => {
  const { scheduleCTA } = mayaData;

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-theme-border/50">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs md:text-sm uppercase tracking-widest font-semibold text-theme-secondary">
              {scheduleCTA.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-heading text-theme-text leading-tight">
              {scheduleCTA.h2}
            </h2>
            <div className="space-y-3 text-theme-muted text-base md:text-lg leading-relaxed">
              {scheduleCTA.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <div className="pt-4">
              <Button variant="primary" size="lg">
                <a href="#contact">{scheduleCTA.cta}</a>
              </Button>
            </div>
          </div>

          {/* Right Dual Imagery (Office & Headshot) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-sm border border-theme-border/60 aspect-[3/4]">
              <img
                src={scheduleCTA.officeImage}
                alt="Santa Monica practice environment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-sm border border-theme-border/60 aspect-[3/4] mt-6">
              <img
                src={scheduleCTA.headshotImage}
                alt="Dr. Maya Reynolds, PsyD"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
