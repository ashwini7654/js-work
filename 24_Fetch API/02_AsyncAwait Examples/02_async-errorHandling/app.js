let span = document.querySelector("#result");

async function getEmoji() {
 return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let num = Math.round(Math.random());
      if (num === 1) {
        resolve(`${num},😊`);
      } else {
        reject(`${num},😢`);
      }
    }, 3000);
  });
  
}
async function doTask() {
  try{
  let result = await getEmoji();
  span.innerHTML = result;
  }catch(error){
    span.innerHTML = error;
  }
}
