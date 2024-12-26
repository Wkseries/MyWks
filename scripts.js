// Update time function (only hours and minutes)
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('time').innerHTML = `${hours}:${minutes}`;
}

// Display the time immediately and update every minute
updateTime();
setInterval(updateTime, 60000);

// Simulated temperature update function
function updateTemperature() {
  // Simulate getting the temperature (use real API if needed)
  const temperatureInCelsius = 25;  // Example temperature in Celsius
  document.getElementById('temp').innerHTML = `${temperatureInCelsius}°C`;
}

// Display the temperature immediately and update every minute (optional)
updateTemperature();
setInterval(updateTemperature, 60000);

// Array of motivational quotes
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

// Example weather condition
let weatherCondition = 'sunny'; // This can be dynamically fetched from an API

// Set the weather icon based on the condition
let weatherIcon = document.getElementById('weather-icon');
if (weatherCondition === 'sunny') {
  weatherIcon.innerText = '☀️'; // Sun emoji
} else if (weatherCondition === 'cloudy') {
  weatherIcon.innerText = '☁️'; // Cloud emoji
} else if (weatherCondition === 'rainy') {
  weatherIcon.innerText = '🌧️'; // Rain emoji
}

// Ensure the weather icon and time are visible on mobile and PC
function adjustForMobileAndPC() {
  const isMobile = window.innerWidth <= 768;  // You can adjust this value as needed for mobile devices
  const timeElement = document.getElementById('time');
  const weatherIconElement = document.getElementById('weather-icon');
  
  // Adjust font size and visibility depending on the screen size
  if (isMobile) {
    timeElement.style.fontSize = '1.5rem';  // Smaller font for mobile
    weatherIconElement.style.fontSize = '2rem';  // Larger icon for mobile
  } else {
    timeElement.style.fontSize = '2rem';  // Larger font for PC
    weatherIconElement.style.fontSize = '3rem';  // Larger icon for PC
  }
}

// Call the adjustment function when the window is resized
window.addEventListener('resize', adjustForMobileAndPC);

// Initialize adjustments
adjustForMobileAndPC();
