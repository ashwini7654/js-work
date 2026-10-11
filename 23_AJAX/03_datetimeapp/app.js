let xhr=new XMLHttpRequest();
let displayDiv=document.querySelector("#currentdatetime");

let btn=document.querySelector("#show-datetime-btn");

btn.addEventListener("click",()=>{
   xhr.onreadystatechange=processResponse;
   xhr.open("GET","https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata",true);
   xhr.send(null);
});
const processResponse=()=>{
      if(xhr.readyState===4 ){
        if(xhr.status===200){
        let dateTimeObj=JSON.parse(xhr.responseText);
        let dateTimeStr=`Current Date  is: ${dateTimeObj.date} and Time is: ${dateTimeObj.time}`;
        displayDiv.innerText=dateTimeStr;
        console.log(dateTimeObj);
        }else{
         displayDiv.innerText="Sorry! Cannot fetch the date and time";
        }
      }
   };