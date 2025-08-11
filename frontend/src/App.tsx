import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LinkedListPage from "./pages/LinkedListPage";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Achievements from "./pages/Achievements";
import About from "./pages/About";
import { ThemeProvider } from "./context/ThemeContext";
import { wakeUpBackend } from "./services/backendApi";

function App() {
  // Wake up backend server when app loads
  useEffect(() => {
    wakeUpBackend();
  }, []);

  return (
    <Router>
      <ThemeProvider>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/linkedlist" element={<LinkedListPage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
