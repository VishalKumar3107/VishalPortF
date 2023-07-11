import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Aboutpage from "./pages/Aboutpage";
import Projectpage from "./pages/Projectpage";
import Contactpage from "./pages/Contactpage";

function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/projects" element={<Projectpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
