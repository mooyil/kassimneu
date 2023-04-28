import { useState } from "react";
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
  return (
    <div className="font-serif">
      <ContextProvider>
        <BrowserRouter>
          <Navbar2 />
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/über-mich" element={<ÜberMich />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/kontakt" element={<KontaktPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
