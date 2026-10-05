const heading = document.querySelector("h3");
heading.addEventListener("dblclick", function () {
	this.style.fontStyle = "italic";
});

const img = document.querySelector("img");

img.addEventListener("mouseover", function () {
	this.src = "/media/images/allow.gif";
	this.width = "200";
});
