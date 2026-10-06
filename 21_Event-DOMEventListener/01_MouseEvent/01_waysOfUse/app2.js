//Change color of div to crimson
function changeColor() {
	let div = document.querySelector("#mydiv");
	div.addEventListener("click", () => {
		div.style.color = "crimson";
	});
}
//function changeColor() isliye likha taki page load hone k baad hi ye function chale, warna ye function html load hone se phle hi chlega aur div element ko access nahi kar payega. isliye humne window.onload event ka use kiya h taki ye function tabhi chale jab page load ho jaye.
window.onload = changeColor;
//page load event is fired when the whole page has loaded, including all dependent resources
//  such as stylesheets and images.

// let div = document.querySelector("#mydiv");
// div.addEventListener("click", function() {
// 	this.style.color = "crimson";
// });