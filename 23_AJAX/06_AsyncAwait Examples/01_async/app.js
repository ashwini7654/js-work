let span = document.querySelector("#result");
async function getEmoji() {
  let pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("😊");
    }, 3000);
  });
  return pr;
}
async function doTask() {
  let result = await getEmoji();
  span.innerHTML = result;
}