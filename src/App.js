import "./App.css";
import Homepage from "./components/homepage/Homepage";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import { Routes, Route } from "react-router-dom";
import Program from "./components/program/Program";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/program" element={<Program />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
