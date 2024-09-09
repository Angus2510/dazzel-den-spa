import React from "react";
import AddBooking from "./Components/addBooking";
import GetBookings from "./Components/getBookings";
import EditBooking from "./Components/editBooking";
import DeleteBooking from "./Components/deleteBooking";

const App = () => {
  return (
    <div>
      <h1>Booking Management</h1>
      <AddBooking />
      <GetBookings />
      <EditBooking />
      <DeleteBooking />
    </div>
  );
};

export default App;
