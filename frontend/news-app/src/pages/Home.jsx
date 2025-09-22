import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../index.css"

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h2>Welcome to News App</h2>
      <p>Get the latest news for any US city instantly.</p>
      <button onClick={() => navigate('/news')}>Go to News</button>
    </div>
  );
};

export default Home;
