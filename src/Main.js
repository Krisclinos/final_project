import salad from "./assets/Greek Salad.png";
import bruschetta from "./assets/Bruschetta.png";
import lemonCake from "./assets/Lemon Cake.png";
import platter from "./assets/platter.png";
import jane from "./assets/Jane.png";
import jack from "./assets/Jack.png";
import david from "./assets/David.png";
import cook from "./assets/cook.png";
import fish from "./assets/fish.png";
import star from "./assets/star.png";

function Main() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingBottom: "40px",
          marginLeft: "10%",
          marginRight: "10%",
          backgroundColor: "#495E57",
        }}
      >
        <div style={{ maxWidth: "30%" }}>
          <h1
            style={{
              color: "#F4CE14",
              fontSize: "5em",
              fontFamily: "Markazi Text",
              fontWeight: "bold",
            }}
          >
            Little Lemon
          </h1>
          <h2
            style={{
              color: "#F4CE14",
              fontSize: "3em",
              fontFamily: "Markazi Text",
            }}
          >
            Chicago
          </h2>
          <p
            style={{
              color: "white",
              fontSize: "1.5em",
              fontWeight: "bold",
              fontFamily: "Karla",
            }}
          >
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
              fontFamily: "Karla",
            }}
          >
            Book a table
          </button>
        </div>
        <div
          style={{
            padding: "20px 0px 20px 0px",
            marginLeft: "100px",
            minWidth: "10%",
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              border: "1px solid",
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
          <h1 style={{ fontSize: "2.5em", fontFamily: "Markazi Text" }}>
            Specials
          </h1>
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
                <h2
                  style={{
                    fontFamily: "Karla",
                  }}
                >
                  Greek Salad
                </h2>
                <p
                  style={{
                    color: "#D79310",
                    fontWeight: "bold",
                    fontSize: "1.3em",
                    fontFamily: "Karla",
                  }}
                >
                  10€
                </p>
              </div>
              <p
                style={{
                  fontFamily: "Karla",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  fontFamily: "Karla",
                }}
              >
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
                <h2 style={{ fontFamily: "Karla" }}>Bruschetta</h2>
                <p
                  style={{
                    color: "#D79310",
                    fontWeight: "bold",
                    fontSize: "1.3em",
                    fontFamily: "Karla",
                  }}
                >
                  10€
                </p>
              </div>
              <p style={{ fontFamily: "Karla" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  fontFamily: "Karla",
                }}
              >
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
            <div style={{ padding: "0px 10px 10px 10px", fontFamily: "Karla" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
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
              <p
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
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
            fontFamily: "Karla",
          }}
        >
          <div
            style={{
              border: "1px solid",
              backgroundColor: "white",
              padding: "0px 10px 10px 10px",
              borderRadius: "12px",
              minWidth: "20%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2 style={{ paddingRight: "20px" }}>Jane</h2>
              <p style={{ fontWeight: "bold", fontSize: "1.5em" }}>5</p>
              <img src={star} />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <img src={jane} />
              </div>
            </div>
            <p style={{ fontWeight: "bold" }}>
              Good food and excellent service!
            </p>
          </div>
          <div
            style={{
              border: "1px solid",
              backgroundColor: "white",
              padding: "0px 10px 10px 10px",
              borderRadius: "12px",
              minWidth: "20%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2 style={{ paddingRight: "20px" }}>Jack</h2>
              <p style={{ fontWeight: "bold", fontSize: "1.5em" }}>5</p>
              <img src={star} />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <img src={jack} />
              </div>
            </div>
            <p style={{ fontWeight: "bold" }}>
              The service could have been better!
            </p>
          </div>
          <div
            style={{
              border: "1px solid",
              backgroundColor: "white",
              padding: "0px 10px 10px 10px",
              borderRadius: "12px",
              minWidth: "20%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2 style={{ paddingRight: "20px" }}>David</h2>
              <p style={{ fontWeight: "bold", fontSize: "1.5em" }}>5</p>
              <img src={star} />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <img src={david} />
              </div>
            </div>
            <p style={{ fontWeight: "bold" }}>An amazing experience!</p>
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
          <h1
            style={{
              color: "#F4CE14",
              fontSize: "3.5em",
              fontFamily: "Markazi Text",
            }}
          >
            Little Lemon
          </h1>
          <h2 style={{ fontSize: "2.5em", fontFamily: "Markazi Text" }}>
            Chicago
          </h2>
          <p style={{ fontSize: "1.5em", fontFamily: "Karla" }}>
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
