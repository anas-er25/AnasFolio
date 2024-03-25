import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experiences/Experience';
function App() {
 
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <Skills/>
        <Experience/>
      </div>
    </>
  )
}

export default App
