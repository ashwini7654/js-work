let span1 = document.querySelector("#result");
let span2 = document.querySelector("#icn");
function makeProject(n) {
  let pr = new Promise((resolve, reject) => {
    setTimeout(function () {
      if (n % 2 === 0) {
        resolve("Hurray! Project done!");
      } else {
        reject("So sad! could not complete the project");
      }
    }, 3000);
  });
  return pr;
}

function doTask() {
  let today = new Date();
  let n = today.getSeconds();
  span1.innerHTML = `n is ${n}<br>`;
  let pr = makeProject(n);
  pr.then((result) => {
    span1.innerHTML += result;
    span2.innerHTML = "😊😊";
  }).catch((err) => {
    span1.innerHTML += err;
    span2.innerHTML = "😢😢";
  }).finally(() => {
    span2.innerHTML += "<br>Thank you for your patience!";
  });
}
