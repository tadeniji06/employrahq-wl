import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import DocumentVault from "./components/DocumentVault";
import Security from "./components/Security";
import Roadmap from "./components/Roadmap";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Marquee ticker */}
      <Marquee />

      {/* Core Features */}
      <Features />

      <div className="section-divider" />

      {/* How it Works */}
      <HowItWorks />

      <div className="section-divider" />

      {/* Document Vault */}
      <DocumentVault />

      <div className="section-divider" />

      {/* Security & Access Control */}
      <Security />

      <div className="section-divider" />

      {/* Roadmap */}
      <Roadmap />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </>
  );
}
