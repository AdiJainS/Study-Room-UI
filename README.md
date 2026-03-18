# Bookuroom Study Room Booking UI
Click this to go to the website

A simple and interactive Study Room Booking Web App built using React.js. Users can view available rooms, check time slots, and even add custom booking slots dynamically.

#  Features

View multiple study rooms with:

Name , Capacity,Type (Group Study, Discussion, Meeting),Room images,Predefined time slots for each room,Add custom time slots for individual rooms

Prevent:

Invalid time entries,Duplicate slots

Filter rooms based on:
Number of people,Room type

Clean and responsive UI

# Tech Stack

Frontend: React.js

Styling: CSS

State Management: React Hooks (useState)

# Working and Building of this project

Here we will go file by file to understand working of all the components which helped in making of the site.

BookingManager.jsx :

This ensures booking and no double hooks are made . It also handles local storage ( ie booking is stored after refresh).

```getBookings() {
    return JSON.parse(localStorage.getItem("bookings")) || {}; // return empty object if no booking
},
  saveBookings(bookings) {
    localStorage.setItem("bookings", JSON.stringify(bookings));
},
  isBooked(room_Id, slot) {
    const bookings = this.getBookings();
    return bookings[`${room_Id}-${slot}`];
},  ```

This code block helps to get the booking by converting the string to object (JSON.parse), then saving the booking by converting it to object to string (JSON.stringify) , and then checking if a particular slot is booked already.
