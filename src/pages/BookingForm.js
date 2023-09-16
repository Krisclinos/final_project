import { useState } from "react";

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const availableTimes = [
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  return (
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
      <form
        onSubmit={handleSumbit}
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      >
        <label for="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label for="res-time">Choose time</label>
        <select
          id="res-time "
          value={time}
          onchange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((x) => (
            <option>{x}</option>
          ))}
        </select>
        <label for="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onchange={(e) => setGuests(e.target.value)}
        />
        <label for="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onchange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}

export default BookingForm;
