import React from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";

export const QuoteBannerSection: React.FC = () => {
  const { quoteBanner } = mayaData;

  return (
    <section className="relative py-28 md:py-36 lg:py-44 min-h-[420px] md:min-h-[500px] flex items-center bg-[#2D3A34] text-white overflow-hidden">
      {/* Background Ambient Imagery with Subtle Opacity Overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src={quoteBanner.backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="max-w-4xl">
          <blockquote className="space-y-8 lg:space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-heading font-normal leading-[1.28] text-[#FAF8F5] tracking-tight">
              {quoteBanner.quote}
            </h2>
            <cite className="block text-xs sm:text-sm uppercase tracking-widest text-[#D4C4B5] font-sans not-italic font-medium">
              — {quoteBanner.author}
            </cite>
          </blockquote>
        </div>
      </Container>
    </section>
  );
};
