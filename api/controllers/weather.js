var weather = require('weather-js');
const { pick } = require('lodash');

// Define objects properties
const locationProperties = [ 
    'name', 'lat', 'long', 'degreetype'
];
const currentWeatherProperties = [
    'temperature', 'skytext', 'date', 'observationtime', 'feelslike', 'winddisplay', 'imageUrl'
];
const forecastWeatherProperties = [
    'low', 'high', 'skytextday', 'date', 'day', 'precip'
]


const getWeather = async (req, res) => {
    const city = req.params.city;
    const defaultTemperatureScale = 'C';
    return getWeatherHandler(city, defaultTemperatureScale);
}


const getCustomWeather = async (req, res) => {
    const city = req.body.city;
    const temperatureScale = req.body.temperatureScale;
    return getWeatherHandler(city, temperatureScale);
}


const getWeatherHandler = async (city, degreeType) => {
    return new Promise((resolve,reject) => {
        weather.find({ search: city, degreeType: degreeType },
            (error, result) => {
                if(error) 
                    reject(error);

                const weatherData = result.pop();
                if (result && weatherData) {
                    const location = pick(weatherData.location, locationProperties);
                    const currentWeather = pick(weatherData.current, currentWeatherProperties);
                    const forecasts = weatherData.forecast.map(forecast =>
                        pick(forecast, forecastWeatherProperties)
                    );

                    resolve({
                        locationObject: location,
                        currentWeatherObject: currentWeather,
                        forecastWeatherObject: forecasts
                    });
                } else
                    reject('City not found!');

            }
        );
    });
}


exports.getWeather = getWeather;
exports.getCustomWeather = getCustomWeather;
