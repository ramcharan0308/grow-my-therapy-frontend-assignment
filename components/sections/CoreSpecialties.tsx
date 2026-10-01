import React from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";

export const CoreSpecialtiesSection: React.FC = () => {
  const { coreSpecialties } = mayaData;

  return (
    <section id="specialties" className="py-20 md:py-32 lg:py-40 bg-white border-b border-theme-border/40">
      <Container size="lg">
        {/* Layout: Left Column Heading (~33%), Right Area 2x2 Editorial Grid (~67%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* Left Column: Heading with italic accent word */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-normal font-heading text-theme-text tracking-tight leading-[1.2]">
              Our <em className="italic font-normal text-theme-secondary">Specialties</em> Include…
            </h3>
            {coreSpecialties.subtitle && (
              <p className="text-base text-theme-muted leading-relaxed font-sans pt-1">
                {coreSpecialties.subtitle}
              </p>
            )}
          </div>

          {/* Right Area: 2x2 Clean Unboxed Editorial Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-16 lg:gap-y-20">
            {coreSpecialties.items.map((item) => (
              <div key={item.id} className="space-y-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <h4 className="text-xl sm:text-2xl font-normal font-heading text-theme-text leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-base text-theme-muted leading-[1.8] font-sans">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-theme-primary hover:text-theme-primary-hover transition-colors group font-sans"
                  >
                    <span>{item.cta}</span>
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};
