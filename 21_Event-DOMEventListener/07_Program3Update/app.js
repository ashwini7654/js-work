//Whenever any <li> is clicked its color shoulde become crimcon
const ul=document.querySelector("ul");
ul.addEventListener("click",(e)=>{
	e.target.style.color="crimson";
});