const inputBox = document.getElementById("input-box");
const searchBtn = document.getElementById("search");

const cityname = document.getElementById("city");
const dateEl = document.getElementById("date");

const temp = document.getElementById("temp");
const minMax = document.getElementById("min-max");
const weather = document.getElementById("weather");
const icon = document.getElementById("icon");

const APIkey = "1eb1512b8939ad3c7f32e8a5c4d40261";



searchBtn.addEventListener("click", async () => {
    const cityName = inputBox.value.trim();
    
    if(cityName === ""){
    alert("Please enter a city name");
    return;
}
    console.log("Searching:", cityName);

    const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`
);

    const data = await response.json();

    console.log(data);

    if (data.cod === "404") {
    alert("City not found");
    return;
}



    cityname.innerHTML = data.name;

   temp.innerHTML = `${Math.round(data.main.temp)}°C`;

   minMax.innerHTML =`${Math.round(data.main.temp_min)}°C (min) / ${Math.round(data.main.temp_max)}°C (max)`;

   weather.innerHTML = data.weather[0].description;
     
   icon.src =`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

   const today = new Date();

   dateEl.innerHTML = today.toDateString();
   inputBox.value = "";
});

inputBox.addEventListener("keydown", (event) => {

    if(event.key === "Enter"){

        searchBtn.click();

    }

});