import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PanditJi } from "./components/PanditJi";
import { TrustStrip } from "./components/TrustStrip";
import { TrustIndicators } from "./components/TrustIndicators";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Timeline } from "./components/Timeline";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { StickyCallButton } from "./components/StickyCallButton";

export default function App() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
    >
      <Navbar />
      <Hero />
      <PanditJi />
      <TrustStrip />
      <TrustIndicators />
      <Services />
      <WhyChooseUs />
      <Timeline />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Footer />
      <StickyCallButton />
      {/* Mobile bottom padding so content isn't hidden under sticky bar */}
      <div className="h-16 sm:hidden" />
    </div>
  );
}
