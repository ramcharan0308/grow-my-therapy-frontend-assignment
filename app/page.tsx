import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/Hero";
import { MissionIntroSection } from "@/components/sections/MissionIntro";
import { WhoWeHelpSection } from "@/components/sections/WhoWeHelp";
import { QuoteBannerSection } from "@/components/sections/QuoteBanner";
import { AreasOfExpertiseSection } from "@/components/sections/AreasOfExpertise";
import { HowWeWorkSection } from "@/components/sections/HowWeWork";
import { ImageBannerSection } from "@/components/sections/ImageBanner";
import { CoreSpecialtiesSection } from "@/components/sections/CoreSpecialties";
import { OfficeSection } from "@/components/sections/OfficeSection";
import { ScheduleCTASection } from "@/components/sections/ScheduleCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist Santa Monica, CA",
  description: "Grounded, evidence-based therapy for adults navigating anxiety, trauma, EMDR, burnout & perfectionism in Santa Monica, CA and via California telehealth.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1F2421] font-sans">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MissionIntroSection />
        <WhoWeHelpSection />
        <QuoteBannerSection />
        <AreasOfExpertiseSection />
        <HowWeWorkSection />
        <ImageBannerSection />
        <CoreSpecialtiesSection />
        <OfficeSection />
        <ScheduleCTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
