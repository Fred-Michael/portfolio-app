import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from "./components/Home/Home";
import Skills from "./components/skills/Skills"
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
