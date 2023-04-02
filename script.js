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
  };
  