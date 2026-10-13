let span = document.querySelector("#result");
function getEmoji() {
  let pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      let num = Math.round(Math.random());
      if (num === 1) {
        resolve(`${num},😊`);
      } else {
        reject(`${num},😢`);
      }
    }, 3000);
  });
  return pr;
}
async function doTask() {
  try{
  let result = await getEmoji();
  span.innerHTML = result;
  }catch(error){
    span.innerHTML = error;
  }
}
