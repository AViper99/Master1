import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Novosti from "./components/Novosti";
import Kontakt from "./components/Kontakt";
import O_nama from "./components/O_nama";
import Kolekcija from "./components/Kolekcija";
import Galerija from "./components/Galerija";

function App() {
  return (
    <header>
      <Navbar></Navbar>
      <Routes>
        <Route path="" element={<Landing />}></Route>
        <Route path="public/index.html" element={<Landing />}></Route>
        <Route path="public/Novosti.html" element={<Novosti />}></Route>
        <Route path="public/Kontakt.html" element={<Kontakt />}></Route>
        <Route path="public/O_nama.html" element={<O_nama />}></Route>
        <Route path="public/Kolekcija.html" element={<Kolekcija />}></Route>
        <Route path="public/Galerija.html" element={<Galerija />}></Route>
      </Routes>
      <Footer></Footer>
    </header>
  );
}

export default App;
