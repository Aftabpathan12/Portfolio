import React from "react";
import "./FormStyles.css";

const Form = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Get In Touch</h1>
      <p className="contact-text">
        Have a project in mind? Let's connect and discuss how we can bring your ideas to life.
      </p>
      
      <div className="contact-form">
        <form>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
      
      <div className="contact-info">
        <p><strong>Email:</strong> Pathanaftb536@gmail.com</p>
        <p><strong>Phone:</strong> +738 501 1476</p>
        <p><strong>Location:</strong> Mumbai, Mharashtra</p>
      </div>
    </div>
  );
};

export default Form;
