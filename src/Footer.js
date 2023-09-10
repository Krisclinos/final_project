import logo2 from "./assets/logo2.png";

function Footer() {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "100px",
          backgroundColor: "#495E57",
          color: "#FFFFFF",
          listStyle: "none",
          paddingRight: "40px",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <img src={logo2} alt="lemon" />
        <div>
          <h2>Doormat Navigation</h2>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>

        <div>
          <h2>Social Media Links</h2>
          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            <li>Facebook</li>
            <li>X</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
