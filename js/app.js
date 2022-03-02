const API_KEY = `fd2ad76f3f380172e79ed4d3497b4e19`;
const searchTepmerature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
    
    document.getElementById('city-name').value = '';
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    console.log(temperature)
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('whether', temperature.weather[0].main);

    // Display Icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const iconImg = document.getElementById('weather-icon');
    iconImg.setAttribute('src', url)
}