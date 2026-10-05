let myForm = document.loginform;
let txtUser = myForm.txtusername;
let txtPwd = myForm.txtpassword;
let btn = myForm.btnlogin;
btn.addEventListener("click", () => {
	alert(txtUser.value + "\n" + txtPwd.value);
});
