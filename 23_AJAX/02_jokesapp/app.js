let xhr = new XMLHttpRequest();
let btnJoke = document.querySelector("#get-joke-btn");
let jokeSetUp = document.querySelector("#joke-setup");
let jokePunchline = document.querySelector("#joke-punchline");
btnJoke.addEventListener("click", () => {
	xhr.onreadystatechange = processResponse;
	//onreadystatechange is an event handler that is called whenever the readyState property of the XMLHttpRequest object changes. The readyState property holds the status of the XMLHttpRequest. The possible values are:
	xhr.open(
		"GET",
		"https://official-joke-api.appspot.com/jokes/programming/random",
		true
	);
	xhr.send(null);
});

const processResponse = () => {
	if (xhr.readyState == 4) {
		if (xhr.status === 200) {
			let jokeArr = JSON.parse(xhr.responseText);
			let jokeObj = jokeArr[0];
			jokeSetUp.innerText = jokeObj.setup;
			jokePunchline.innerText = jokeObj.punchline;
		} else {
			jokeSetUp.innerText = "Sorry! Cannot fetch the joke";
		}
	}
};
