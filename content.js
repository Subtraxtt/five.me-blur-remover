var elements = document.getElementsByClassName("disable-text-selection pointer-events-none -mx-1 mt-1 px-1 blur-sm");

for (var i = 0; i < elements.length; i++) {
  elements[i].classList.remove("disable-text-selection", "pointer-events-none", "-mx-1", "mt-1", "px-1", "blur-sm");
  elements[i].classList.add("new-class");
}
