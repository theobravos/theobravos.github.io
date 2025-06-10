import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-container"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="100"
    >
      <h2>Let’s Connect</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="contact-form"
      >
        {/* Netlify form hidden input */}
        <input type="hidden" name="form-name" value="contact" />
        
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        
        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>
        
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  );
}