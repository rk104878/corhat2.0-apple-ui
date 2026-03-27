import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from "./components/Landingpage";
import HeroSection from './components/HeroSection';
import WorkCard from './components/WorkCard';   
import OurWorkSection from './components/OurWorkSection';
import DualImagePage from "./components/DualImagePage";
import Footer from './components/Footer'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesPage from "./components/pages/NotesPage";



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />  
        <Routes>
          <Route path="/" element={
            <>
              <Landingpage />
              <HeroSection />
              <OurWorkSection />
              {/* <WorkCard /> */}
              <DualImagePage />
            </>
          } />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  )
}

export default App
