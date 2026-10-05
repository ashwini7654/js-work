//Change color of div to crimson
function changeColor() {
	let div = document.querySelector("#mydiv");
	div.addEventListener("click", () => {
		div.style.color = "crimson";
	});
}
window.onload = changeColor;
