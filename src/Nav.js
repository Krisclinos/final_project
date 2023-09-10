import logo from "./assets/Logo.png";

function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        padding: "10px 40px 10px 40px",
        gap: "100px",
      }}
    >
      <img style={{ height: "40px" }} src={logo} alt="lemon" />
      <ul
        style={{
          display: "flex",
          gap: "50px",
          listStyle: "none",
          paddingLeft: "0",
          textDecoration: "none",
          fontWeight: "500",
          paddingRight: "20px",
        }}
      >
        <li>
          <a style={{ textDecoration: "none", color: "#000000" }} href="">
            Home
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none", color: "#000000" }} href="">
            About
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none", color: "#000000" }} href="">
            Menu
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none", color: "#000000" }} href="">
            Reservation
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none", color: "#000000" }} href="">
            Order Online
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none", color: "#000000" }} href="">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
