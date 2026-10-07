let myForm = document.myfrm;
let txtFirst = myForm.txtfno;
let txtSec = myForm.txtsno;
let txtThird = myForm.txtresult;
let btnAdd = myForm.btnadd;
let btnClear = myForm.btnclear;

btnAdd.addEventListener("click", () => {
	let fnum = txtFirst.value;
	let snum = txtSec.value;
	let sum = Number(fnum) + Number(snum);
	txtThird.value = sum;
});

btnClear.addEventListener("click", () => {
	txtFirst.value = "";
	txtSec.value = "";
	txtThird.value = "";
	txtFirst.focus();
});
