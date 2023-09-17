import "./App.css";
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
import BookingPage from "./pages/BookingPage";
import { useState } from "react";

import { Route, Routes } from "react-router-dom";

function App() {
  const [time, setTime] = useState("");

  const availableTimes = useState([
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
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
          <Route
            path="/booking"
            element={<BookingPage someTime={availableTimes} />}
          />
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
