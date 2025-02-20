const apiKey = "16f6dbcdfe4723e076394b1753066975";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search i")
const weatherIcon = document.querySelector(".weather-img img")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".weather-city").innerHTML = data.name;
    document.querySelector(".weather-temp").innerHTML = Math.round(data.main.temp) + "°C"; 
    document.querySelector(".humidity-percent").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/6122/6122714.png"
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-10.png"
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png.png"
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "https://static-00.iconduck.com/assets.00/weather-mist-icon-512x440-ba9acl87.png`"
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
