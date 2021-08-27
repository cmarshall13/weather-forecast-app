//create element values
const citySearchInput = document.querySelector('#city-search');
const searchButton = document.querySelector('.search-btn');
const currentWeather = document.querySelector('.current-forecast-container');
const cityInfo = document.querySelector('.city-name-date');
const newButtons = document.querySelector('.new-buttons');
const forecastContainerEl = document.querySelector('.five-day-container');
const weatherCardsContainer = document.querySelector('.forecast-container');

//add weather info with p elements
let temp = document.createElement('p');
let humidity = document.createElement('p');
let uvi = document.createElement('p');
let wind = document.createElement('p');

//set current date format
let currentDate = moment().format('M/DD/YYYY');

//set localStorage and create an empty array if nothing is stored
let storedCities = JSON.parse(localStorage.getItem('storedCities')) ||[];

//API key for OpenWeather
const api_key = '8d602153b9884fa53ef1de084dfbf11d';


//display previously searched cities
function displayButtons() {
    storedCities= JSON.parse(localStorage.getItem('storedCities')) || [];

    for (i= storedCities.length - 1; i>=0; i--) {
        var cityButton = document.createElement('button');
        cityButton.classList = 'btn city-btn';
        cityButton.textContent = storedCities[i];
        newButtons.append(cityButton);
    };
};

//create a new button from search
function createButton(city) {
    var newCityButton = document.createElement('button');
    newCityButton.classList = 'btn city-btn';
    newCityButton.textContent = city;
    newButtons.append(newCityButton);

    fetchCoordinates(city);
    citySearchInput.value = '';
}

//save searched city to local storage and display
function getCityInfo(event) {
    event.preventDefault();

    //clear current city info
    cityInfo.textContent = '';
    forecastContainerEl.innertext = '';
    weatherCardsContainer.innerText = '';

    var city = citySearchInput.value.trim();
    if(!city) {
        alert('Not a valid city, please try again!');
        return;
    }
    //get localStorage array
    storedCities = JSON.parse(localStorage.getItem('storedCities')) || [];
    //save new city to localStorage
    storedCities.push(city);
    storedCities = localStorage.setItem('storedCities', JSON.stringify(storedCities));

    createButton(city);
};

//get info from local storage to display already searched cities(btns)
displayButtons();

//get city info on btn click
searchButton.addEventListener('click', getCityInfo);

//search an already existing (previously searched) city
$(document).on('click', '.city-btn', function(event) {
    //clear current city from search
    cityInfo.textContent = '';
    forecastContainerEl.innerText = '';
    weatherCardsContainer.innerText = '';
    //display searched city's date and coordinates
    var existingCity = event.target.textContent;
    cityInfo.textContent = `${existingCity} (${currentDate})`;
    fetchCoordinates(existingCity);
});