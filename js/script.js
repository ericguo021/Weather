var data;

document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '6b584840a1d7a622cee7ec89bae4a42a';  // Replace with your OpenWeatherMap API key
    const city = 'Boston';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const weather = document.getElementById('weather');
            weather.innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('weather').innerHTML = '<p>Failed to load data. Please try again later.</p>';
        });
});