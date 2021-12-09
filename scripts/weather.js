// export async function weatherFetch() {
//     let response = await fetch("api.openweathermap.org/data/2.5/weather?q=vienna&appid=677fae37c1e80a910369d45621362d91&units=metric")
//     if (!response.ok) {
//         throw new Error("NOT WORKING")
//     }
//     let weatherData = await response.json()
//     console.log(weatherData)

// }

export const weatherFetch = async () => {
    const request = await fetch("api.openweathermap.org/data/2.5/weather?q=vienna&appid=677fae37c1e80a910369d45621362d91&units=metric")
    const data = await request.json()
    return data
}

// https://levelup.gitconnected.com/combining-api-calls-with-javascript-try-catch-ba1b7b9303a5