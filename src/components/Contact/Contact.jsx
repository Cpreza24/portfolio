import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    let timeout;
    if (messageSent) {
      timeout = setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [messageSent]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await emailjs.send(
        'service_qew7z7f', // Replace with your EmailJS service ID
        'template_t9893xd', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'nlEcsr6sTB2vWFrc0' // Replace with your EmailJS public key
      );

      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setMessageSent(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      // You might want to show an error message to the user here
    }
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          I'm currently open to new opportunities and collaborations.
          Whether you have a question or just want to say hi, I'll be sure to get back to you!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <a
              href="mailto:cpreza93@yahoo.com"
              className="contact-email"
            >
              cpreza93@yahoo.com
            </a>
            <p className="contact-location">Los Angeles, CA</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
            {messageSent && (
              <p className="show-message sent">Message Sent ✔</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
