# Weather-Dashboard

## KNOWN ISSUES

There were a few issues that I wasn't able to resolve before due date.

- I struggled to get the lat and long into a global variable so the user has to enter their search city twice for the correct information to display.
- I ran out of time and wasn't able to add the user search history to local storage and recall the history on refresh.

## A simple, weather forecast app

The task was to create a simple weather dashboard to display current weather and a 5 day forecast for a searched city.

The app uses fetch calls to the OpenWeather API to get the users searched cities latitude and longitude. The coordinates are then used to fetch the wearther information. That information is then displayed on the page, including: Current date, temperature, wind-speed, humidity and UV index. The UV Index will display in green if low, orange if medium or red if high.

Link to the deployed applicaiton:

Below is a screenshot of the deployed application:

![Screenshot of working scheduler](assets/images/screenshot01.jpg?raw=true)
