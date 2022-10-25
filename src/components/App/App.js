import React from "react";
import "./App.css";
import { HashRouter, Route, Link, Routes, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import About from "./../About/About";
import Projects from "./../Projects/Projects";
import Skills from "./../Skills/Skills";
import Contact from "./../Contact/Contact";
import NavBar from "./../NavBar/NavBar";
import GoHome from "./../GoHome/GoHome";

const App = () => {
  return (
    <>
      <HashRouter id="App">
        <NavBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div id="page-wrap">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/skills" exact element={<Skills />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </div>
        <GoHome />
      </HashRouter>
    </>
  );
};

export default App;
