const models = [
  "models/BATEAU_LAVOIR.glb",
  "models/EGLISE.glb",
  "models/MAIRIE.glb"
];

const viewer = document.getElementById("viewer");
const container = document.getElementById("buttonblock");
let i;
models.map(function(e) {
  const newButton = document.createElement("button");
  container.appendChild(newButton);
  newButton.innerHTML = `${e}`;
  container.style.position = "absolute";
  container.style.top = "0";
  container.style.left = "0"
  newButton.addEventListener("click", function() {
    viewer.src = e;
  });
});
