const { params, body } = require('express-validator');
const { getWeather, getCustomWeather } = require('../controllers/weather');

const getWeatherValidator = params('city').exists();
const getCustomWeatherValidator = [body('city').exists(), body('temperatureScale').exists()];


module.exports = function(app) {

    // Get weather for city

    app.get('/weather/:city', getWeatherValidator, async (req, res) => {
        try {
            const weatherObject = await getWeather(req, res);
            res.status(200).json(weatherObject);
        } catch (error) {
            res.status(500).end(error);
        }
    });

    // Get custom weather for city

    app.post('/weather', getCustomWeatherValidator, (req, res) => {
        try {
            const weatherObject = await getCustomWeather(req, res);
            res.status(200).json(weatherObject);
        } catch (error) {
            res.status(500).end(error);
        }
    });
};