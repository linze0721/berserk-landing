import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Results from "./components/Results";
import HowItWorks from "./components/HowItWorks";
import WhyBerserk from "./components/WhyBerserk";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white bg-dot-grid">
      <Hero />
      <SocialProof />
      <Results />
      <HowItWorks />
      <WhyBerserk />
      <Waitlist />
      <Footer />
    </main>
  );
}
