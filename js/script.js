
const studentInfo = document.getElementById('student-info');
const studentID = '200555657';
const studentName = 'Mehakjot Singh Dhaliwal';

studentInfo.innerHTML = `Student ID: ${studentID} <br> Student Name: ${studentName}`;


const apiKey = 'c507b09f1d6620c365f87a0792dbed91'; 
const city = 'London'; 

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
            <h2>Current Weather in London</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].main}</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
