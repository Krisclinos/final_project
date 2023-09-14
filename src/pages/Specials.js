import salad from "../assets/Greek Salad.png";
import bruschetta from "../assets/Bruschetta.png";
import lemonCake from "../assets/Lemon Cake.png";

function Specials() {
  return (
    <div>
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
    </div>
  );
}

export default Specials;
