import jane from "../assets/Jane.png";
import jack from "../assets/Jack.png";
import david from "../assets/David.png";
import star from "../assets/star.png";

function Testimonials() {
  return (
    <div>
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
    </div>
  );
}

export default Testimonials;
