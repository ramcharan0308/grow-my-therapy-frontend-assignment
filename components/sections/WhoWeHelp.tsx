import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mayaData } from "@/data/mayaData";

export const WhoWeHelpSection: React.FC = () => {
  const { whoWeHelp } = mayaData;

  return (
    <section className="py-16 md:py-24 bg-white border-b border-theme-border/50">
      <Container size="lg">
        <SectionHeading
          title={whoWeHelp.h2}
          subtitle={whoWeHelp.subtitle}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {whoWeHelp.cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#FAF8F5] rounded-xl overflow-hidden border border-theme-border/70 shadow-xs flex flex-col transition-all duration-300 hover:shadow-md"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <h4 className="text-xl font-bold font-heading text-theme-text">
                  {card.title}
                </h4>
                <p className="text-sm md:text-base text-theme-muted leading-relaxed">
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
