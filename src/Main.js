import salad from "./assets/Greek Salad.png";
import bruschetta from "./assets/Bruschetta.png";
import lemonCake from "./assets/Lemon Cake.png";
import platter from "./assets/platter.png";
import jane from "./assets/Jane.png";
import jack from "./assets/Jack.png";
import david from "./assets/David.png";
import cook from "./assets/cook.png";
import fish from "./assets/fish.png";

function Main() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingBottom: "40px",
          marginLeft: "10%",
          marginRight: "10%",
          backgroundColor: "#495E57",
          gap: "40px",
        }}
      >
        <div>
          <h1 style={{ color: "#F4CE14", fontSize: "4em" }}>Little Lemon</h1>
          <h2 style={{ color: "#F4CE14", fontSize: "2.5em" }}>Chicago</h2>
          <p style={{ color: "white", fontSize: "1.5em", fontWeight: "bold" }}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button
            style={{
              backgroundColor: "#F4CE14",
              border: "none",
              width: "300px",
              height: "80px",
              fontSize: "2em",
              borderRadius: "12px",
              fontWeight: "bold",
              fontFamily: "inherit",
            }}
          >
            Book a table
          </button>
        </div>
        <div style={{ padding: "20px 0px 20px 40px" }}>
          <img
            style={{
              height: "100%",
              width: "100%",
              border: "1px solid",
              marginLeftLeft: "40px",
            }}
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <h1 style={{ fontSize: "2.5em" }}>Specials</h1>
          <button
            style={{
              backgroundColor: "#F4CE14",
              border: "none",
              width: "300px",
              height: "80px",
              fontSize: "2em",
              borderRadius: "12px",
              fontWeight: "bold",
              fontFamily: "inherit",
            }}
          >
            Order Online
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "60px",
          }}
        >
          <div
            style={{
              backgroundColor: "#D9D9D9",
            }}
          >
            <div>
              <img
                style={{ height: "100%", width: "100%" }}
                src={salad}
                alt="greek salad"
              />
            </div>
            <div
              style={{
                padding: "0px 10px 10px 10px",
                backgroundColor: "#D9D9D9",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Greek Salad</h2>
                <p
                  style={{
                    color: "#D79310",
                    fontWeight: "bold",
                    fontSize: "1.3em",
                  }}
                >
                  10€
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Order a delivery!
              </p>
            </div>
          </div>

          <div style={{ backgroundColor: "#D9D9D9" }}>
            <div>
              <img
                style={{ height: "100%", width: "100%" }}
                src={bruschetta}
                alt="bruschetta"
              />
            </div>
            <div style={{ padding: "0px 10px 10px 10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Bruschetta</h2>
                <p
                  style={{
                    color: "#D79310",
                    fontWeight: "bold",
                    fontSize: "1.3em",
                  }}
                >
                  10€
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Order a delivery!
              </p>
            </div>
          </div>
          <div style={{ backgroundColor: "#D9D9D9" }}>
            <div>
              <img
                style={{ height: "100%", width: "100%" }}
                src={lemonCake}
                alt="lemon cake"
              />
            </div>
            <div style={{ padding: "0px 10px 10px 10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Lemon Cake</h2>
                <p
                  style={{
                    color: "#D79310",
                    fontWeight: "bold",
                    fontSize: "1.3em",
                  }}
                >
                  10€
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p style={{ fontWeight: "bold", textDecoration: "underline" }}>
                Order a delivery!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#495E57",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingTop: "10px",
          paddingBottom: "40px",
          marginLeft: "10%",
          marginRight: "10%",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#F4CE14" }}>Testimonials</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "60px",
          }}
        >
          <div
            style={{
              border: "1px solid",
              backgroundColor: "white",
              padding: "0px 10px 10px 10px",
              borderRadius: "12px",
            }}
          >
            <h2>Jane</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <img src={jane} />
              </div>
              <div>5</div>
              <div>star</div>
            </div>
            <p>Good food and excellent service!</p>
          </div>
          <div
            style={{
              border: "1px solid",
              backgroundColor: "white",
              padding: "0px 10px 10px 10px",
              borderRadius: "12px",
            }}
          >
            <h2>Jack</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <img src={jack} />
              </div>
              <div>4</div>
              <div>star</div>
            </div>
            <p>The service could have been better!</p>
          </div>
          <div
            style={{
              border: "1px solid",
              backgroundColor: "white",
              padding: "0px 10px 10px 10px",
              borderRadius: "12px",
            }}
          >
            <h2>David</h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <img src={david} />
              </div>
              <div>5</div>
              <div>star</div>
            </div>
            <p>An amazing experience!</p>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          backgroundColor: "white",
          marginLeft: "10%",
          marginRight: "10%",
          gap: "50px",
          padding: "20px 40px 20px 40px",
        }}
      >
        <div>
          <h1 style={{ color: "#F4CE14", fontSize: "3.5em" }}>Little Lemon</h1>
          <h2 style={{ fontSize: "2.5em" }}>Chicago</h2>
          <p style={{ fontSize: "1.5em" }}>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: "100px",
            paddingTop: "100px",
            marginRight: "-100px",
          }}
        >
          <div style={{}}>
            <img src={fish} />
          </div>
          <div
            style={{ position: "relative", bottom: "100px", right: "100px" }}
          >
            <img src={cook} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
