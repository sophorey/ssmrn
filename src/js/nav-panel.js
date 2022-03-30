const navPanelToggle = document.querySelector("#navPanelToggle");

navPanelToggle.addEventListener("click", () => {
  document.body.classList.toggle("is-nav-panel-visible");
})