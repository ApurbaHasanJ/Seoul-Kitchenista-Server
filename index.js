const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// Enable CORS middleware
app.use(cors());

const bannerFood = require("./data/BannerFood.json");
const chef = require("./data/Chef.json");

app.get("/", (req, res) => {
  res.send("Welcome");
});
// https://seoul-kitchenista-server-apurbahasanj.vercel.app/

app.get("/banner-food", (req, res) => {
  res.send(bannerFood);
});

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
