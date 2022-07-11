// User inputs search into search field
var userInput = document.querySelector("#search-input");
var searchButton = document.querySelector("#search-button");
var userHistoryButtons = document.querySelector("#history-buttons");

var userLat = -37.81;
var userLong = 144.96;

// funtion gets user city coordinates to be used for weather search
function getCoords(event) {
    event.preventDefault();

    var userCityName = userInput.value;
    
    // function to add a button with userCity
    var historyButton = document.createElement("button");
    historyButton.setAttribute("class", "btn btn-secondary m-2");
    historyButton.textContent = userCityName.toString();

    var history = document.getElementById("history-buttons")
    history.appendChild(historyButton);

    //API uses city name to get lat and long ()
    

    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + userCityName + '&limit=1&appid=71b26fc7b3232cb9e9c26358ecffa802', {
        method: 'GET', 
        credentials: 'same-origin', 
        redirect: 'follow', 
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            userLat = (data[0].lat);
            userLong = (data[0].lon);
            
        });

    getWeather(userLat, userLong);
          
}

// Use lat and long to search OneCall API
function getWeather() {
    var cityName = document.getElementById("city-name");
    var weatherIcon = document.getElementById("icon")
    var currentTemp = document.getElementById("current-temp");
    var windSpeed = document.getElementById("wind-speed");
    var currentHumidity = document.getElementById("humidity");
    var uvIndex = document.getElementById("UVI");

    // CARDS
    var card1 = document.getElementById("card-1");
    var card2 = document.getElementById("card-2");
    var card3 = document.getElementById("card-3");
    var card4 = document.getElementById("card-4");
    var card5 = document.getElementById("card-5");
    

    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + userLat + '&lon=' + userLong + '&exclude=minutely,hourly,alerts&units=metric&appid=71b26fc7b3232cb9e9c26358ecffa802', {
        method: 'GET', 
        credentials: 'same-origin', 
        redirect: 'follow', 
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
                        
            // Weather icon code from StackOverflow https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon
            var iconcode = data.current.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";

            cityName.innerHTML = ("<h5>" + data.timezone + "  |  " + (moment.unix(data.current.dt).format("DD/MM/YYYY")) + "</h5>");
            weatherIcon.classList.remove("hide");
            weatherIcon.innerHTML = ("<div id='icon'><img id='wicon' src='" + iconurl + "' alt='Weather icon'></div>");
            currentTemp.textContent = ("Temperature: " + data.current.temp + " ˚C");
            windSpeed.textContent = ("Wind: " + data.current.wind_speed + " meters/sec");
            currentHumidity.textContent = ("Humidity: " + data.current.humidity + "%");
            uvIndex.textContent = ("UV Index: " + data.current.uvi);
            if (data.current.uvi <= 2) {
                uvIndex.classList.add("uvlow");
            } else if (data.current.uvi > 2 && data.current.uvi < 6){ 
                uvIndex.classList.add("uvmed");
            } else {
                uvIndex.classList.add("uvhigh");
            }

            // CARDS 
            // card1
            var iconcode2 = data.daily[1].weather[0].icon;
            var iconurl2 = "http://openweathermap.org/img/wn/" + iconcode2 + ".png";

            card1.innerHTML = ("<p>" + (moment.unix(data.daily[1].dt).format("DD/MM/YYYY")) + "<div id='icon'><img id='wicon' src='" + iconurl2 + "' alt='Weather icon'></div>" + "<br>" + "Temp: " + data.daily[1].temp.day + " ˚C" + "<br>" + "Wind: " + data.daily[1].wind_speed + "<br>" + "Humidity: " +  data.daily[1].humidity + "%");

            // card2
            var iconcode3 = data.daily[2].weather[0].icon;
            var iconurl3 = "http://openweathermap.org/img/wn/" + iconcode3 + ".png";

            card2.innerHTML = ("<p>" + (moment.unix(data.daily[2].dt).format("DD/MM/YYYY")) + "<div id='icon'><img id='wicon' src='" + iconurl3 + "' alt='Weather icon'></div>" + "<br>" + "Temp: " + data.daily[2].temp.day + " ˚C" + "<br>" + "Wind: " + data.daily[2].wind_speed + "<br>" + "Humidity: " +  data.daily[2].humidity + "%");

            // card3
            var iconcode4 = data.daily[3].weather[0].icon;
            var iconurl4 = "http://openweathermap.org/img/wn/" + iconcode4 + ".png";

            card3.innerHTML = ("<p>" + (moment.unix(data.daily[3].dt).format("DD/MM/YYYY")) + "<div id='icon'><img id='wicon' src='" + iconurl4 + "' alt='Weather icon'></div>" + "<br>" + "Temp: " + data.daily[3].temp.day + " ˚C" + "<br>" + "Wind: " + data.daily[3].wind_speed + "<br>" + "Humidity: " +  data.daily[3].humidity + "%");

            // card4
            var iconcode5 = data.daily[4].weather[0].icon;
            var iconurl5 = "http://openweathermap.org/img/wn/" + iconcode5 + ".png";

            card4.innerHTML = ("<p>" + (moment.unix(data.daily[4].dt).format("DD/MM/YYYY")) + "<div id='icon'><img id='wicon' src='" + iconurl5 + "' alt='Weather icon'></div>" + "<br>" + "Temp: " + data.daily[4].temp.day + " ˚C" + "<br>" + "Wind: " + data.daily[4].wind_speed + "<br>" + "Humidity: " +  data.daily[4].humidity + "%");

            // card5
            var iconcode6 = data.daily[5].weather[0].icon;
            var iconurl6 = "http://openweathermap.org/img/wn/" + iconcode6 + ".png";

            card5.innerHTML = ("<p>" + (moment.unix(data.daily[5].dt).format("DD/MM/YYYY")) + "<div id='icon'><img id='wicon' src='" + iconurl6 + "' alt='Weather icon'></div>" + "<br>" + "Temp: " + data.daily[5].temp.day + " ˚C" + "<br>" + "Wind: " + data.daily[5].wind_speed + "<br>" + "Humidity: " +  data.daily[5].humidity + "%");
        });

}

// Event listener for the search button
searchButton.addEventListener("click", getCoords);

// STILL TO DO
// SAVE SEARCH HISTORY TO LOCAL STORAGE
// Add event listener to History section, use name from button to start search function again.


  