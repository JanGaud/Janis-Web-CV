import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import GhostFx from './script/GhostFx';
import ChicoDetails from './components/Details/Chico'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';


function App() {
  return (
    <Router>
      <RoutesWithNavbar />
      <Footer />
    </Router>
  );
}

function RoutesWithNavbar() {
  let location = useLocation();

  return (
    <div>
      {location.pathname !== "/Chico" && <Navbar />}
      <GhostFx />
      <Routes>
        <Route path="/" element={<>
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </>} />
        <Route path="/Chico" element={<ChicoDetails />} />
      </Routes>
    </div>
  );
}

export default App;