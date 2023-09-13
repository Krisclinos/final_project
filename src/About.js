import cook from "./assets/cook.png";
import fish from "./assets/fish.png";

function About() {
  return (
    <div>
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
    </div>
  );
}

export default About;
