let quotes = [
  "Believe in yourself and all that you are.",
  "The only way to do great work is to love what you do.",
  "Don't watch the clock; do what it does. Keep going.",
  "Believe you can and you're halfway there.",
  "I can do it! No, we can do it!",
  "No one fights alone."
];

// Array of emojis
let emojis = ['✨', '🌟', '💪', '🔥', '🌈'];

// Get a random quote and emoji
let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

// Set the quote and emoji in the DOM
document.getElementById('motivational-quote').textContent = randomQuote;
document.querySelector('.quote-icon').textContent = randomEmoji;




  // Function to scroll smoothly to the section
  function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start', // Align the section to the top
    });
  }





  function updateClock() {
    const timeElement = document.querySelector('.clock');
    
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    // Define time-based emojis
    let timeEmoji = '';
    if (hours >= 6 && hours < 18) {
      timeEmoji = '🌞'; // Daytime (sun)
    } else {
      timeEmoji = '🌙'; // Nighttime (moon)
    }
  
    // Format time with leading zeros
    const formattedTime = `${timeEmoji} ${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  
    // Update the clock display
    timeElement.textContent = formattedTime;
  }
  
  // Call the updateClock function every minute to update the time
  updateClock(); // Update immediately on load
  setInterval(updateClock, 60000); // Update every 60 seconds (1 minute)

  





  async function fetchWeather() {
    // Get the user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
        const url = `https://wttr.in/${latitude},${longitude}?format=%t`; // %t fetches the temperature in Celsius
  
        try {
          const response = await fetch(url);
          const temperature = await response.text();
  
          // Remove the second occurrence of °C and display only the temperature value
          const cleanTemperature = temperature.replace('°C', '');
  
          // Display the temperature on the page
          document.querySelector('.temperature').textContent = cleanTemperature + '°C';
        } catch (error) {
          console.error('Error fetching weather data:', error);
          document.querySelector('.temperature').textContent = 'Error fetching temperature';
        }
      }, (error) => {
        console.error('Geolocation error:', error);
        document.querySelector('.temperature').textContent = 'Geolocation not available';
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
      document.querySelector('.temperature').textContent = 'Geolocation not supported';
    }
  }
  
  // Call the function to fetch temperature when the page loads
  fetchWeather();

  




  // Function to fetch the weather and set the emoji
function getWeatherEmoji() {
  fetch('https://wttr.in?format=%C') // Fetching weather condition as text
      .then(response => response.text()) // Getting the weather condition in text format
      .then(weather => {
          let emoji = '';

          // Set emoji based on the weather condition
          switch(weather.toLowerCase()) {
              case 'clear sky':
                  emoji = '☀️'; // Sun
                  break;
              case 'few clouds':
                  emoji = '⛅'; // Sun with clouds
                  break;
              case 'scattered clouds':
                  emoji = '☁️'; // Clouds
                  break;
              case 'broken clouds':
                  emoji = '☁️'; // Broken clouds (cloudy)
                  break;
              case 'shower rain':
                  emoji = '🌧️'; // Shower
                  break;
              case 'rain':
                  emoji = '🌧️'; // Rain
                  break;
              case 'thunderstorm':
                  emoji = '⚡'; // Thunderstorm
                  break;
              case 'snow':
                  emoji = '❄️'; // Snowflake
                  break;
              case 'mist':
                  emoji = '🌫️'; // Mist
                  break;
              default:
                  emoji = '☀️'; // Default (unknown weather)
          }

          // Set the emoji in the weather icon span
          document.getElementById('weather-icon').textContent = emoji;
      })
      .catch(error => console.error('Error fetching weather data:', error));
}

// Run the function to get the weather and update the icon
getWeatherEmoji();
