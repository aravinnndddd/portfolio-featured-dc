import React from "react";
import './App.css'
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/navbar";
import { Contact } from "./Components/contact";
import { Home } from "./pages/home";
import { Artwork } from "./pages/artwork";
import { Projects } from "./pages/projects";
import { Skills } from "./pages/skills";
import { Coffee } from "./pages/coffee";
import { About } from "./pages/about";
export default function App() {
  return (
    <>
    <div className="grid-container">
      <Contact />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/art-work" element={<Artwork/>} />
        <Route path="/project" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/coffee" element={<Coffee/>} />

      </Routes>
    </div>
    </>
  )
}

  