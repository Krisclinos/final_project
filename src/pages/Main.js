import platter from "../assets/platter.png";

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
    </main>
  );
}

export default Main;
