// User inputs search into search field
var userInput = document.querySelector("#search-input");
var searchButton = document.querySelector("#search-button");
var userHistoryButtons = document.querySelector("#history-buttons");

// funtion logs user city
function userCitySelected(event) {
    event.preventDefault();
    
    var userCity = userInput.value;
    console.log(userCity);

    // function to add a button with userCity
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-secondary m-2");
    button.textContent = userCity.toString();

    var history = document.getElementById("history-buttons")
    history.appendChild(button);
}

searchButton.addEventListener("click", userCitySelected);



// On click, City name is recorded


// City name written to empty array to store in local storage
// Name used to append a gray button to the HTML under the search button

// API uses city name to get lat and long ()
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// Use lat and long to search OneCall API
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// Get City Name, Date, Icon, Temp, Wind Speed, Humidity & UV index
// write info to html
// colour UV index text
// Fetch info for 5 day forecast
// Date, Icon, Temp, Wind Speed, Humidity
// Write to 5 forecast cards in html

// Add event listener to History section, use name from button to start search function again.

// function showResponse(event) {
//     // Prevent default action
//     event.preventDefault();
//     console.log(event);
//     var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
//     submissionResponseEl.textContent = response;
//   }
    
//   // Add listener to submit element
//   submitEl.addEventListener("click", showResponse);
  