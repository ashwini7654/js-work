//Is there a problem with the code
const listItems = document.querySelectorAll("li");
listItems.forEach((item) => {
	item.addEventListener("click", (e) => {
		item.style.color = "crimson";
		e.stopPropagation();
	});
});


 
const ul = document.querySelector("ul");
       ul.addEventListener("click", (e) => {
		ul.style.color = "crimson";
		e.stopPropagation();
		
		
	});

const btn = document.querySelector("#additem");
let count=document.querySelectorAll("li").length;
btn.addEventListener("click", () => {
	let task = prompt("What you want to do next ?");
	ul.innerHTML += "<li>" + ++count + ". " + task + "</li>";
});

 const deletebtn = document.querySelector("#deleteitem");
   deletebtn.addEventListener("click", () => {
	let task = parseInt(prompt("Enter the item number you want to delete"));
	let items = document.querySelectorAll("li");
	if (task >= 1 && task <= items.length) {
		items[task - 1].remove();
	}
});
