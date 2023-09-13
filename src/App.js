import "./App.css";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Specials />} />
        </Routes>
      </div>
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
