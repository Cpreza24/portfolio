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
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let timeout;
    if (messageSent || errorMessage) {
      timeout = setTimeout(() => {
        setMessageSent(false);
        setErrorMessage('');
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [messageSent, errorMessage]);

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
        'service_0n987ad',
        'template_q7c02rd',
        {
          name: formData.name,
          from: formData.email,
          message: formData.message,
          reply_to: formData.email
        },
        'nlEcsr6sTB2vWFrc0'
      );

      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setMessageSent(true);
      setErrorMessage('');
    } catch (error) {
      console.error('Failed to send email:', error);
      console.log('Error details:', {
        serviceID: 'service_0n987ad',
        templateID: 'template_q7c02rd',
        formData: formData
      });
      setErrorMessage('Failed to send message. Please try again.');
      setMessageSent(false);
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

            <div className="submit-container">
              <button type="submit" className="submit-button">
                Send Message
              </button>
              {messageSent && (
                <p className="show-message sent">Message Sent Successfully! ✔</p>
              )}
              {errorMessage && (
                <p className="show-message error">{errorMessage}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
