function Main() {
  return (
    <main>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "#495E57" }}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Book a table</button>
        </div>
        <div>{/* image */}</div>
      </div>

      <div>
        <div style={{ display: "flex" }}>
          <h1>Specials</h1>
          <button>Order Online</button>
        </div>

        <div style={{ display: "flex" }}>
          <div>
            <h2>Greek Salad</h2>
          </div>
          <div>
            <h2>Bruschetta</h2>
          </div>
          <div>
            <h2>Lemon Cake</h2>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#495E57" }}>
        <h1>Testimonials</h1>
        <div style={{ display: "flex" }}>
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

      <div style={{ display: "flex" }}>
        <div>
          <h1>Little Lemon</h1>
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
