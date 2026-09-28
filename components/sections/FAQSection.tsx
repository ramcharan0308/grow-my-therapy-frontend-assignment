"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mayaData } from "@/data/mayaData";
import { ChevronDown } from "lucide-react";

export const FAQSection: React.FC = () => {
  const { faqs } = mayaData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-white border-b border-theme-border/50">
      <Container size="md">
        <SectionHeading
          title={faqs.h2}
          subtitle={faqs.subtitle}
          align="center"
        />

        <div className="space-y-4 mt-10">
          {faqs.items.map((item, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const contentId = `faq-content-${index}`;

            return (
              <div
                key={index}
                className="bg-[#FAF8F5] rounded-xl border border-theme-border/70 overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#2D3A34] focus:ring-inset"
                  >
                    <span className="text-base md:text-lg font-semibold font-heading text-theme-text pr-4">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-theme-secondary transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-6 pb-6 pt-1 text-sm md:text-base text-theme-muted leading-relaxed border-t border-theme-border/40"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
