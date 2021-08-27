//create element values
const citySearchInput = document.querySelector('#city-search');
const searchButton = document.querySelector('.search-btn');
const currentWeather = document.querySelector('.current-forecast-container');
const cityInfo = document.querySelector('.city-name-date');
const newButtons = document.querySelector('.new-buttons');
const forecastContainer = document.querySelector('five-forecast-container');
const weatherCardsContainer = document.queryContainer('.forecast-container');

//add weather info with p elements
let temp = document.createElement('p');
let humidity = document.createElement('p');
let uvi = document.createElement('p');
let wind = document.createElement('p');
let description = document.createElement('p');

//set current date format
let currentDate = moment().format('M/DD/YYYY');

//set localStorage and create an empty array if nothing is stored
let storedCities = JSON.parse(localStorage.getItem('storedCities')) ||[];

//API key for OpenWeather
const api_key = '1fd353df9a65fba742aece36f28e320a';


