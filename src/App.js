import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="text-black bg-orange-100 font-sans dark:text-white dark:bg-gray-900">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;
