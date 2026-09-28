import React from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";

export const OfficeSection: React.FC = () => {
  const { ourOffice } = mayaData;

  return (
    <section id="office" className="py-16 md:py-24 bg-[#F2ECE4] border-b border-theme-border/50">
      <Container size="lg">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block text-xs md:text-sm uppercase tracking-widest font-semibold text-theme-secondary">
            {ourOffice.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-heading text-theme-text leading-tight">
            {ourOffice.h2}
          </h2>
          <div className="space-y-4 text-theme-muted text-base md:text-lg leading-relaxed pt-2">
            {ourOffice.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* Dual Office Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-theme-border/70 aspect-[4/3]">
            <img
              src={ourOffice.image1}
              alt={ourOffice.image1Alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-theme-border/70 aspect-[4/3]">
            <img
              src={ourOffice.image2}
              alt={ourOffice.image2Alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Practice Format & Environment Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ourOffice.features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] p-6 rounded-xl border border-theme-border/60 shadow-2xs space-y-2"
            >
              <h4 className="text-base font-bold font-heading text-theme-text">
                {feat.title}
              </h4>
              <p className="text-xs md:text-sm text-theme-muted leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
