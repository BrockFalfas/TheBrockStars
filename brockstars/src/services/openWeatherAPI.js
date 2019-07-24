import axios from "axios";

const client = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather"
});

export default {
    getCurrentWeatherByCity(cityName, countryCode) {
        return client.get(`?q=${cityName},${countryCode}`)
    }
}
