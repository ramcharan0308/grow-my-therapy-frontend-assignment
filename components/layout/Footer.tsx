import React from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";

export const Footer: React.FC = () => {
  const { footer } = mayaData;

  return (
    <footer className="bg-white border-t border-theme-border/70">
      {/* Main Footer Body */}
      <div className="py-16 md:py-20">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Col 1: Brand Info (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="font-heading text-xl font-bold text-theme-text">
                {footer.brandName} <span className="text-sm font-normal text-theme-secondary">, {footer.brandTitle}</span>
              </h3>
              <p className="text-sm text-theme-muted leading-relaxed">
                {footer.introText}
              </p>
              <p className="text-xs text-theme-secondary font-medium pt-2">
                {footer.clientFocusNotice}
              </p>
            </div>

            {/* Col 2: Navigation Links (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-widest text-theme-text">
                {footer.navHeading}
              </h4>
              <ul className="space-y-2 text-sm text-theme-muted">
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
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-widest text-theme-text">
                {footer.contactHeading}
              </h4>
              <div className="text-sm text-theme-muted space-y-2 leading-relaxed">
                <p className="whitespace-pre-line font-medium text-theme-text">{footer.address}</p>
                <p className="text-xs text-theme-secondary pt-1">{footer.telehealthNotice}</p>
              </div>
            </div>

            {/* Col 4: Core Specialties List (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-widest text-theme-text">
                {footer.specialtiesHeading}
              </h4>
              <ul className="space-y-2 text-sm text-theme-muted">
                {footer.specialtiesList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Sub-Footer / Legal Bar */}
      <div className="bg-[#2D3A34] text-gray-300 py-6 text-xs border-t border-gray-800">
        <Container size="lg" className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {footer.legalLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                {idx > 0 && <span className="text-gray-500">|</span>}
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </div>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {footer.brandName}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
};
