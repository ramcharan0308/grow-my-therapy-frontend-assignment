import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { mayaData } from "@/data/mayaData";

export const HeroSection: React.FC = () => {
  const { hero } = mayaData;

  return (
    <section className="py-16 md:py-24 bg-[#FAF8F5] overflow-hidden border-b border-theme-border/50">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-block text-xs md:text-sm uppercase tracking-widest font-semibold text-theme-secondary">
              {hero.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight text-theme-text font-heading">
              {hero.h1}
            </h1>
            <p className="text-base md:text-lg text-theme-muted leading-relaxed max-w-2xl">
              {hero.body}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                <a href="#contact">{hero.primaryCTA}</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#office">{hero.secondaryCTA}</a>
              </Button>
            </div>
          </div>

          {/* Right Column: Dual Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Headshot */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-md aspect-[4/5] border border-theme-border/60">
                <img
                  src={hero.headshotImage}
                  alt="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Secondary Office Ambient Overlay */}
              <div className="absolute -bottom-6 -left-6 w-2/3 rounded-xl overflow-hidden shadow-xl border-4 border-white z-20 hidden sm:block aspect-[4/3]">
                <img
                  src={hero.officeImage}
                  alt="Calm, bright Santa Monica therapy seating area"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
