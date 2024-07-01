const axios = require("axios");

exports.getHello = async (req, res) => {
  try {
    const ip = await axios.get(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.API_KEY}&ip_address=62.173.47.18`
    );
    const { ip_address, country } = ip.data;

    res.status(200).json({
      client_ip: `${ip_address}`, // The IP address of the requester
      location: `${country}`, // The city of the requester
      greeting: `Hello, ${process.env.USERNAME}!, the temperature is 11 degrees Celcius in ${country}`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
