const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// Enable CORS middleware
app.use(cors());

// banner foods
const bannerFood = require("./data/BannerFood.json");

// chefs data
const chef = require("./data/Chef.json");

// food items
const foodItems = require("./data/FoodItems.json");

app.get("/", (req, res) => {
  res.send("Welcome");
});

// Banner food
app.get("/banner-food", (req, res) => {
  res.send(bannerFood);
});

// our chefs
app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/food-items', (req, res) => {
  res.send(foodItems)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
