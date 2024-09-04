import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Splash from "./components/Splash/Splash";
import { useState } from "react";
import AboutPage from "./pages/AboutPage/AboutPage";
import Navbar from "./components/Navbar/Navbar";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import SplashV2 from "./components/SplashV2/SplashV2";

function App() {
  return (
    <>
      <div className="base">
        <BrowserRouter>
          <div className="header">
            {/* <div className="splash">
       <SplashV2/>
       </div> */}
            <h1>ATLAS USIC</h1>
            <Navbar />
          </div>
          <div className="main">
            <Routes>
              <Route path="/" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </BrowserRouter>
        <div className="footer">
              <p>
                Background image by
                <a href="https://unsplash.com/@parisbilal?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                  Paris Bilal
                </a>
                on
                <a href="https://unsplash.com/photos/a-blue-and-white-abstract-painting-of-a-womans-face-SpM6hfYI3u8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                  Unsplash
                </a>
              </p>
            </div>
      </div>
    </>
  );
}

export default App;
