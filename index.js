const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const bannerFood = require('./data/BannerFood.json')

app.get('/', (req, res) => {
    res.send('Welcome')
})
// https://seoul-kitchenista-server-apurbahasanj.vercel.app/

app.get('/banner-food', (req, res) => {
    res.send(bannerFood)
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})