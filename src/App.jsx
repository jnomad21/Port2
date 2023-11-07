import NavBar from "./components/NavBar";
import Splash from "./pages/SplashPage";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './index.css'

export default function App() {
  return (
    <>
    <Splash />
    <NavBar />
    <h1>
      Jason McGrath
    </h1>
    
    <h3>A developer's heart</h3>
    <h3>A leader's mind</h3>
    <h3>A visionary's soul</h3>

    <h2>Wanna see?</h2>
    <h5>Projects</h5>
    <h5>Skills</h5>


    </>
  );
}


