import Intro from "./components/Intro";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="px-8 mx-auto max-w-7xl lg:px-8 mt-16 sm:mt-32">
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
