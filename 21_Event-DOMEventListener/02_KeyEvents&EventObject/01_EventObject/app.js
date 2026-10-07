//Handle keydown for input
let tbox = document.querySelector("input");
tbox.addEventListener("keydown", (e) => {
	alert("you typed " + e.key);
});
