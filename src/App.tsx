import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.tsx";
import Portfolio from "./components/portfolio/Portfolio.tsx";
import HomePage from "./components/home/HomePage.tsx";
import CareerPage from "./components/career/CareerPage.tsx";
import NotFoundPage from "./components/error/NotFoundPage.tsx";

function App() {
  const setOverflowVisible = (visible: boolean) => {
    document.body.style.overflow = visible ? "visible" : "hidden";
  };

  return (
    <div className="app-overflow-visible">
      <Navbar
        menuVisibilityChanged={(visible) => {
          setOverflowVisible(visible);
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
