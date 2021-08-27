//create function to get the five-day forecast
function getFiveDayForecast(data) {
    let forecastTitle = document.createElement('h2');
    forecastTitle.textContent = 'Five-Day Forecast:';
    forecastContainerEl.append(forecastTitle);

    for(i=0; i < 5; i++) {
        let dayCard = document.createElement('div');
        dayCard.className = 'days';
        dayCard.setAttribute('id', 'day-' + (i + 1));

        //create info for each day in forecast
        let forecastDate = document.createElement('h3');
        forecastDate.className = 'days';
        forecastDate.textContent = moment().add((i + 1), 'days').format('M/DD/YYYY');

        //create icon images
        let iconDayEl = document.createElement('img');
        console.log(data.daily[i]);

        let dayIcon = data.daily[i].weather[0].icon;
        console.log(dayIcon);
        iconDayEl.src = 'https://openweathermap.org/img/w/' + dayIcon + '.png';
        console.log(iconDayEl);

        //add weather info with 'p' elements
        let tempDay = document.createElement('p');
        let windDay = document.createElement('p');
        let humidityDay = document.createElement('p');

        tempDay.textContent = `Temp: ${data.daily[i].temp.day}\u00B0`;
        windDay.textContent = `Wind: ${data.daily[i].wind_speed} MPH`;
        humidityDay.textContent = `Humidity: ${data.daily[i].humidity}%`;

        //append info to the card div
        dayCard.append(forecastDate, iconDayEl, tempDay, windDay, humidityDay);
        //append the card to the parent
        weatherCardsContainer.append(dayCard);
        //append the foreast to the parent
        forecastContainerEl.append(weatherCardsContainer);

    };
};