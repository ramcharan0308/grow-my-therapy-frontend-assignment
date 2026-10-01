import React from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";

export const HowWeWorkSection: React.FC = () => {
  const { howWeWork } = mayaData;

  return (
    <section id="about" className="py-20 md:py-32 lg:py-44 bg-[#F2ECE4] border-b border-theme-border/40">
      <Container size="lg">
        {/* Desktop: Text on Left (split into 2 sub-columns), Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (~65% on Desktop): Header, Two-column text split, Button */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4">
              <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-theme-secondary font-sans">
                {howWeWork.eyebrow}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-normal font-heading text-theme-text leading-[1.2] max-w-2xl">
                A Warm, Collaborative, and Grounded Approach to <em className="italic font-normal text-theme-secondary">Healing</em>.
              </h2>
            </div>

            {/* Mobile Image Placement: Sits between H2 and body paragraphs matching reference Screenshot 3 */}
            <div className="block lg:hidden my-8">
              <div className="rounded-sm overflow-hidden shadow-sm aspect-[3/4] max-w-sm mx-auto bg-[#FAF8F5] border border-theme-border/60">
                <img
                  src={howWeWork.headshot}
                  alt="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Desktop Two-Column Sub-Grid for Body Text with generous line-height */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 xl:gap-12 text-theme-muted text-base lg:text-[17px] leading-[1.85] font-sans">
              <div>
                <p>{howWeWork.paragraphs[0]}</p>
              </div>
              <div className="space-y-6">
                <p>{howWeWork.paragraphs[1]}</p>
                <p>{howWeWork.paragraphs[2]}</p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block rounded-sm bg-theme-primary text-white px-9 py-4 text-xs sm:text-sm font-medium uppercase tracking-widest hover:bg-theme-primary-hover transition-colors shadow-sm"
              >
                {howWeWork.cta}
              </a>
            </div>
          </div>

          {/* Right Column (~35% on Desktop): Tall Rectangular Portrait Photo */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="rounded-sm overflow-hidden shadow-sm aspect-[3/4] bg-[#FAF8F5] border border-theme-border/60">
              <img
                src={howWeWork.headshot}
                alt="Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
