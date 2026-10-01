import React from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";

export const AreasOfExpertiseSection: React.FC = () => {
  const { expertise } = mayaData;

  // Group items into 2 balanced columns matching reference Section 5 Fluid Engine index
  const col1Items = [
    "Anxiety & Panic",
    "Trauma & EMDR Therapy",
    "Professional Burnout & Exhaustion",
    "Perfectionism & High Internal Pressure",
    "Chronic Stress & Overthinking",
    "Cognitive Behavioral Therapy (CBT)",
  ];

  const col2Items = [
    "Mindfulness-Based Practices",
    "Body-Oriented Regulation",
    "Work-Life Boundary Setting",
    "Emotional Resilience & Grounding",
    "Career & Life Transitions",
    "…and tailored evidence-based care.",
  ];

  return (
    <section className="py-20 md:py-32 lg:py-40 bg-white border-b border-theme-border/40">
      <Container size="lg">
        {/* Layout: Left Column Heading (~33%), Right Area Two-Column Index with Divider Lines (~67%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* Left Column: Heading with italic accent matching screenshots */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-normal font-heading text-theme-text tracking-tight leading-[1.2]">
              Areas of Focus & <em className="italic font-normal text-theme-secondary">Expertise</em>
            </h3>
            {expertise.subtitle && (
              <p className="text-base text-theme-muted leading-relaxed font-sans pt-1">
                {expertise.subtitle}
              </p>
            )}
          </div>

          {/* Right Columns: 2-Column List with Horizontal Dividers matching screenshots */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-16">
            {/* Column 1 */}
            <div>
              {col1Items.map((item, idx) => (
                <div
                  key={idx}
                  className="py-4 sm:py-5 border-b border-theme-border/60 flex items-center justify-between"
                >
                  <span className="text-base sm:text-lg lg:text-[19px] font-heading font-normal text-theme-text/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div>
              {col2Items.map((item, idx) => (
                <div
                  key={idx}
                  className="py-4 sm:py-5 border-b border-theme-border/60 flex items-center justify-between"
                >
                  <span className="text-base sm:text-lg lg:text-[19px] font-heading font-normal text-theme-text/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
