import React from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";

export const ScheduleCTASection: React.FC = () => {
  const { scheduleCTA } = mayaData;

  return (
    <section id="contact" className="py-20 md:py-32 lg:py-44 bg-[#FAF8F5] border-b border-theme-border/40 overflow-hidden">
      <Container size="lg">
        {/* 3-Part Composition matching Reference Screenshot 2 & 3 (Section 9) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Column on Desktop: Accent Office Photo (cols 1-4 on reference) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="rounded-sm overflow-hidden shadow-sm aspect-[3/4] border border-theme-border/50 bg-[#F2ECE4]">
              <img
                src={scheduleCTA.officeImage}
                alt="Santa Monica therapy office seating area"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Column: Editorial Content (cols 6-16 on reference) */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-theme-secondary font-sans">
                {scheduleCTA.eyebrow}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-normal font-heading text-theme-text leading-[1.2]">
                Find a therapist who is the right fit for <em className="italic font-normal text-theme-secondary">you</em>.
              </h2>
            </div>

            <div className="space-y-4 text-theme-muted text-base md:text-lg leading-[1.8] font-sans">
              {scheduleCTA.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-3">
              <a
                href="#contact"
                className="inline-block w-full sm:w-auto text-center rounded-sm bg-theme-primary text-white px-9 py-4 text-xs sm:text-sm font-medium uppercase tracking-widest hover:bg-theme-primary-hover transition-colors shadow-sm"
              >
                {scheduleCTA.cta}
              </a>
            </div>
          </div>

          {/* Right Column: Tall Portrait Headshot (cols 18-27 on reference) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="w-full max-w-xs lg:max-w-none">
              <div className="rounded-sm overflow-hidden shadow-sm aspect-[3/4] border border-theme-border/60 bg-[#F2ECE4]">
                <img
                  src={scheduleCTA.headshotImage}
                  alt="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
