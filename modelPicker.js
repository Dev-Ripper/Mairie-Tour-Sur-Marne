const models = [
  {
    model : "models/BATEAU_LAVOIR/BATEAU_LAVOIR.glb",
    nom: "Bateau Lavoir"
  },

  {
    model : "models/EGLISE/EGLISE.glb",
    nom: "Eglise"
  },

  {
    model : "models/MAIRIE/MAIRIE.glb",
    nom: "Mairie"
  },

  {
    model : "models/PONT_1882/PONT_1882.glb",
    nom: "Pont 1882"
  },

  {
    model : "models/PONT_1923/PONT_1923.glb",
    nom: "Pont 1923"
  },
  
  {
    model : "models/PONT_PROVISOIRE/PONT_PROVISOIRE.glb",
    nom: "Pont Provisoire"
  },

  {
    model : "models/REMPARTS/REMPARTS.glb",
    nom: "Remparts"
  }
];

const viewer = document.getElementById("viewer");
const container = document.getElementById("buttonblock");
models.map(function(e) {
  const newButton = document.createElement("button");
  container.appendChild(newButton);
  newButton.innerHTML = `${e.nom}`;
  container.style.position = "absolute";
  container.style.top = "0";
  container.style.left = "0"
  newButton.addEventListener("click", function() {
    viewer.src = e.model;
  });
});
