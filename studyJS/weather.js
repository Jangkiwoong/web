const cityApi = document.querySelector("#weather span:first-child");
const weatherApi = document.querySelector("#weather span:last-child")

const API_KEY = ""
const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_KEY}`

onGeoOk = (position) => {
    const x = position.coords.longitude;
    const y = position.coords.latitude;
    console.log("You live in x = ", x, " y = ",y);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${y}&lon=${x}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json().then(data => {
        const name = data.name
        const weather = `${data.weather[0].main} / ${data.main.temp}`;
        cityApi.innerText = name;
        weatherApi.innerText = weather;
    }));
}
 
onGeoError = () => {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);