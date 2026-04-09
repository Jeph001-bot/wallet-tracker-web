const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// 🔑 Replace with your API key
const API_KEY = process.env.API_KEY;

const url = `https://go.getblock.asia/2aa6ae3527d84ac1a1fe9e1085cd15cf`;

app.use(express.static("public"));
app.use(express.json());

// API route to get balance
app.post("/balance", async (req, res) => {
  const { address } = req.body;

  try {
    const response = await axios.post(url, {
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: [address, "latest"],
      id: 1,
    });

    const balanceHex = response.data.result;
    const balanceWei = parseInt(balanceHex, 16);
    const balanceEth = balanceWei / 1e18;

    res.json({ balance: balanceEth });

  } catch (error) {
    res.status(500).json({ error: "Error fetching balance" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running`);
});