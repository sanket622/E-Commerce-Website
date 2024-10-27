const paypal = require("paypal-rest-sdk");
const dotenv = require("dotenv");

dotenv.config();
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
paypal.configure({
  mode: "sandbox",
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
});

module.exports = paypal;
