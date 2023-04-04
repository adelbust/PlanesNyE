document.addEventListener("DOMContentLoaded", function () {
  let currentDay = 0;

  function updateDay(workouts, day) {
    const workout = workouts[day];
    const dayNavigation = document.querySelector(".day-navigation h2");
    const customColumn = document.querySelector(".custom-column");

    dayNavigation.textContent = workout[0];
    customColumn.innerHTML = "";

    for (let i = 1; i < workout.length; i++) {
      const workoutElement = document.createElement("p");
      workoutElement.textContent = workout[i];
      customColumn.appendChild(workoutElement);
    }
  }

  function loadJSON(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = JSON.parse(xhr.responseText);
        console.log("Datos JSON cargados:", jsonData); // Agrega esta línea
        callback(jsonData);
      }
    };
    xhr.send(null);
  }
  

  loadJSON("workouts.json", function (data) {
    const workouts = data;
    updateDay(workouts, currentDay);

    document.querySelector(".prev-day").addEventListener("click", function () {
      if (currentDay > 0) {
        currentDay--;
        updateDay(workouts, currentDay);
      }
    });

    document.querySelector(".next-day").addEventListener("click", function () {
      if (currentDay < workouts.length - 1) {
        currentDay++;
        updateDay(workouts, currentDay);
      }
    });
  });
});
