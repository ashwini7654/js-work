 let img=document.querySelector("img");
img.addEventListener("mouseover",function(){
    this.width=400;
});
img.addEventListener("mouseout",function(){
  setTimeout(()=>{
    img.src="../images/scalogo.png";
    this.width=100;
  },2000);
});