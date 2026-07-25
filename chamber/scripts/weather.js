
console.log("Weather loaded");

const apiKey = "12badcfa9b7d3e6074a1c66881825698";

const lat = 38.8816;
const lon = -77.0910;

const weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

const forecastDiv = document.querySelector("#forecast");


const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");

async function getWeather() {
    try {
        const response = await fetch(weatherurl);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        currentTemp.textContent = `${Math.round(data.main.temp)}°F`;
        weatherDesc.textContent = data.weather[0].description;

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}




async function getForecast() {
    try {
        const response = await fetch(forecastURL);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data.list);
        const forecast = data.list.filter(item => item.dt_txt.includes("12:00:00"));
        forecast.slice(0, 3).forEach(day => {
            const p = document.createElement("p");

            const date = new Date(day.dt_txt);
            const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

            p.textContent = `${dayName}: ${Math.round(day.main.temp)}°F`;

            forecastDiv.appendChild(p);

        });

        console.log(forecast);
    } catch (error) {
        console.error(error);
    }
}

getWeather();
getForecast();