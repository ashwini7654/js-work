let myForm = document.myfrm;
let txtFirst = myForm.txtfno;
let txtSec = myForm.txtsno;
let txtThird = myForm.txtresult;
let btnAdd = myForm.btnadd;
let btnClear = myForm.btnclear;
const span1 = document.querySelector("#fnoerror");
const span2 = document.querySelector("#snoerror");
const validate = (fnum, snum) => {
	let isValid = true;
	if (fnum.length === 0 || isNaN(fnum)) {
		isValid = false;
		if (fnum.length === 0) {
			span1.innerText = "Input required!";
		} else {
			span1.innerText = "Please input numbers only!";
		}
		span1.style.color = "crimson";
		txtFirst.setAttribute("class", "error");
	} else {
		span1.innerText = "";
		txtFirst.removeAttribute("class");
	}
	if (snum.length === 0 || isNaN(snum)) {
		isValid = false;
		if (snum.length === 0) {
			span2.innerText = "Input required!";
		} else {
			span2.innerText = "Please input numbers only!";
		}
		span2.style.color = "crimson";
		txtSec.setAttribute("class", "error");
	} else {
		span2.innerText = "";
		txtSec.removeAttribute("class");
	}
	return isValid;
};
btnAdd.addEventListener("click", () => {
	let fnum = txtFirst.value;
	let snum = txtSec.value;
	if (validate(fnum, snum)) {
		let sum = Number(fnum) + Number(snum);
		txtThird.value = sum;
	}
});

btnClear.addEventListener("click", () => {
	txtFirst.value = "";
	txtSec.value = "";
	txtThird.value = "";
	txtFirst.focus();
});
