document.getElementById("openModal").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("modalInfo").style.display = "flex";
});

document.getElementById("modalClose").addEventListener("click", function() {
  document.getElementById("modalInfo").style.display = "none";
});

window.addEventListener("click", function(e) {
  if (e.target.id === "modalInfo") {
    document.getElementById("modalInfo").style.display = "none";
  }
});
