//create function for current weather
function fetchCurrentForecast(lat, lon, city) {
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
                    //create icon image
                    let iconImage = document.createElement('img');
                    iconImage.className = "current-icon";
                    iconImage.src = 'https://openweathermap.org/img/wn/' + cityIcon + '.png';

                    //add styling
                    temp.className = 'current-info';
                    wind.className = 'current-info';
                    humidity.className = 'current-info';
                    uvi.className = 'current-info';

                    //create a span for UVI number
                    uviSpan = document.createElement('span');
                    uviSpan.textContent = cityUvi;


                    //display data on page
                    cityInfo.textContent = `${city} (${currentDate})`;
                    temp.textContent = `Temp: ${cityTemp}\u00B0`;
                    wind.textContent = `Wind: ${cityWind} MPH`;
                    humidity.textContent = `Humidity: ${cityHumidity}%`;

                    if (cityUvi < 3) {
                        uviSpan.classList.add('favorable');
                    } else if (cityUvi > 5) {
                        uviSpan.classList.add('severe');
                    } else {
                        uviSpan.classList.add('moderate');
                    }
                    uvi.textContent = `UV Index: `;

                    cityInfo.append(iconImage);
                    uvi.append(uviSpan);

                    currentWeather.append(temp,wind,humidity,uvi);

                    getFiveDayForecast(data);
                });
            } else {
                alert(city + 'is not a valid city.');
            }
        })
        .catch(function (err){
            console.log('Something went wrong!');
            return;
        })
    
}

//create fetch for coordinates
function fetchCoordinates(city) {
    const coord_api_url = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=5&appid=' + api_key;

    fetch(coord_api_url)
    .then(
        function(response) {
            response.json().then(function(data) {
                var lat = data[0].lat;
                var lon = data[0].lon;

                fetchCurrentForecast(lat, lon, city);
            });
        }
    )
    .catch(function (err) {
        alert('Not able to find city!');
        return;
    })
};