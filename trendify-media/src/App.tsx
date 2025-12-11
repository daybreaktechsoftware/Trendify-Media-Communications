import "./App.css";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import InteractiveWords from "./components/InteractiveWords";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import StarryBackground from "./components/StarryBackground";

function App() {
  return (
    <div className="App">
      <StarryBackground />
      <Navbar />
      <InteractiveWords />
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Contact />
    </div>
  );
}

export default App;
