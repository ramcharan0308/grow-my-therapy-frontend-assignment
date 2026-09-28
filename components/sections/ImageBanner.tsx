import React from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";

export const ImageBannerSection: React.FC = () => {
  const { imageBanner } = mayaData;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#2D3A34] text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src={imageBanner.backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <Container size="md" className="relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-medium leading-relaxed max-w-3xl mx-auto text-[#FAF8F5]">
          {imageBanner.quote}
        </h2>
      </Container>
    </section>
  );
};
