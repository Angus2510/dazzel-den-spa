import React, { useState } from "react";

const DeleteBooking = () => {
  const [Id, setId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/deleteBookings/${Id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Booking deleted!");
        setId("");
      } else {
        alert("Error deleting booking");
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <input
        type="number"
        placeholder="Booking ID"
        value={Id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <button type="submit">Delete Booking</button>
    </form>
  );
};

export default DeleteBooking;
