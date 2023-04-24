import "./loader.css"
// Create the loader element
const loader = document.createElement("div");
loader.id = "loader";

// Create the inner loader element
const loaderInner = document.createElement("div");
loaderInner.classList.add("loader-inner");

// Add the inner loader element to the loader element
loader.appendChild(loaderInner);

// Add the loader element to the body of the document
document.body.appendChild(loader);
window.onload = function () {
    loader.remove();
  };