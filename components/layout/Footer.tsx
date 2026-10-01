import React from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";

export const Footer: React.FC = () => {
  const { footer } = mayaData;

  return (
    <footer className="bg-white border-t border-theme-border/60">
      {/* Main Footer Body (Matching Reference Section 10 Fluid Engine 4-Column Grid) */}
      <div className="py-20 md:py-32">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Col 1: Brand Info & Practice Intro (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <h3 className="font-heading text-xl font-medium text-theme-text">
                {footer.brandName} <span className="text-sm font-normal text-theme-secondary">, {footer.brandTitle}</span>
              </h3>
              <p className="text-sm md:text-base text-theme-muted leading-[1.8] font-sans">
                {footer.introText}
              </p>
              <p className="text-xs text-theme-secondary font-medium pt-1 font-sans">
                {footer.clientFocusNotice}
              </p>
            </div>

            {/* Col 2: Navigation Links (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-widest text-theme-text font-sans">
                {footer.navHeading}
              </h4>
              <ul className="space-y-3 text-sm text-theme-muted font-sans">
                {footer.navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-theme-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Practice Location & Telehealth (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-widest text-theme-text font-sans">
                {footer.contactHeading}
              </h4>
              <div className="text-sm text-theme-muted space-y-3 leading-relaxed font-sans">
                <p className="whitespace-pre-line font-medium text-theme-text leading-[1.7]">{footer.address}</p>
                <p className="text-xs text-theme-secondary pt-1 leading-relaxed">{footer.telehealthNotice}</p>
              </div>
            </div>

            {/* Col 4: Core Specialties List (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase font-bold tracking-widest text-theme-text font-sans">
                {footer.specialtiesHeading}
              </h4>
              <ul className="space-y-3 text-sm text-theme-muted font-sans">
                {footer.specialtiesList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Sub-Footer / Legal Bar (Matching Reference Section 11 Dark Bar) */}
      <div className="bg-[#2D3A34] text-gray-300 py-8 text-xs border-t border-gray-800">
        <Container size="lg" className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 font-sans">
            {footer.legalLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                {idx > 0 && <span className="text-gray-500">|</span>}
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </div>
          <p className="text-gray-400 font-sans">
            &copy; {new Date().getFullYear()} {footer.brandName}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
};
