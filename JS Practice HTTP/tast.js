const express = require('express');
const axios = require('axios');
const app = express();
const port = 3003;

const apiKey = 'f15c899dd10edcafd270963a806915e5';  // Замените YOUR_API_KEY на ваш API ключ OpenWeatherMap
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locations = [
    { lat: 51.5074, lon: -0.1278, city: 'London' },
    { lat: 40.7128, lon: -74.0060, city: 'New York' },
    { lat: 35.6895, lon: 139.6917, city: 'Tokyo' },
    { lat: 55.7558, lon: 37.6173, city: 'Moscow' },
    { lat: 48.8566, lon: 2.3522, city: 'Paris' }
];

app.get('/status', async (req, res) => {
    const results = [];

    try {
        // 200 - London
        const responseLondon = await axios.get(`${baseUrl}?lat=${locations[0].lat}&lon=${locations[0].lon}&appid=${apiKey}`);
        results.push({
            api: 'OpenWeatherMap',
            city: 'London',
            status: responseLondon.status,
            statusText: responseLondon.statusText
        });
    } catch (error) {
        results.push({
            api: 'OpenWeatherMap',
            city: 'London',
            status: error.response.status,
            statusText: error.response.statusText
        });
    }

    try {
        // 400 - Invalid coordinates (symbols instead of lat/lon)
        const responseInvalid = await axios.get(`${baseUrl}?lat={lat}&lon={lon}&appid=${apiKey}`);
        results.push({
            api: 'OpenWeatherMap',
            city: 'Invalid coordinates',
            status: responseInvalid.status,
            statusText: responseInvalid.statusText
        });
    } catch (error) {
        results.push({
            api: 'OpenWeatherMap',
            city: 'Invalid coordinates',
            status: error.response.status,
            statusText: error.response.statusText
        });
    }

    try {
        // 401 - Unauthorized
        const responseUnauthorized = await axios.get(`${baseUrl}?lat=${locations[4].lat}&lon=${locations[4].lon}&appid=invalid_api_key`);
        results.push({
            api: 'OpenWeatherMap',
            city: 'Paris',
            status: responseUnauthorized.status,
            statusText: responseUnauthorized.statusText
        });
    } catch (error) {
        results.push({
            api: 'OpenWeatherMap',
            city: 'Paris',
            status: error.response.status,
            statusText: error.response.statusText
        });
    }

    try {
        // 300 - Multiple Choices
        const response300 = await axios.get('https://jsonplaceholder.typicode.com/posts/1', { maxRedirects: 0 });
        results.push({
            api: 'JSONPlaceholder',
            city: 'Multiple Choices',
            status: response300.status,
            statusText: response300.statusText
        });
    } catch (error) {
        results.push({
            api: 'JSONPlaceholder',
            city: 'Multiple Choices',
            status: error.response.status,
            statusText: error.response.statusText
        });
    }

    try {
        // 500 - Internal Server Error
        const response500 = await axios.get('https://postman-echo.com/status/500');
        results.push({
            api: 'Postman Echo',
            city: 'ServerError',
            status: response500.status,
            statusText: response500.statusText
        });
    } catch (error) {
        results.push({
            api: 'Postman Echo',
            city: 'ServerError',
            status: error.response.status,
            statusText: error.response.statusText
        });
    }

    res.json(results);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
