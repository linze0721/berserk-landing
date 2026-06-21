import Hero from "./components/Hero";
import Results from "./components/Results";
import HowItWorks from "./components/HowItWorks";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Results />
      <HowItWorks />
      <Waitlist />
      <Footer />
    </main>
  );
}
