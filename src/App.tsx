import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./common/css/section.css"

import Navbar from "./components/navbar/Navbar.tsx";
import ProjectsPage from "./pages/projects-page/ProjectsPage.tsx";
import HomePage from "./pages/home-page/HomePage.tsx";
import CareerPage from "./pages/career-page/CareerPage.tsx";
import NotFoundPage from "./components/error/NotFoundPage.tsx";
import { useState } from "react";

function App() {
  const setOverflowVisible = (visible: boolean) => {
    document.body.style.overflow = visible ? "visible" : "hidden";
  };

  const [error404Visible, setError404Visible] = useState(false)

  return (
    <div className="app-overflow-visible">
      <Navbar
        mobileMenuVisibilityChanged={(visible) => {
          setOverflowVisible(visible);
        }}
        visible={!error404Visible}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/*" element={<NotFoundPage onMount={() => { setError404Visible(true) }} onUnmount={() => {setError404Visible(false)}}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
