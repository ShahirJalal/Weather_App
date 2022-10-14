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
        document.querySelector("#temp").innerHTML = `${conversion(temperature)} &#186C`
        document.querySelector(".minMax").innerHTML = `&#8595 ${conversion(minTemp)} &#186C &nbsp &#8593 ${conversion(maxTemp)} &#186C`
        document.querySelector("#press").innerHTML = `<img id="barometer" src="./barometer.png">`+`${pressure} hPa`
        document.querySelector("#humid").innerHTML = `<img id="droplet" src="./humidity.png">`+`${humidity} %`
        document.querySelector("#description").innerHTML = `${description}`
        document.querySelector(".fL").innerHTML = `Feels like: ${conversion(feelsLike)}&#186C`
        document.querySelector(".windspeed").innerHTML = `<img id="windIcon" src="./wind.png">`+`${windSpeed}km/h`
        document.querySelector("#divIcon").innerHTML = `<img id="wIcon" src="http://openweathermap.org/img/wn/${icon}@2x.png">`
        document.querySelector(".flag").innerHTML = `<img id="flagIcon" src="https://countryflagsapi.com/svg/${country}">`

        let date = new Date();
        
        function displayTime() {

            const time = res['timezone']
            let date = new Date()
            let utc = date.getTime()+(date.getTimezoneOffset()*60000)
            let newDate = new Date(utc+(time*1000))
            let hours = newDate.getHours()
            let minute = newDate.getMinutes()
            let second = newDate.getSeconds()
            let session = document.querySelector("#session")
            let day = newDate.getDate()
            let month = newDate.getMonth()
            let year = newDate.getFullYear()
        }
    })
})