import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

function App() {
  return (
    <main className="text-white bg-gray-900 font-sans">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;
