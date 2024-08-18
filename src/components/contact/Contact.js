import React from "react";
import "../../styles/contact/Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <h2>Contact</h2>
      <p>
        Feel free to e-mail me at hire.shawn.harris@gmail.com or use the contact
        form below.
      </p>
      <ContactForm />
    </section>
  );
};

export default Contact;
