const express = require('express');                     // Importataan express express-muuttujaan
const mongoose = require('mongoose');                   // Otetaan käyttöön mongoose, jolla hallitaan tietokantaa
const app = express();                                  // Otetaan käyttöön varsinainen express -kehys
require('express-async-errors');                        // MIDDLEWARE, ei tarvi kokoajan tehdä try-catch-routereissa
const cors = require('cors');                           // Otetaan käyttöön cors
const logger = require('./utils/logger.js');            // Käytetään console.login sijaan
const config = require('./utils/config.js');            // Sisältää erilaisia asetuksia
const middleware = require('./utils/middleware');       // Sisältää erilaisia middlewareja, joita otetaan alla käyttöön
const blogsRouter = require('./controllers/blog.js');   // Router, joka ohjaa pyyntöjä 
const usersRouter = require('./controllers/user.js');   // Router, joka ohjaa pyyntöjä
const loginRouter = require('./controllers/login.js');

logger.info('Connecting to MongoDB. . .');
mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('Connected to MongoDB!');
    })
    .catch(() => {
        logger.info('Connection to MongoDB failed!');
    });

app.use(cors());                                        // MIDDLEWARE, sallii different origin pointin
app.use(express.static('build'));						// MIDDLEWARE, ohjaa pyynnöt /build/
app.use(express.json());                                // MIDDLEWARE, parsii tulevaa tietoa helpompilukuiseksi

app.use(middleware.getTokenFrom);                       // MIDDLEWARE, hakee tokenin authorization headerista, jos sellainen on

app.use('/api/login', loginRouter);
app.use('/api/users', usersRouter);                     // MIDDLEWARE, joka käsittelee GET, POST, DELETE, PUT ym. pyyntöjä

app.use('/api/blogs', middleware.validateTokenGetUser, blogsRouter);    // MIDDLEWARE, joka käsittelee GET, POST, DELETE, PUT ym. pyyntöjä.
                                                                        // Sisältää myös middleware validateTokenGetUser, joka hakee get, post ja delete
                                                                        // routeille käyttäjän hyödyntämällä middlewarea getTokenFrom

if(process.env.NODE_ENV === 'test')
{
    const testRouter = require('./controllers/test');
    app.use('/api/testing', testRouter);
}

app.use(middleware.unknownEndpoint);                    // MIDDLEWARE, joka käsittelee jos pyyntö on kohdistunut tuntemattomaan osoitteeseen
app.use(middleware.errorHandler);                       // MIDDLEWARE, joka käsittelee virheitä

module.exports = app;
