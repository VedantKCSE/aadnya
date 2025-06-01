import React from 'react'
// react router dom
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
