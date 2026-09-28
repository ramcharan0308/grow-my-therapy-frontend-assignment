import React from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";

export const MissionIntroSection: React.FC = () => {
  const { missionIntro } = mayaData;

  return (
    <section id="approach" className="py-16 md:py-24 bg-[#F2ECE4] border-b border-theme-border/50">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-heading text-theme-text leading-tight">
              {missionIntro.h2}
            </h2>
            <div className="space-y-4 text-theme-muted text-base md:text-lg leading-relaxed">
              {missionIntro.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Featured Office Image */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-theme-border/60 aspect-[4/3] lg:aspect-[3/4]">
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
