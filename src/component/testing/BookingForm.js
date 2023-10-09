import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    date: '',
    time: '17:00', // Default to the first available time
    guests: '',
    occasion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions here, like sending the form data to an API
    console.log(formData);
  };

  return (
    <form
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      >
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <input
        type="text"
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      />
      <button type="submit">Submit reservation</button>
    </form>
  );
}

export default BookingForm;