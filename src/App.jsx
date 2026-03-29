import React from "react";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import HeroSection from "./components/HeroSection";
import OurWorkSection from "./components/OurWorkSection";
import DualImagePage from "./components/DualImagePage";
import Footer from "./components/Footer";
import WhatsApps from "./components/WhatsApps";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesPage from "./components/pages/NotesPage";

const App = () => {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landingpage />
              <HeroSection />
              <OurWorkSection />
              <DualImagePage />
            </>
          }
        />

        <Route path="/notes" element={<NotesPage />} />
      </Routes>

      {/* ✅ Global Components */}
      <WhatsApps />

      <Footer />

    </Router>
  );
};

export default App;