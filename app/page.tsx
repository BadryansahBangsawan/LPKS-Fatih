import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import VisionMission from "./components/VisionMission";
import Operations from "./components/Operations";
import News from "./components/News";
import Sustainability from "./components/Sustainability";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 ">
      <Header />
      <main>
        <Hero />
        <VisionMission />
        <Operations />
        <Stats />
        <News />
        <Sustainability />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
