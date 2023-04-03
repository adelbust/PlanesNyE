document.addEventListener('DOMContentLoaded', function () {
    var days = [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
    ];
    var currentDay = 0;
  
    document.querySelector('.prev-day').addEventListener('click', function () {
      if (currentDay > 0) {
        currentDay--;
        updateDay(currentDay);
      }
    });
  
    document.querySelector('.next-day').addEventListener('click', function () {
      if (currentDay < days.length - 1) {
        currentDay++;
        updateDay(currentDay);
      }
    });
  
    function updateDay(day) {
      document.querySelector('.day-navigation h2').textContent = days[day];
  
      // Modifica el contenido de los entrenamientos según tus necesidades
      var workouts = [
        [
          "Entrenamiento 1 para Lunes",
          "Entrenamiento 2 para Lunes",
          "Entrenamiento 3 para Lunes",
          "Entrenamiento 4 para Lunes",
        ],
        [
          "Entrenamiento 1 para Martes",
          "Entrenamiento 2 para Martes",
          "Entrenamiento 3 para Martes",
          "Entrenamiento 4 para Martes",
        ],
        [
          "Entrenamiento 1 para Miércoles",
          "Entrenamiento 2 para Miércoles",
          "Entrenamiento 3 para Miércoles",
          "Entrenamiento 4 para Miércoles",
        ],
        [
          "Entrenamiento 1 para Jueves",
          "Entrenamiento 2 para Jueves",
          "Entrenamiento 3 para Jueves",
          "Entrenamiento 4 para Jueves",
        ],
        [
          "Entrenamiento 1 para Viernes",
          "Entrenamiento 2 para Viernes",
          "Entrenamiento 3 para Viernes",
          "Entrenamiento 4 para Viernes",
        ],
        [
          "Entrenamiento 1 para Sábado",
          "Entrenamiento 2 para Sábado",
          "Entrenamiento 3 para Sábado",
          "Entrenamiento 4 para Sábado",
        ],
        [
          "Entrenamiento 1 para Domingo",
          "Entrenamiento 2 para Domingo",
          "Entrenamiento 3 para Domingo",
          "Entrenamiento 4 para Domingo",
        ],
      ];
  
      var workoutElements = document.querySelectorAll('.custom-column p');
      for (var i = 0; i < workoutElements.length; i++) {
        workoutElements[i].textContent = workouts[day][i];
      }
    }
  });
  