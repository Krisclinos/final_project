import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        padding: "10px 20px 10px 40px",
        backgroundColor: "white",
        marginLeft: "10%",
        marginRight: "10%",
        gap: "50px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <img style={{ height: "40px" }} src={logo} alt="lemon" />
      </div>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          paddingLeft: "0",
          textDecoration: "none",
          fontWeight: "500",
          paddingLeft: "0px",
          flexShrink: "1",
          fontFamily: "Karla",
          minWidth: "10%",
          justifyContent: "space-evenly",
          gap: "100px",
        }}
      >
        <li>
          <Link
            style={{
              textDecoration: "none",
              color: "#000000",
              flexShrink: "1",
            }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            style={{
              textDecoration: "none",
              color: "#000000",
              flexShrink: "1",
            }}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            style={{
              textDecoration: "none",
              color: "#000000",
              flexShrink: "1",
            }}
            to="/menu"
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            style={{
              textDecoration: "none",
              color: "#000000",
              flexShrink: "1",
            }}
            to="/reservation"
          >
            Reservation
          </Link>
        </li>
        <li>
          <Link
            style={{
              textDecoration: "none",
              color: "#000000",
              flexShrink: "1",
            }}
            to="/orderOnline"
          >
            Order Online
          </Link>
        </li>
        <li>
          <Link
            style={{
              textDecoration: "none",
              color: "#000000",
              flexShrink: "1",
            }}
            to="/login"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
