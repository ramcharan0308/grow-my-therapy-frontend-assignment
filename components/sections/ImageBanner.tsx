import React from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";

export const ImageBannerSection: React.FC = () => {
  const { imageBanner } = mayaData;

  return (
    <section className="py-20 md:py-32 lg:py-40 bg-white border-b border-theme-border/40 overflow-hidden">
      <Container size="lg">
        {/* Split Composition matching Reference Screenshots (Section 7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left Column (~58% on Desktop): Clean Tall Feature Image */}
          <div className="lg:col-span-7">
            <div className="rounded-sm overflow-hidden shadow-sm border border-theme-border/50 aspect-[4/3] bg-[#FAF8F5]">
              <img
                src={imageBanner.backgroundImage}
                alt="Honoring where you have been and shaping where you are headed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column (~42% on Desktop): Large Editorial Statement Headline */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-normal font-heading text-theme-text leading-[1.2] tracking-tight">
              Honoring where you’ve been & <em className="italic font-normal text-theme-secondary">helping shape</em> where you’re headed.
            </h2>
          </div>

        </div>
      </Container>
    </section>
  );
};
