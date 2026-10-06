const heading = document.querySelector("h3");
heading.addEventListener("dblclick", () => {
 // When the heading is double-clicked, make it italic
 // this.style.fontStyle = "italic"; in arrow function this will refer to the window object, so we need to use heading instead of this
 heading.style.fontStyle = "italic";
});

const img = document.querySelector("img");
img.addEventListener("mouseout", function () {
  img.src = "../images/scalogo.png";
  this.width = "100";
});

img.addEventListener("mouseover", function () {
  img.src = "../images/scalogo1.png";
  this.width = "400";
});
