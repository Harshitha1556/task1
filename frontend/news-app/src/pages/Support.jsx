import "../index.css"

const Support = () => {
  return (
    <div className="support container">
      <h2>Support</h2>
      <p>If you are facing issues or need help, please contact us.</p>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea rows="5" placeholder="Describe your issue"></textarea>
      <button>Submit</button>
    </div>
  );
};

export default Support;
