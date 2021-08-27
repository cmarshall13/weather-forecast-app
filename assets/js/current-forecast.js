//create function for current weather
function fetchCurrentForecast(lat,lon,city) {
    const current_api_url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&exclude=hourly,minutely&appid=' + api_key;
    fetch(current_api_url)
    .then(
        function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    cityTemp = data.current.temp;
                    cityUvi = data.current.uvi;
                    cityHumidity = data.current.humidity;
                    cityWind = data.current.wind_speed;
                    cityIcon = data.current.weather[0].icon;
                    cityDescription = (data.current.weather[0].description).toUpperCase();
                })
            }
        }
    )
}