import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from './TicketBookingForm';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const DetailsPage = () => {
  const [show, setShow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShow(data);
      console.log(data);
    }
    fetchData();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  const { name, summary, url } = show;

  const handleBookTicket = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const modalStyles = {
    content: {
      height: "5rem",
      backgroundColor: prefersDarkMode ? "black" : "white"

    }
  };


  return (
    <div className={`details-page ${prefersDarkMode ? "dark-mode" : ""}`}>
      <h2 className="details-page__title">{name}</h2>
      <p className="details-page__summary" dangerouslySetInnerHTML={{ __html: summary }} /> <h2>For more details,
      <a className="details-page__link" href={url}> visit official website</a> </h2>
      
      <button className="details-page__button" style={{marginTop:"2rem", marginRight:"2rem"}} onClick={handleBookTicket}><b>Book Ticket</b></button>
      <button className="details-page__button" style={{marginTop:"2rem"}}><Link to={`/`}><b>Go back</b></Link></button>

      <Modal isOpen={showModal} onRequestClose={handleCloseModal} style={{height: "5rem", backgroundColor:"black"}}>
      <BookingForm movieName={name} handleCloseModal={handleCloseModal}/>
      </Modal>
    </div>
  );
};

export default DetailsPage;