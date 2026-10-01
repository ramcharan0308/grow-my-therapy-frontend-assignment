"use client";

import React, { useState, useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { mayaData } from "@/data/mayaData";
import { Menu, X, ChevronRight } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);
  const [specialtiesDropdownOpen, setSpecialtiesDropdownOpen] = useState(false);
  const [methodsDropdownOpen, setMethodsDropdownOpen] = useState(false);

  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);
  const [mobileSpecialtiesOpen, setMobileSpecialtiesOpen] = useState(false);
  const [mobileMethodsOpen, setMobileMethodsOpen] = useState(false);

  const teamRef = useRef<HTMLDivElement>(null);
  const specialtiesRef = useRef<HTMLDivElement>(null);
  const methodsRef = useRef<HTMLDivElement>(null);
  const { header } = mayaData;

  const specialtyItems = [
    { label: "Anxiety & Panic", href: "#specialties" },
    { label: "Trauma & PTSD", href: "#specialties" },
    { label: "Professional Burnout", href: "#specialties" },
    { label: "Perfectionism & Pressure", href: "#specialties" },
  ];

  const methodItems = [
    { label: "Cognitive Behavioral (CBT)", href: "#approach" },
    { label: "EMDR Therapy", href: "#approach" },
    { label: "Mindfulness-Based Practices", href: "#approach" },
    { label: "Body-Oriented Techniques", href: "#approach" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (teamRef.current && !teamRef.current.contains(event.target as Node)) {
        setTeamDropdownOpen(false);
      }
      if (specialtiesRef.current && !specialtiesRef.current.contains(event.target as Node)) {
        setSpecialtiesDropdownOpen(false);
      }
      if (methodsRef.current && !methodsRef.current.contains(event.target as Node)) {
        setMethodsDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setTeamDropdownOpen(false);
        setSpecialtiesDropdownOpen(false);
        setMethodsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-theme-border/60 transition-all duration-200">
        <Container size="lg" className="flex items-center justify-between h-24">
          {/* Brand Logo / Wordmark with spacious visual footprint matching reference */}
          <a href="#" className="flex flex-col group py-2">
            <span className="font-heading font-medium text-2xl md:text-3xl text-theme-text group-hover:text-theme-primary transition-colors tracking-tight">
            {header.brandName}
          </span>
          <span className="text-xs uppercase tracking-widest text-theme-secondary font-sans font-medium mt-0.5">
            {header.subtitle}
          </span>
        </a>

        {/* Desktop Navigation Links with generous editorial spacing */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 font-sans text-[13px] uppercase tracking-widest font-medium text-theme-text/85">
          <a href="#about" className="hover:text-theme-primary transition-colors py-2">
            About
          </a>

          {/* 1. OUR TEAM Dropdown with continuous hover-safe bridge */}
          <div
            ref={teamRef}
            className="relative"
            onMouseEnter={() => setTeamDropdownOpen(true)}
            onMouseLeave={() => setTeamDropdownOpen(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setTeamDropdownOpen(false);
              }
            }}
          >
            <button
              onClick={() => setTeamDropdownOpen(!teamDropdownOpen)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setTeamDropdownOpen(!teamDropdownOpen);
                } else if (e.key === "Escape") {
                  setTeamDropdownOpen(false);
                }
              }}
              aria-expanded={teamDropdownOpen}
              aria-haspopup="true"
              className="flex items-center hover:text-theme-primary transition-colors py-2 uppercase tracking-widest text-[13px] font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-theme-primary"
            >
              <span>Our Team</span>
            </button>

            {teamDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-64 z-50 animate-in fade-in-50 duration-150">
                <div className="bg-[#FAF8F5] border border-theme-border/70 rounded-sm shadow-md py-3 px-4">
                  <a
                    href="#about"
                    onClick={() => setTeamDropdownOpen(false)}
                    className="block text-xs uppercase tracking-wider text-theme-text hover:text-theme-primary transition-colors py-2 font-medium"
                  >
                    Dr. Maya Reynolds, PsyD
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* 2. SPECIALTIES Dropdown with continuous hover-safe bridge */}
          <div
            ref={specialtiesRef}
            className="relative"
            onMouseEnter={() => setSpecialtiesDropdownOpen(true)}
            onMouseLeave={() => setSpecialtiesDropdownOpen(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setSpecialtiesDropdownOpen(false);
              }
            }}
          >
            <button
              onClick={() => setSpecialtiesDropdownOpen(!specialtiesDropdownOpen)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSpecialtiesDropdownOpen(!specialtiesDropdownOpen);
                } else if (e.key === "Escape") {
                  setSpecialtiesDropdownOpen(false);
                }
              }}
              aria-expanded={specialtiesDropdownOpen}
              aria-haspopup="true"
              className="flex items-center hover:text-theme-primary transition-colors py-2 uppercase tracking-widest text-[13px] font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-theme-primary"
            >
              <span>Specialties</span>
            </button>

            {specialtiesDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-in fade-in-50 duration-150">
                <div className="bg-[#FAF8F5] border border-theme-border/70 rounded-sm shadow-md py-3 px-4">
                  {specialtyItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setSpecialtiesDropdownOpen(false)}
                      className="block text-xs uppercase tracking-wider text-theme-text hover:text-theme-primary transition-colors py-2.5 border-b border-theme-border/30 last:border-0 font-medium"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 3. METHODS Dropdown with continuous hover-safe bridge */}
          <div
            ref={methodsRef}
            className="relative"
            onMouseEnter={() => setMethodsDropdownOpen(true)}
            onMouseLeave={() => setMethodsDropdownOpen(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setMethodsDropdownOpen(false);
              }
            }}
          >
            <button
              onClick={() => setMethodsDropdownOpen(!methodsDropdownOpen)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setMethodsDropdownOpen(!methodsDropdownOpen);
                } else if (e.key === "Escape") {
                  setMethodsDropdownOpen(false);
                }
              }}
              aria-expanded={methodsDropdownOpen}
              aria-haspopup="true"
              className="flex items-center hover:text-theme-primary transition-colors py-2 uppercase tracking-widest text-[13px] font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-theme-primary"
            >
              <span>Methods</span>
            </button>

            {methodsDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-72 z-50 animate-in fade-in-50 duration-150">
                <div className="bg-[#FAF8F5] border border-theme-border/70 rounded-sm shadow-md py-3 px-4">
                  {methodItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMethodsDropdownOpen(false)}
                      className="block text-xs uppercase tracking-wider text-theme-text hover:text-theme-primary transition-colors py-2.5 border-b border-theme-border/30 last:border-0 font-medium"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="#faqs" className="hover:text-theme-primary transition-colors py-2">
            FAQs
          </a>
        </nav>

        {/* Desktop Action CTA: Oval Pill Outline Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="rounded-full border border-theme-text/80 px-7 py-2.5 text-xs font-medium uppercase tracking-widest text-theme-text hover:bg-theme-primary hover:border-theme-primary hover:text-white transition-all duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          aria-expanded={mobileMenuOpen}
          aria-label="Open mobile menu"
          className="lg:hidden p-2 text-theme-text hover:text-theme-primary focus:outline-none"
        >
          <Menu size={28} />
        </button>
      </Container>
    </header>

    {/* Mobile Drawer Menu strictly matching Reference Screenshots */}
    {mobileMenuOpen && (
      <div className="fixed inset-0 z-[100] w-full h-[100dvh] min-h-screen bg-[#FAF8F5] flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200 overflow-y-auto">
          {/* Top Bar: Brand Logo & Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-theme-border/40">
            <div className="flex flex-col">
              <span className="font-heading font-medium text-2xl text-theme-text tracking-tight">
                {header.brandName}
              </span>
              <span className="text-xs uppercase tracking-widest text-theme-secondary font-sans font-medium mt-0.5">
                {header.subtitle}
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="p-2 text-theme-text hover:text-theme-primary focus:outline-none"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigation Links matching Screenshot 1 & 3 */}
          <nav className="flex flex-col space-y-7 py-10 font-sans text-lg uppercase tracking-widest text-theme-text font-normal">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-theme-primary transition-colors py-1"
            >
              About
            </a>

            {/* OUR TEAM expandable */}
            <div>
              <button
                onClick={() => setMobileTeamOpen(!mobileTeamOpen)}
                className="w-full flex items-center justify-between hover:text-theme-primary transition-colors py-1 uppercase tracking-widest text-left"
              >
                <span>Our Team</span>
                <ChevronRight size={20} className={`text-theme-secondary transition-transform duration-200 ${mobileTeamOpen ? "rotate-90" : ""}`} />
              </button>
              {mobileTeamOpen && (
                <div className="pl-4 pt-3 pb-1 space-y-2 border-l border-theme-border/60 mt-2">
                  <a
                    href="#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base normal-case tracking-normal text-theme-muted hover:text-theme-primary"
                  >
                    Dr. Maya Reynolds, PsyD
                  </a>
                </div>
              )}
            </div>

            {/* SPECIALTIES expandable */}
            <div>
              <button
                onClick={() => setMobileSpecialtiesOpen(!mobileSpecialtiesOpen)}
                className="w-full flex items-center justify-between hover:text-theme-primary transition-colors py-1 uppercase tracking-widest text-left"
              >
                <span>Specialties</span>
                <ChevronRight size={20} className={`text-theme-secondary transition-transform duration-200 ${mobileSpecialtiesOpen ? "rotate-90" : ""}`} />
              </button>
              {mobileSpecialtiesOpen && (
                <div className="pl-4 pt-3 pb-1 space-y-2.5 border-l border-theme-border/60 mt-2">
                  {specialtyItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-base normal-case tracking-normal text-theme-muted hover:text-theme-primary"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* METHODS expandable */}
            <div>
              <button
                onClick={() => setMobileMethodsOpen(!mobileMethodsOpen)}
                className="w-full flex items-center justify-between hover:text-theme-primary transition-colors py-1 uppercase tracking-widest text-left"
              >
                <span>Methods</span>
                <ChevronRight size={20} className={`text-theme-secondary transition-transform duration-200 ${mobileMethodsOpen ? "rotate-90" : ""}`} />
              </button>
              {mobileMethodsOpen && (
                <div className="pl-4 pt-3 pb-1 space-y-2.5 border-l border-theme-border/60 mt-2">
                  {methodItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-base normal-case tracking-normal text-theme-muted hover:text-theme-primary"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-theme-primary transition-colors py-1"
            >
              FAQs
            </a>
          </nav>

          {/* Bottom Action CTA: Oval Pill Outline Button */}
          <div className="pt-6 pb-6 flex justify-center">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full border border-theme-text/80 px-12 py-3 text-xs font-medium uppercase tracking-widest text-theme-text hover:bg-theme-primary hover:border-theme-primary hover:text-white transition-all text-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
};
