import React from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";

export const MissionIntroSection: React.FC = () => {
  const { missionIntro } = mayaData;

  return (
    <section id="approach" className="py-20 md:py-32 lg:py-40 bg-[#F2ECE4] border-b border-theme-border/40">
      <Container size="lg">
        {/* Desktop: 2-column parent layout with text on left (two sub-columns) and tall photo on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Area (~65% on Desktop): Wide H2 + 2-Column Paragraph Split */}
          <div className="lg:col-span-8 space-y-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-normal font-heading text-theme-text leading-[1.2] max-w-2xl">
              {missionIntro.h2}
            </h2>

            {/* Mobile First Paragraph */}
            <p className="block lg:hidden text-theme-muted text-base md:text-lg leading-[1.8] font-sans">
              {missionIntro.paragraphs[0]}
            </p>

            {/* Mobile Mid-Section Image (Placed between Paragraph 1 and 2 matching reference mobile flow) */}
            <div className="block lg:hidden my-8 rounded-sm overflow-hidden shadow-sm aspect-[4/3] border border-theme-border/60">
              <img
                src={missionIntro.image}
                alt="Quiet and grounding Santa Monica practice setting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Desktop Two-Column Sub-Grid for Body Text with generous line-height */}
            <div className="hidden lg:grid grid-cols-2 gap-10 xl:gap-12 text-theme-muted text-base lg:text-[17px] leading-[1.85] font-sans">
              <div>
                <p>{missionIntro.paragraphs[0]}</p>
              </div>
              <div className="space-y-6">
                <p>{missionIntro.paragraphs[1]}</p>
                <p>{missionIntro.paragraphs[2]}</p>
              </div>
            </div>

            {/* Mobile Remaining Paragraphs */}
            <div className="block lg:hidden space-y-5 text-theme-muted text-base md:text-lg leading-[1.8] font-sans">
              <p>{missionIntro.paragraphs[1]}</p>
              <p>{missionIntro.paragraphs[2]}</p>
            </div>
          </div>

          {/* Right Area (~35% on Desktop): Clean Rectangular Tall Portrait Photo */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="rounded-sm overflow-hidden shadow-sm border border-theme-border/60 aspect-[3/4] bg-[#FAF8F5]">
              <img
                src={missionIntro.image}
                alt="Grounding and quiet atmosphere at Dr. Maya Reynolds therapy office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
