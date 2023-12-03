import "./App.css";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Landing from "./sections/Landing";
import About from "./sections/About";
import ParticlesComponent from "./components/ParticlesComponent";
import Header from "./sections/Header";

function App() {
  return (
    <div>
      {/* <ParticlesComponent /> */}
      <Header />
      <Landing />
      {/* <About /> */}
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
