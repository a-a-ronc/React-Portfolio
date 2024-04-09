import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h2>Contact</h2>
        <p>Have a question or want to work together? Fill out the form below:</p>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
