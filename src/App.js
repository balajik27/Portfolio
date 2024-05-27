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
    </div>
  );
}

export default App;
