import React from 'react'
// react router dom
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
      
    </Router>
  )
}

export default App
