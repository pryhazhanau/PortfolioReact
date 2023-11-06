import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Navbar from './components/navbar/Navbar.tsx'
import Portfolio from './components/portfolio/Portfolio.tsx'
import Socials from './components/socials/Socials.tsx'
import HomePage from './components/home/HomePage.tsx'
import CareerPage from './components/career/CareerPage.tsx'
import NotFoundPage from './components/error/NotFoundPage.tsx'

function App() {
  return (
    <>
        <Navbar/>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/career" element={<CareerPage/>}/>
          <Route path="/404-not-found" element={<NotFoundPage/>}/>
          <Route path="/*" element={<NotFoundPage/>}/>
        </Routes>
        </BrowserRouter>
      <Socials />
    </>
  )
}


export default App
