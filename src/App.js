import "./App.css";
import Header from "./pages/Header.js";
import Nav from "./pages/Nav.js";
import Main from "./pages/Main.js";
import Footer from "./pages/Footer.js";
import Specials from "./pages/Specials.js";
import Testimonials from "./pages/Testimonials.js";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservation from "./pages/Reservation";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/orderOnline" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
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
