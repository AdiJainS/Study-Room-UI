import BookingManager from "./BookingManager";

function Slot({ room_Id, time, refresh }) {
  const booked = BookingManager.isBooked(room_Id, time);
  const handleClick = () => {
    if (booked) {
      alert("Your room is booked");
      return;
    }
    BookingManager.bookSlot(room_Id, time);
    refresh();
  };

  return (
    <div
      className={`Slot ${booked ? "booked" : "available"}`}
      onClick={handleClick}
    >
      {time}
    </div>
  );
}
export default Slot;
