import { useState } from 'react';
import Navbar from './components/navbar';
import Pageone from './components/pageone'; 
import Aboutme from './components/aboutme'; 
import Portfolio from './components/portfolio';
import './App.css';
function App() {
  return (
      <div>
        <Navbar /> 
        <Pageone />
        <Aboutme />
        <Portfolio />
      </div>
  )
}

export default App
