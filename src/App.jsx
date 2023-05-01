import { useEffect, useState } from "react";
import Navbar from "./komponenten/Navbar";
import Hero from "./komponenten/Hero";
import AboutMe from "./komponenten/AboutMe";
import Footer from "./komponenten/Footer";
import Home from "./pages/Home";
import ÜberMich from "./pages/ÜberMich";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar2 from "./komponenten/Navbar2";
import Leistungen from "./pages/Leistungen";
import KontaktPage from "./pages/KontaktPage";
import ScrollToTop from "./komponenten/ScrollToTop";
import { ContextProvider } from "./context/ContextProvider";
// import Leistungen from './komponenten/Leistungen'

function App() {


  const [translation, setTranslation] = useState(() => {
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage !== null ? storedLanguage : 'de';
  });

  useEffect(() => {
    localStorage.setItem('language', translation);
  }, [translation]);

  

  return (
    <div className="font-serif">
      <ContextProvider>
        <BrowserRouter>
          <Navbar2 translation={translation} setTranslation={setTranslation}/>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Home translation={translation} setTranslation={setTranslation}/>} />
            <Route path="/über-mich" element={<ÜberMich translation={translation} setTranslation={setTranslation} />} />
            <Route path="/leistungen" element={<Leistungen translation={translation} setTranslation={setTranslation} />} />
            <Route path="/kontakt" element={<KontaktPage translation={translation} setTranslation={setTranslation} />} />
          </Routes>
          <Footer translation={translation} setTranslation={setTranslation}/>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
