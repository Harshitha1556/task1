import "../index.css"

const Contact = () => {
  return (
    <div className="contact container">
      <h2>Contact Us</h2>
      <p>Have questions? Reach out to us using the form below.</p>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea rows="5" placeholder="Your Message"></textarea>
      <button>Send Message</button>
    </div>
  );
};

export default Contact;
