import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import JmHeader from "./components/JmHeader";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import QuoteTranslator from "./components/QuoteTranslator";
import Skills from "./components/Skills";
import './index.css'

export default function App() {
  return (
    <>
    <NavBar />
    <JmHeader />
    <QuoteTranslator />
    <div className="app-sec">
    <AboutMe />
    <Skills />
    <Projects />
    </div>
    <Contacts />
    </>
  );
}


