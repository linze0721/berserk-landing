import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Results from "./components/Results";
import HowItWorks from "./components/HowItWorks";
import WhyBerserk from "./components/WhyBerserk";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

function Seam() {
  return <div className="seam" aria-hidden="true" />;
}

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white bg-dot-grid">
      <Hero />
      <Seam />
      <SocialProof />
      <Seam />
      <Results />
      <Seam />
      <HowItWorks />
      <Seam />
      <WhyBerserk />
      <Seam />
      <Waitlist />
      <Seam />
      <Footer />
    </main>
  );
}
