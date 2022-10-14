const cityInput = document.getElementById("input");
const btn = document.querySelector("#add");

apiKey = "75adaa7cc887057971ff05253eefb707"

btn.addEventListener("click", function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&appid='+apiKey)
    .then(response => response.json())
    .then(res => {

        let city = res['name']
        let country = res['sys']['country']
        let temperature = res['main']['temp']
        let minTemp = res['main']['temp_min']
        let maxTemp = res['main']['temp_max']
        let pressure = res['main']['pressure']
        let humidity = res['main']['humidity']
        let icon = res['weather']['0']['icon']
        let description = res['weather']['0']['description']
        let feelsLike = res['main']['feels_like']
        let windSpeed = res['wind']['speed']

        function conversion(val) {
            return (val - 273).toFixed(1)
        }

        document.querySelector("#cityOutput").innerHTML = `${city}, ${country}`
        document.querySelector("#temp").innerHTML = `${conversion(temperature)} &#186 C`
        document.querySelector(".minMax").innerHTML = `&#8595${conversion(minTemp)}&#186 C &nbsp &#8593${conversion(maxTemp)}&#186 C`
        document.querySelector("#press").innerHTML = `${pressure} hPa`
        document.querySelector("#humid").innerHTML = `${humidity} %`
        document.querySelector("#description").innerHTML = `${description}`
        document.querySelector(".fL").innerHTML = `Feels like: ${conversion(feelsLike)}&#186 C`
        document.querySelector(".windspeed").innerHTML = `${windSpeed}km/h`
        
    })
})