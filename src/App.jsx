import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import Footer from "./components/Footer"

function App() {
  return (
    <div className="px-8 mx-auto max-w-7xl lg:px-8 mt-16 sm:mt-32">
      <Intro />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
