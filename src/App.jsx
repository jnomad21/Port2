import JmHeader from "./components/JmHeader";
import NavBar from "./components/NavBar";
import QuoteTranslator from "./components/QuoteTranslator";

import './index.css'

export default function App() {
  return (
    <>
    <NavBar />
    <JmHeader />
    <img src="public/JM-Portrait 2021-BW-Green.jpg" alt="" />
    <QuoteTranslator />
    </>
  );
}


