import React from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";

export const QuoteBannerSection: React.FC = () => {
  const { quoteBanner } = mayaData;

  return (
    <section className="py-20 md:py-28 bg-[#2D3A34] text-white relative overflow-hidden">
      {/* Subtle Ambient Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src={quoteBanner.backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <Container size="md" className="relative z-10 text-center">
        <blockquote className="space-y-4">
          <p className="text-2xl sm:text-3xl md:text-4xl font-heading leading-relaxed italic text-[#FAF8F5] font-medium">
            &ldquo;{quoteBanner.quote}&rdquo;
          </p>
          <cite className="block text-sm uppercase tracking-widest text-[#D4C4B5] font-sans not-italic pt-2">
            — {quoteBanner.author}
          </cite>
        </blockquote>
      </Container>
    </section>
  );
};
