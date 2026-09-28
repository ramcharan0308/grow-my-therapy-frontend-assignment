"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { mayaData } from "@/data/mayaData";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { header } = mayaData;

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-theme-border/70 transition-all duration-200">
      <Container size="lg" className="flex items-center justify-between h-20">
        {/* Brand Logo / Wordmark */}
        <a href="#" className="flex flex-col group">
          <span className="font-heading font-semibold text-xl md:text-2xl text-theme-text group-hover:text-theme-primary transition-colors tracking-tight">
            {header.brandName} <span className="text-sm font-normal text-theme-secondary">, {header.brandTitle}</span>
          </span>
          <span className="text-[11px] uppercase tracking-widest text-theme-muted font-medium">
            {header.subtitle}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {header.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-theme-text/80 hover:text-theme-primary transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden md:flex items-center">
          <Button variant="primary" size="md">
            <a href={header.ctaButton.href}>{header.ctaButton.label}</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-theme-text hover:text-theme-primary focus:outline-none focus:ring-2 focus:ring-theme-primary rounded-md"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-theme-border px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {header.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-theme-text py-2 border-b border-theme-border/40 hover:text-theme-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <Button variant="primary" size="md" className="w-full">
              <a href={header.ctaButton.href} onClick={() => setMobileMenuOpen(false)}>
                {header.ctaButton.label}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
