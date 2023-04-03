function createVideoButton(url) {
  const button = document.createElement("button");
  button.classList.add("video-btn");
  button.textContent = "Ver video";
  button.addEventListener("click", () => {
    const videoModal = document.querySelector(".video-modal");
    const videoContainer = document.querySelector("#video-container");

    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.width = "560";
    iframe.height = "315";
    iframe.title = "YouTube video player";
    iframe.frameBorder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    videoContainer.innerHTML = "";
    videoContainer.appendChild(iframe);

    videoModal.style.display = "block";
  });

  return button;
}

function insertVideoButton(liElement, url) {
  liElement.appendChild(createVideoButton(url));
}

// Función para actualizar el contenido del entrenamiento y nutrición
function updatePlanContent(day) {
  const plans = document.querySelectorAll(".plan");
  plans.forEach((plan) => {
    plan.style.display = "none";
  });

  const trainingPlan = document.querySelector(`#${day}-training`);
  const nutritionPlan = document.querySelector(`#${day}-nutrition`);

  if (trainingPlan && nutritionPlan) {
    trainingPlan.style.display = "block";
    nutritionPlan.style.display = "block";
  }
}

// Inicializar el contenido para el primer día (Lunes)
updatePlanContent("Lunes");

const daySelect = document.querySelector("#day");
daySelect.addEventListener("change", (event) => {
  updatePlanContent(event.target.value);
});

const closeModal = document.querySelector(".close");
const videoModal = document.querySelector(".video-modal");

closeModal.addEventListener("click", () => {
  videoModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === videoModal) {
    videoModal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const strengthConditioningSection = document.getElementById(
    "strength-conditioning-section"
  );
  const nutritionDieteticsSection = document.getElementById(
    "nutrition-dietetics-section"
  );
  const trainingPlans = document.querySelectorAll(".plan.training");
  const nutritionPlans = document.querySelectorAll(".plan.nutrition");

  function hideAllPlans() {
    trainingPlans.forEach((plan) => (plan.style.display = "none"));
    nutritionPlans.forEach((plan) => (plan.style.display = "none"));
  }

  strengthConditioningSection.addEventListener("click", function () {
    hideAllPlans();
    const selectedDay = document.getElementById("day").value;
    document.getElementById(`${selectedDay}-training`).style.display = "block";
  });

  nutritionDieteticsSection.addEventListener("click", function () {
    hideAllPlans();
    const selectedDay = document.getElementById("day").value;
    document.getElementById(`${selectedDay}-nutrition`).style.display = "block";
  });
});
