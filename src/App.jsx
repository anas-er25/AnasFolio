import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experiences/Experience';
import Contact from './Components/Contact/Contact';
function App() {
 
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <Skills/>
        <Experience/>
        <Contact/>
      </div>
    </>
  )
}

export default App
