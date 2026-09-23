import { About } from "./components/About";
import { CtaFinal } from "./components/CtaFinal";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Navbar } from "./components/Navbar";
import { Plans } from "./components/Plans";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { SmoothScroll } from "./components/SmoothScroll";
import { Work } from "./components/Work";

function App() {
  return (
    <SmoothScroll>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Process />
        <Plans />
        <About />
        <CtaFinal />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

export default App;
