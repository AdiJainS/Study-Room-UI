# Bookuroom Study Room Booking UI
Website Link : [Bookuroom](https://bookuroom.netlify.app/)

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

### BookingManager.jsx :

This ensures booking and no double hooks are made . It also handles local storage ( ie booking is stored after refresh).

```
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
```
This code block helps to get the booking by converting the string to object (JSON.parse), then saving the booking by converting it to object to string (JSON.stringify) , and then checking if a particular slot is booked already.

After that we create bookSlot() ,in which a unique key is created checking if that key / room already exists helping to prevent double booking . Booking can be removed later too by unbooking.

### Slot.jsx

The reason we imported BookingManager is that to use the logic of it . Initially we defined a function with the props of Room id , time  , refresh . Then we check the booking status .We need to handle the clicks as well , hence a const is defined for it to prevent rebooking at the same time . We also need to make the UI re-render , so that new bookings are reflected.

### Room.jsx

Initially we imported slot and react . Then props of Room , slots , refresh are created . Room will contain the details of the room (id,name,capacity etc.. ) , slots will be the time .
```
const [roomSlots, setRoomSlots] = React.useState(slots);
```
This stores all the slots of the rooms , and uses local state so changes are not affected automatically . 

We then require logic so add out own manual slot . 
```
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
  }
  ```
This new slot logic prevents input of invalid time , also it checks duplicate slots ,details of the room etc.

We then created room container , which contains image of the room .

### App.jsx

After importing all the necessary things , we triggered re-rendere again . 
```
const refresh = () => {
  setUpdate((u) => u + 1);
};
```
By this , everytime refresh is called , update changes and rerednering happens.

Filters are also setup for people and accn to room type (for example if a person choses 5 , then Study room for 4 will not be shown) , room type. Also reset booking feature is added. 
Slot creation logic was shifted in room so that design can be better.

Appropriate conditions  of filter , room types are set. Options are created for room types using dropdowns, and a reset button is also created , rooms are rendered etc.

```
onChange={(e) => setRoomType(e.target.value)}
```
here e -- > event object
.target -- > select element
.value -- > option selected

# Improvements 
1.User authentication

2.Backend

3.Calender , proper dashboard , report options etc.

#Author
Developed by Adi Jain

#License
This project is open-source and available under the MIT License.



