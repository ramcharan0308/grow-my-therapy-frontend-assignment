"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";
import { Plus, Minus } from "lucide-react";

export const FAQSection: React.FC = () => {
  const { faqs } = mayaData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 md:py-32 bg-white border-b border-theme-border/40">
      <Container size="md">
        {/* Section Heading */}
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-normal font-heading text-theme-text tracking-tight leading-[1.2]">
            {faqs.h2}
          </h2>
          {faqs.subtitle && (
            <p className="text-base md:text-lg text-theme-muted max-w-xl mx-auto font-sans pt-1">
              {faqs.subtitle}
            </p>
          )}
        </div>

        {/* Clean Editorial Accordion List (Minimal horizontal divider lines) */}
        <div className="divide-y divide-theme-border/60 border-t border-b border-theme-border/60">
          {faqs.items.map((item, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const contentId = `faq-content-${index}`;

            return (
              <div key={index} className="py-2">
                <h3>
                  <button
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-theme-primary/40 focus:ring-inset rounded-sm group transition-colors"
                  >
                    <span className="text-lg sm:text-xl font-normal font-heading text-theme-text group-hover:text-theme-primary transition-colors pr-6">
                      {item.question}
                    </span>
                    <span className="text-theme-secondary transition-colors duration-200 flex-shrink-0">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headingId}
                    className="pb-7 pt-1 text-base text-theme-muted leading-[1.8] font-sans"
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
