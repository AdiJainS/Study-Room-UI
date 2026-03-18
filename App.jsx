import React from "react";
import Room from "./Room";
import BookingManager from "./BookingManager";
import Delta from "./four.avif";
import Sextet from "./six.avif";
import Oracle from "./eight.webp";
import Pavilion from "./ten.webp";

function App() {

  const [update, setUpdate] = React.useState(0);
  const [people, setPeople] = React.useState(1);
  const [roomType, setRoomType] = React.useState("All");

  
  const refresh = () => {
    setUpdate((u) => u + 1);
  };

  const handleResetAll = () => {
    if (window.confirm("Are you sure you want to clear all bookings?")) {
      BookingManager.clearAllBookings();
      refresh();
    }
  };
  


  const rooms = [
    { id: "A", name: "Delta", capacity: 4, type: "Group Study", image: Delta },
    { id: "B", name: "Sextet", capacity: 6, type: "Group Study", image: Sextet },
    { id: "C", name: "Oracle", capacity: 8, type: "Discussion", image: Oracle },
    { id: "D", name: "Pavilion", capacity: 20, type: "Meeting", image: Pavilion },
  ];

  const [slots, setSlots] = React.useState([
    "9:00–12:00",
    "10:00–13:00",
    "11:00–13:00",
    "12:00–15:00",
    "14:00–17:00",
  ]);

  // const [startTime, setStartTime] = React.useState("");
  // const [endTime, setEndTime] = React.useState("");

  
  // const handleAddSlot = () => {
  //   if (!startTime || !endTime || startTime >= endTime) {
  //     alert("Please enter valid start and end times");
  //     return;
  //   }

  //   const newSlot = `${startTime}–${endTime}`;

    // setSlots((prev) => {
    //   if (prev.includes(newSlot)) {
    //     alert("Slot already exists");
    //     return prev;
    //   }
    //   return [...prev, newSlot];
    // });

    // setStartTime("");
    // setEndTime("");
  // };

  
  const filterRooms = rooms.filter(
    (room) =>
      people <= room.capacity &&
      (roomType === "All" || room.type === roomType)
  );

  return (
    <div>

      <h1>Study Room Booking</h1>

{/*      
      <div className="add-slot">
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />

        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />

        <button onClick={handleAddSlot}>Add Slot</button>
      </div> */}

      
      <div className="roomselections">

        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
          <option value="All">All</option>
          <option value="Group Study">Group Study</option>
          <option value="Discussion">Discussion</option>
          <option value="Meeting">Meeting</option>
        </select>

        <label>People</label>

        <input
          type="number"
          min="1"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
        />

        <button onClick={handleResetAll} style={{marginLeft: "10px", backgroundColor: "#ff6b6b", color: "white"}}>Reset All Bookings</button>
      </div>

      
      <div className="roomGrid">
        {filterRooms.map((room) => (
          <Room
            key={room.id}
            room={room}
            slots={slots}
            refresh={refresh}
          />
        ))}
      </div>

    </div>
  );

}
export default App;