import React from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";

export const OfficeSection: React.FC = () => {
  const { ourOffice } = mayaData;

  return (
    <section id="office" className="py-20 md:py-32 lg:py-40 bg-[#F2ECE4] border-b border-theme-border/40 overflow-hidden">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (~45% on Desktop): Editorial Narrative */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-theme-secondary font-sans">
                {ourOffice.eyebrow}
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-normal font-heading text-theme-text leading-[1.2]">
                A Calm, Grounding Space Designed for <em className="italic font-normal text-theme-secondary">Healing</em>.
              </h2>
            </div>
            
            <div className="space-y-6 text-theme-muted text-base lg:text-[17px] leading-[1.85] font-sans">
              {ourOffice.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Key Practice Delivery Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              <div className="p-5 rounded-sm bg-[#FAF8F5] border border-theme-border/60 shadow-xs">
                <h3 className="text-sm font-bold font-heading text-theme-text mb-1.5">
                  In-Person Santa Monica
                </h3>
                <p className="text-xs text-theme-muted leading-relaxed font-sans">
                  Quiet, private, uncluttered space with comfortable seating and natural light at 123th Street 45 W.
                </p>
              </div>
              <div className="p-5 rounded-sm bg-[#FAF8F5] border border-theme-border/60 shadow-xs">
                <h3 className="text-sm font-bold font-heading text-theme-text mb-1.5">
                  California Telehealth
                </h3>
                <p className="text-xs text-theme-muted leading-relaxed font-sans">
                  Secure, HIPAA-compliant telehealth sessions available for clients located across California.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (~55% on Desktop): Clean Dual Photography Gallery */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Primary Office Image */}
            <div className="rounded-sm overflow-hidden shadow-sm aspect-[3/4] border border-theme-border/60 bg-[#FAF8F5]">
              <img
                src={ourOffice.image1}
                alt={ourOffice.image1Alt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Secondary Office Image */}
            <div className="rounded-sm overflow-hidden shadow-sm aspect-[3/4] border border-theme-border/60 bg-[#FAF8F5] sm:translate-y-8">
              <img
                src={ourOffice.image2}
                alt={ourOffice.image2Alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
