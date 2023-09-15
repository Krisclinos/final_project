function Reservation() {
  return (
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
      <h1>Reservation</h1>
      <div style={{ display: "flex", gap: "50px" }}>
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
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Reservation;
