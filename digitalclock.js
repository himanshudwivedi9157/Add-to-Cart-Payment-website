function updateTime() {
  const currentDate = new Date();
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();

  // Set the values of the HTML div elements
  document.querySelector("#hours").textContent = currentHours;
  document.querySelector("#minutes").textContent = currentMinutes;
  document.querySelector("#seconds").textContent = currentSeconds;
}

setInterval(updateTime, 1000); // Calls updateTime every second (1000 milliseconds)
