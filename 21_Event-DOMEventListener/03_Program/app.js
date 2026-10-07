//Whenever any <li> is clicked its color shoulde become crimson
let listItems = document.querySelectorAll("li");
listItems.forEach((item) => {
	item.addEventListener("click", () => {
		item.style.color = "crimson";
	});
});
