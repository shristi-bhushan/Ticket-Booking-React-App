import React, { useState, useEffect } from 'react';

const BookingForm = ({ movieName, handleCloseModal }) => {
  const [systemDarkMode, setSystemDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    quantity: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setSystemDarkMode(prefersDarkMode);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("bookingFormData", JSON.stringify(formData));
    console.log("Form Data:", formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      quantity: ''
    });
  };

  const formContainerClassName = `form-container ${systemDarkMode ? 'dark-mode' : ''}`;

  return (
    <>
      <div className={formContainerClassName}>
        <h2>Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="movieName">Movie Name:</label>
            <input type="text" id="movieName" style={{ padding: "1em", fontSize: "1em" }} value={movieName} disabled />
          </div>
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" required value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" required value={formData.phone} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" required value={formData.date} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" min="1" required value={formData.quantity} onChange={handleInputChange} />
          </div>
          <button type="submit">Book Ticket</button>
          <button className="details-page__button" style={{ marginTop: "2rem", marginLeft: "2rem", textAlign: "center" }} onClick={handleCloseModal}>Close</button>
        </form>
      </div>
      {formSubmitted && (
        <div className="form-container">
            <h3 style={{color:"green"}}>Form Submitted ✅</h3>
        </div>
      )}
    </>
  );
};

export default BookingForm;
