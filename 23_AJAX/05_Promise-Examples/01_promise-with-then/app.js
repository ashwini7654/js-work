let span1 = document.querySelector("#result");
let span2 = document.querySelector("#icn");



function makeProject(n) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (n % 2 === 0) {
        resolve("Hurray! Project done!");
      } else {
        reject("So sad! could not complete the project");
      }
    }, 3000);
  });
  
}

function doTask() {
  let today = new Date();
  let n = today.getSeconds();
  span1.innerHTML = `n is ${n}<br>`;
  let pr = makeProject(n);
pr.then(success, error);
function success(result) {
  span1.innerHTML += result;
  span2.innerHTML = "😊😊";
}
function error(err) {
  span1.innerHTML += err;
  span2.innerHTML = "😢😢";
}
}
