import salad from "./assets/Greek Salad.png";
import bruschetta from "./assets/Bruschetta.png";
import lemonCake from "./assets/Lemon Cake.png";
import platter from "./assets/platter.png";

function Main() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "40px",
          paddingRight: "40px",
          marginLeft: "10%",
          marginRight: "10%",
          backgroundColor: "#495E57",
        }}
      >
        <div>
          <h1 style={{ color: "#F4CE14" }}>Little Lemon</h1>
          <h2 style={{ color: "#F4CE14" }}>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button style={{ backgroundColor: "#F4CE14" }}>Book a table</button>
        </div>
        <div style={{ padding: "20px 40px 20px 0px" }}>
          <img
            style={{ height: "100%", width: "100%" }}
            src={platter}
            alt="platter"
          />
        </div>
      </div>

      <div
        style={{
          paddingLeft: "40px",
          paddingRight: "40px",
          marginLeft: "10%",
          marginRight: "10%",
          backgroundColor: "white",
          paddingBottom: "40px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Specials</h1>
          <button style={{ backgroundColor: "#F4CE14" }}>Order Online</button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "60px",
          }}
        >
          <div style={{ border: "1px solid", backgroundColor: "white" }}>
            <div>
              <img
                style={{ height: "100%", width: "100%" }}
                src={salad}
                alt="greek salad"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Greek Salad</h2>
              <p>10€</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>Order a delivery!</p>
          </div>

          <div style={{ border: "1px solid", backgroundColor: "white" }}>
            <div>
              <img
                style={{ height: "100%", width: "100%" }}
                src={bruschetta}
                alt="bruschetta"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Bruschetta</h2>
              <p>10€</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>Order a delivery!</p>
          </div>
          <div style={{ border: "1px solid", backgroundColor: "white" }}>
            <div>
              <img
                style={{ height: "100%", width: "100%" }}
                src={lemonCake}
                alt="lemon cake"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Lemon Cake</h2>
              <p>10€</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>Order a delivery!</p>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#495E57",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingTop: "10px",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#F4CE14" }}>Testimonials</h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <h2>Jane</h2>
          </div>
          <div>
            <h2>Jack</h2>
          </div>
          <div>
            <h2>David</h2>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          paddingLeft: "40px",
          paddingRight: "40px",
          backgroundColor: "white",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <div>
          <h1 style={{ color: "#F4CE14" }}>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </p>
        </div>
        <div></div>
      </div>
    </main>
  );
}

export default Main;
