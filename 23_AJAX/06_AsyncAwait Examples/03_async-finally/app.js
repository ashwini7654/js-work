function getEmoji() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			let num = Math.round(Math.random());
			if (num === 1) {
				resolve(`${num},😀`);
			} else {
				reject(`${num},😒`);
			}
		}, 3000);
	});
}
async function doTask() {
	let resSpan = document.getElementById("result");
	try {
		let result = await getEmoji();
		resSpan.innerHTML = result;
	} catch (error) {
		resSpan.innerHTML = error;
	}finally {
		resSpan.innerHTML += "<br>Task completed!";
	}
}
