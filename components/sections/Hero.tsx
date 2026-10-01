import React from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";

export const HeroSection: React.FC = () => {
  const { hero } = mayaData;

  return (
    <section className="relative pt-8 sm:pt-10 lg:pt-12 pb-16 md:pb-24 lg:pb-32 bg-[#FAF8F5] overflow-hidden border-b border-theme-border/40">
      <Container size="lg">
        {/* Proportional Grid matching reference layout: 5 cols Left Portrait, 5 cols Center Text, 2 cols Right Accent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* Desktop Left Column: Clean Rectangular Portrait (5 cols) */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex justify-center lg:justify-start">
            {/* Desktop single tall portrait */}
            <div className="hidden lg:block w-full max-w-md">
              <div className="overflow-hidden shadow-sm aspect-[3/4] rounded-sm border border-theme-border/60 bg-[#F2ECE4]">
                <img
                  src={hero.headshotImage}
                  alt="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica, CA"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Mobile Image Composition matching reference: Primary image on left, accent image nested on right */}
            <div className="grid grid-cols-12 gap-3 w-full lg:hidden pt-4">
              <div className="col-span-8 overflow-hidden shadow-sm aspect-[3/4] rounded-sm border border-theme-border/60 bg-[#F2ECE4]">
                <img
                  src={hero.headshotImage}
                  alt="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="col-span-4 flex items-end">
                <div className="w-full overflow-hidden shadow-sm aspect-[2/3] rounded-sm border border-theme-border/60 bg-[#F2ECE4]">
                  <img
                    src={hero.officeImage}
                    alt="Santa Monica therapy office natural light interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Center Column: Editorial Content with Spacious Rhythm (5 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-5 space-y-6 lg:space-y-7 text-left">
            <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-theme-secondary font-sans">
              {hero.eyebrow}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.25rem] font-normal leading-[1.15] text-theme-text font-heading tracking-tight">
              Grounded, Evidence-Based Therapy for Adults Navigating Anxiety, Trauma & <em className="italic font-normal text-theme-secondary">Burnout</em>.
            </h1>
            <p className="text-base md:text-lg text-theme-muted leading-[1.8] font-sans">
              {hero.body}
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block w-full sm:w-auto text-center rounded-sm bg-theme-primary text-white px-9 py-4 text-xs sm:text-sm font-medium uppercase tracking-widest hover:bg-theme-primary-hover transition-colors shadow-sm"
              >
                {hero.primaryCTA}
              </a>
            </div>
          </div>

          {/* Far-Right Column: Secondary Accent Photo matching reference proportions (2 cols) */}
          <div className="hidden lg:flex lg:order-3 lg:col-span-2 justify-end self-end pt-12 lg:pt-20 xl:pt-24">
            <div className="w-full max-w-[220px] overflow-hidden shadow-sm aspect-[2/3] rounded-sm border border-theme-border/50 bg-[#F2ECE4]">
              <img
                src={hero.officeImage}
                alt="Santa Monica therapy office interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
