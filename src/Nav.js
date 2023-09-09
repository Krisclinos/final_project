import logo from "./assets/Logo.png";

function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "50px",
        alignItems: "center",
        textDecoration: "none",
      }}
    >
      <img src={logo} alt="lemon" />
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "70px",
          listStyle: "none",
          paddingLeft: "0",
          textDecoration: "none",
          fontWeight: "500",
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
