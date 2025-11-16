// server/index.js
// must prefix all calls with api
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8000; // Use a different port than React's default 3000
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const app = express();
app.use(express.json());


app.post("/create-secret", async (req, res) => {
  try {
    const response = await fetch("https://api.openai.com/v1/realtime/client_secrets", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        session: {
          type: "realtime",
          model: "gpt-realtime"
        }
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Request failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
