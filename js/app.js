const API_KEY = `fd2ad76f3f380172e79ed4d3497b4e19`;
const searchTepmerature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = temperature => {
    console.log(temperature);
}