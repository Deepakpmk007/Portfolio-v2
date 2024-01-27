import Nav from "./compontents/Nav";
import "./App.css";
import Home from "./compontents/Home";
import About from "./compontents/About";
import Skill from "./compontents/Skill";
import Project from "./compontents/Project";
import Contact from "./compontents/Contact";

function App() {
  document.title = "🙂 Deepak portfolio";
  return (
    <div className="main">
      <Nav />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
