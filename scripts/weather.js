
export function renderWeather() {
    if ("geolocation" in navigator) {
        console.log("Geolocation works!")
        
        navigator.geolocation.getCurrentPosition(function(position) {
            // console.log(position.coords.latitude, position.coords.longitude);
            const lat = position.coords.latitude
            const lon = position.coords.longitude

            const weatherFetch = async () => {
               const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=677fae37c1e80a910369d45621362d91&units=metric`)
               const data = await request.json()
               console.log(data)
                
               let weatherIconVar = ""
               switch (data.weather[0].main) {
                   case "Clouds":
                   weatherIconVar = `<i class="fas fa-cloud"></i>`
                   break 
                   case "Drizzle":  
                   weatherIconVar = `<i class="fas fa-cloud-rain"></i>`
                   break
               }
            
               document.querySelector(".user-welcome").innerHTML += (
                   `${weatherIconVar} ${data.main.temp.toFixed(0)}°C - ${data.weather[0].main}, <i class="fas fa-map-marker-alt"></i> ${data.name}`
               )

           }
           weatherFetch()
        });
        
    } else {
    console.log("Geolocation not working. Try different Browser.")
    }
}

// https://levelup.gitconnected.com/combining-api-calls-with-javascript-try-catch-ba1b7b9303a5