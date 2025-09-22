import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());

const API_KEY = process.env.NEWS_API_KEY; // your API key
const BASE_URL = "https://newsapi.org/v2/everything";

app.get("/api/news", async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  try {
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "ok") {
      console.error("News API Error:", data);
      return res.json({ articles: [] });
    }

    res.json({ articles: data.articles || [] });
  } catch (err) {
    console.error("Backend Error:", err);
    res.json({ articles: [] });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
