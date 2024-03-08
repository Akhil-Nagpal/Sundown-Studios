const container = document.querySelector(".list-container");
const imageContainer = document.querySelector(".image-container");

function showContainer() {
  imageContainer.style.display = "block";
}

function hideContainer() {
  imageContainer.style.display = "none";
}

container.addEventListener("mouseenter", showContainer);
container.addEventListener("mouseleave", hideContainer);

const list = document.querySelectorAll(".project-list");
list.forEach((e) => {
  e.addEventListener("mouseenter", function () {
    let image = e.getAttribute("data");
    imageContainer.style.backgroundImage = `url(${image})`;
  });
});
