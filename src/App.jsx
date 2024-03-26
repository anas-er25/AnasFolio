import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experiences/Experience';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
// import ReCAPTCHA from 'react-google-recaptcha';
function App() {
 
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <Skills/>
        <Experience/>
        <Contact/>
        {/* <ReCAPTCHA sitekey="6LejqKUpAAAAAJGa4ecNA0Iazq0Q0lxmq1EBtPJE"/> */}
      </div>
        <Footer/>
    </>
  )
}

export default App
