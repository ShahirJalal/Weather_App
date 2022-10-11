const cityInput = document.getElementById("input");
const btn = document.querySelector("#add");

apiKey = "75adaa7cc887057971ff05253eefb707"

btn.addEventListener("click", function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apiKey)
    .then(response => response.json())
})