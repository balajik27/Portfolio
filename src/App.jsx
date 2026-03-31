import FirstSection from "./Components/firstSection";

import Doing from "./Components/whatDoing";
import AboutMe from "./Components/aboutMe";
import Skills from "./Components/skills";
import { Experience } from "./Components/experience";
import Projects from "./Components/projects";

import PhotoGallery from "./Components/photoGallery";
import Contact from "./Components/contact";

function App() {
  return (
    <div className="App">
      <FirstSection />
      <Doing />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <PhotoGallery />
      <Contact />
      <footer className="py-4 mt-5 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p className="text-secondary small mb-2 text-uppercase letter-spacing-1">Portfolio Visitors</p>
        <img src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fbalajik27.github.io%2FPortfolio&countColor=%230d6efd&style=flat" alt="visitor badge" style={{ height: '24px' }} />
        <div className="mt-3 text-secondary small">
          © {new Date().getFullYear()} Balaji K. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
