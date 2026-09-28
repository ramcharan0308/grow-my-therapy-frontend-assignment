import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { mayaData } from "@/data/mayaData";

export const CoreSpecialtiesSection: React.FC = () => {
  const { coreSpecialties } = mayaData;

  return (
    <section id="specialties" className="py-16 md:py-24 bg-white border-b border-theme-border/50">
      <Container size="lg">
        <SectionHeading
          title={coreSpecialties.h3}
          subtitle={coreSpecialties.subtitle}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {coreSpecialties.items.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF8F5] p-6 rounded-xl border border-theme-border/70 shadow-2xs flex flex-col justify-between space-y-4 hover:shadow-sm transition-all"
            >
              <div className="space-y-3">
                <h4 className="text-xl font-bold font-heading text-theme-text">
                  {item.title}
                </h4>
                <p className="text-sm text-theme-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="pt-2">
                <Button variant="ghost" size="sm" className="px-0 hover:bg-transparent text-theme-primary font-semibold">
                  <a href="#contact">{item.cta} &rarr;</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
