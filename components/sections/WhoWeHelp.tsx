import React from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";

export const WhoWeHelpSection: React.FC = () => {
  const { whoWeHelp } = mayaData;

  return (
    <section className="py-20 md:py-28 lg:py-36 bg-white border-b border-theme-border/40">
      <Container size="lg">
        {/* Left-Aligned Editorial Section Heading matching Reference Screenshots */}
        <div className="mb-14 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-normal font-heading text-theme-text tracking-tight leading-[1.2]">
            Who I <em className="italic font-normal text-theme-secondary">Work With</em>
          </h2>
          {whoWeHelp.subtitle && (
            <p className="mt-3 text-base md:text-lg text-theme-muted max-w-xl font-sans">
              {whoWeHelp.subtitle}
            </p>
          )}
        </div>

        {/* 3-Column Clean Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 xl:gap-14">
          {whoWeHelp.cards.map((card) => (
            <div key={card.id} className="flex flex-col space-y-5">
              {/* Clean Rectangular Tall Portrait Photo */}
              <div className="rounded-sm overflow-hidden aspect-[3/4] bg-[#FAF8F5] border border-theme-border/50 shadow-sm">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Typography Block directly underneath image */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xl sm:text-2xl font-normal font-heading text-theme-text leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-theme-muted leading-[1.75] font-sans">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
