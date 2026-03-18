// 1. handles booking and ensures there is no double books
// 2. handles local storage

const BookingManager = {
  getBookings() {
    return JSON.parse(localStorage.getItem("bookings")) || {}; // return empty object if no booking
  },
  saveBookings(bookings) {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  },
  isBooked(room_Id, slot) {
    const bookings = this.getBookings();
    return bookings[`${room_Id}-${slot}`];
  },
  bookSlot(room_Id, slot) {
    const bookings = this.getBookings();
    const checkey = `${room_Id}-${slot}`; // key is created to prevent double booking

    if (bookings[checkey]) {
      return false;
    }

    bookings[checkey] = true;
    this.saveBookings(bookings);
    return true;
  },
  unbook(room_Id, slot) {
    const bookings = this.getBookings();
    delete bookings[`${room_Id}-${slot}`];
    this.saveBookings(bookings);
  },
  clearAllBookings() {
    localStorage.removeItem("bookings");
  },
};

export default BookingManager;