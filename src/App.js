import React from 'react'
// react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css' // Import your main CSS file
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import Register from './pages/Register'
import Programs from './pages/Programs'
import About from './pages/About'
import Gallary from './pages/Gallary.jsx'
import Supporters from './pages/Supporters'

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/supporters" element={<Supporters />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </Router>
  )
}

export default App
