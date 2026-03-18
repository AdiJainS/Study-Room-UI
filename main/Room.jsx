import Slot from "./Slot";
import React,{useState} from "react";


function Room({ room, slots, refresh }) {
  const [roomSlots, setRoomSlots] = React.useState(slots);

  const [startTime, setStartTime] = React.useState("");
  const [endTime, setEndTime] = React.useState("");

  const handleAddSlot = () => {
    if (!startTime || !endTime || startTime >= endTime) {
      alert("Invalid time");
      return;
    }

    const newSlot = `${startTime}–${endTime}`;

    setRoomSlots((prev) => {
      if (prev.includes(newSlot)) {
        alert("Already exists");
        return prev;
      }
      return [...prev, newSlot];
    });

    setStartTime("");
    setEndTime("");
  };

  return (
    <div className="room">
      <img src={room.image} alt={room.name} className="roomImage"/>
      <div className="room-right">
        <h3>{room.name}</h3>
        <p>Capacity: {room.capacity}</p>
        <p>Type: {room.type}</p>
      
        <div className="slots">
          {roomSlots.map((slot) => (
            <Slot key={slot} room_Id={room.id} time={slot} refresh={refresh} />
          ))}
        </div>

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
        </div>
      </div>
    </div>
  );
}

export default Room;