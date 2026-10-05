//Show the key pressed by the user
let x = document.getElementById("mytext");
x.addEventListener("keydown", (e) => {
	if (e.key < "0" || e.key > "9") {
		alert("Only digits allowed");
		e.preventDefault();
	}
});
