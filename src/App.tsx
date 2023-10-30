import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar/Navbar.tsx'
import MainBlock from './components/maincontainer/MainContainer.tsx'
import Portfolio from './components/portfolio/Portfolio.tsx'
import Socials from './components/socials/Socials.tsx'

function App() {

  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainBlock/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
    </Router>
    <Socials />
    </>
  )
}

export default App
