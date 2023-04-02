function createVideoButton(url) {
  const button = document.createElement("button");
  button.classList.add("video-btn");
  button.textContent = "Ver video";
  button.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.width = "560";
    iframe.height = "315";
    iframe.title = "YouTube video player";
    iframe.frameBorder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.appendChild(iframe);

    modal.addEventListener("click", () => {
      modal.remove();
    });

    document.body.appendChild(modal);
  });

  return button;
}

// Datos de ejemplo para entrenamiento y nutrición
const plansData = {
  Domingo: {
    training: `
        <h3>Entrenamiento de fuerza</h3>
        <ul>
          <li>Sentadillas: 4 series de 8 repeticiones ${
            createVideoButton("https://www.youtube.com/embed/0Wsw5auLBIw")
              .outerHTML
          }</li>
          <li>Press de banca: 4 series de 8 repeticiones ${
            createVideoButton("https://www.youtube.com/embed/tB3X4TjTIes")
              .outerHTML
          }</li>
          <li>Peso muerto: 4 series de 8 repeticiones ${
            createVideoButton("https://www.youtube.com/embed/Y1IGeJEXpF4")
              .outerHTML
          }</li>
          <li>Dominadas: 4 series al fallo ${
            createVideoButton("https://www.youtube.com/embed/eGo4IYlbE5g")
              .outerHTML
          }</li>
        </ul>
      `,
    nutrition: `
        <h4>Desayuno:</h4>
        <ul>
          <li>Tortilla de 3 huevos con espinacas, tomate y queso</li>
          <li>1 rebanada de pan integral tostado con mantequilla de almendras</li>
          <li>1 taza de fresas</li>
        </ul>
        <h4>Almuerzo:</h4>
        <ul>
          <li>Sandwich de pavo con pan integral, lechuga, tomate y mostaza</li>
          <li>1 taza de zanahorias baby</li>
          <li>1 manzana</li>
        </ul>
        <h4>Cena:</h4>
        <ul>
          <li>150 g de salmón a la parrilla</li>
          <li>1 taza de quinoa cocida</li>
          <li>1 taza de judías verdes al vapor (o cualquier otra verdura que toleres)</li>
        </ul>
      `,
  },
  Lunes: {
    training: `
      <h3>Entrenamiento de cardio</h3>
      <ul>
        <li>Correr: 30 minutos ${
          createVideoButton("https://www.youtube.com/embed/ZpKGoG_lm9o")
            .outerHTML
        }</li>
        <li>Jumping Jacks: 3 series de 30 segundos ${
          createVideoButton("https://www.youtube.com/embed/c4DAnQ6DtF8")
            .outerHTML
        }</li>
        <li>Mountain Climbers: 3 series de 30 segundos ${
          createVideoButton("https://www.youtube.com/embed/nmwgirgXLYM")
            .outerHTML
        }</li>
      </ul>
    `,
    nutrition: `
      <h4>Desayuno:</h4>
      <ul>
        <li>Avena con leche de almendras, miel y frutos secos</li>
        <li>1 plátano</li>
      </ul>
      <h4>Almuerzo:</h4>
      <ul>
        <li>Ensalada de pollo a la parrilla con espinacas, nueces, arándanos y aderezo balsámico</li>
        <li>1 taza de uvas</li>
      </ul>
      <h4>Cena:</h4>
      <ul>
        <li>200 g de pechuga de pollo al horno con hierbas y limón</li>
        <li>1 taza de arroz integral cocido</li>
        <li>1 taza de brócoli al vapor</li>
      </ul>
    `,
  },
  Martes: {
    training: `
      <h3>Entrenamiento de fuerza</h3>
      <ul>
        <li>Flexiones: 4 series de 10 repeticiones ${
          createVideoButton("https://www.youtube.com/embed/4dF1DOWzf20")
            .outerHTML
        }</li>
        <li>Remo con mancuernas: 4 series de 10 repeticiones ${
          createVideoButton("https://www.youtube.com/embed/Lkt_GPxiNxg")
            .outerHTML
        }</li>
        <li>Extensiones de piernas: 4 series de 10 repeticiones ${
          createVideoButton("https://www.youtube.com/embed/Yyv6_5kHzIs")
            .outerHTML
        }</li>
        <li>Plancha: 3 series de 1 minuto ${
          createVideoButton("https://www.youtube.com/embed/B296mZDhrP4")
            .outerHTML
        }</li>
      </ul>
    `,
    nutrition: `
      <h4>Desayuno:</h4>
      <ul>
        <li>Smoothie de frutas (plátano, fresas, espinacas, leche de almendras)</li>
      </ul>
      <h4>Almuerzo:</h4>
      <ul>
        <li>Burrito de pollo con arroz integral, frijoles negros, lechuga y salsa de yogur</li>
        <li>1 taza de piña en cubitos</li>
      </ul>
      <h4>Cena:</h4>
      <ul>
        <li>150 g de filete de ternera a la parrilla</li>
        <li>1 taza de puré de patatas</li>
        <li>Ensalada mixta con aderezo bajo en grasa</li>
      </ul>
    `,
  },
};

// Función para actualizar el contenido del entrenamiento y nutrición
function updatePlanContent(day) {
  const trainingPlanContent = document.querySelector(".training .plan-content");
  const nutritionPlanContent = document.querySelector(
    ".nutrition .plan-content"
  );

  if (plansData[day]) {
    trainingPlanContent.innerHTML = plansData[day].training;
    nutritionPlanContent.innerHTML = plansData[day].nutrition;
  } else {
    trainingPlanContent.innerHTML =
      "No hay información disponible para este día.";
    nutritionPlanContent.innerHTML =
      "No hay información disponible para este día.";
  }
}

// Función para manejar el cambio en el selector de día
function handleDayChange(event) {
  const selectedDay = event.target.value;
  updatePlanContent(selectedDay);
}

// Asignar la función 'handleDayChange' al evento 'change' del selector de día
const daySelector = document.getElementById("day");
daySelector.addEventListener("change", handleDayChange);

// Mostrar el plan de entrenamiento y nutrición del primer día al cargar la página
updatePlanContent(daySelector.value);
