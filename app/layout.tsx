import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dr-maya-reynolds-therapy.vercel.app"),
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist Santa Monica, CA",
  description:
    "Grounded, evidence-based therapy for adults navigating anxiety, trauma, EMDR, burnout & perfectionism in Santa Monica, CA and via California telehealth.",
  keywords: [
    "Dr. Maya Reynolds",
    "Psychologist Santa Monica",
    "Therapy for Adults Santa Monica",
    "Anxiety Therapist Santa Monica",
    "EMDR Therapy Santa Monica",
    "Burnout Counseling California Telehealth",
  ],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist Santa Monica, CA",
    description:
      "Grounded, evidence-based therapy for adults navigating anxiety, trauma, EMDR, burnout & perfectionism in Santa Monica, CA.",
    type: "website",
    locale: "en_US",
    siteName: "Dr. Maya Reynolds, PsyD Therapy Practice",
    images: [
      {
        url: "/images/maya/maya-reynolds.jpg",
        width: 800,
        height: 1000,
        alt: "Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist in Santa Monica, CA",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-[#FAF8F5] text-[#1F2421]">
        {children}
      </body>
    </html>
  );
}
