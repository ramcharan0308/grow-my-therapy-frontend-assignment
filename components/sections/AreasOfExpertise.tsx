import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mayaData } from "@/data/mayaData";

export const AreasOfExpertiseSection: React.FC = () => {
  const { expertise } = mayaData;

  return (
    <section className="py-16 md:py-24 bg-white border-b border-theme-border/50">
      <Container size="md" className="text-center">
        <SectionHeading
          title={expertise.h3}
          subtitle={expertise.subtitle}
          align="center"
        />

        {/* Clinical Concerns Pills */}
        <div className="space-y-6 mt-8">
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-theme-secondary mb-4">
              Primary Concerns Supported
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {expertise.concerns.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[#FAF8F5] border border-theme-border text-theme-text"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Evidence-Based Modalities Pills */}
          <div className="pt-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-theme-secondary mb-4">
              Evidence-Based Modalities &amp; Approaches
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {expertise.modalities.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-[#2D3A34] text-[#FAF8F5] shadow-2xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
