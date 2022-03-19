import React from 'react'
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBarMenu from './components/navbar';
import Home from './page/home';
// import Contacts from './page/contacts';
import Footer from './components/footer';

export default function App() {
  return (
    <>
      <NavBarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Routes>
        <Route path="/contacts" element={<Contacts />} />
      </Routes> */}
      <Footer />
    </>
  )
}