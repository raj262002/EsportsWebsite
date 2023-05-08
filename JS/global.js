'use strict';

// loading transition between pages
window.addEventListener("load", ()=>{
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  })
});

// Set the time for the stream timer at home page section
let hours = 1;
let minutes = 34;
let seconds = 2;

const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

// Convert all time to seconds
let totalSeconds = (hours * 60 * 60) + (minutes * 60) + seconds;

// Function to format the time
function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;
  hour.textContent = `${hours.toString().padStart(2, '0')}`;
  minute.textContent = `${minutes.toString().padStart(2, '0')}`;
  second.textContent = `${seconds.toString().padStart(2, '0')}`;
  // return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Start the timer
let timer = setInterval(() => {
  // Subtract one second from the total time
  totalSeconds--;

  // If the timer has reached zero, stop the timer and display a message
  if (totalSeconds === 0) {
    clearInterval(timer);
    // console.log('Timer has ended!');
  }

  // Otherwise, display the remaining time in the console
  // console.log(`Time remaining: ${formatTime(totalSeconds)}`);
  formatTime(totalSeconds);

}, 1000);


