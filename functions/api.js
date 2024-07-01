const express = require("express");
const axios = require("axios");
const serverless = require("serverless-http");
// const helloRoute = require("./routes/helloRoutes");
const app = express();
const router = express.Router();

router.get("/hello", async (req, res) => {
  try {
    const { visitor_name } = req.query;
    const ip = await axios.get(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.API_KEY}&ip_address=62.173.47.18`
    );

    const { ip_address, country } = ip.data;
    res.status(200).json({
      client_ip: `${ip_address}`, // The IP address of the requester
      location: `${country}`, // The city of the requester
      greeting: `Hello, ${visitor_name}!, the temperature is 11 degrees Celcius in ${country}`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
