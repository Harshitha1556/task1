import React, { useState } from 'react';
import "../index.css"

const News = () => {
  const [city, setCity] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchNews = async () => {
    if (!city) {
      setError('Please enter a city name.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch(`http://localhost:5000/api/news?city=${encodeURIComponent(city)}`);
      const data = await res.json();

      if (Array.isArray(data.articles)) {
        setArticles(data.articles);
        if (data.articles.length === 0) setError('No news found for this city.');
      } else {
        setArticles([]);
        setError('Failed to fetch news.');
      }
    } catch (err) {
      console.error(err);
      setArticles([]);
      setError('Network error occurred.');
    }

    setLoading(false);
  };

  return (
    <div className="news container">
      <h1 className="text-3xl font-bold mb-6">US City News</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a US city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchNews}>Get News</button>
      </div>

      {loading && <p>Loading news...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
            <h2>{article.title}</h2>
            <p>{article.description || 'No description available.'}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
