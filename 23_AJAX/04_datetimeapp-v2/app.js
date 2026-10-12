
let displayDiv = document.querySelector("#currentdatetime");
let selectElement = document.querySelector("#timezone");
let btn = document.querySelector("#show-time-btn");

const API_KEY = "BFY7WFI7E0HG";

function showData() {
    let selectedTimezone = selectElement.value;

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let dateTimeObj = JSON.parse(xhr.responseText);

                if (dateTimeObj.status === "OK") {
                    displayDiv.innerText =
                        `Current Date is: ${dateTimeObj.formatted.split(" ")[0]} ` +
                        `and Time is: ${dateTimeObj.formatted.split(" ")[1]}`;
                } else {
                    displayDiv.innerText =
                        "API Error: " + dateTimeObj.message;
                }
            } else {
                displayDiv.innerText =
                    "Sorry! Cannot fetch the date and time";
            }
        }
    };

    let url =
        `https://api.timezonedb.com/v2.1/get-time-zone` +
        `?key=${API_KEY}&format=json&by=zone` +
        `&zone=${encodeURIComponent(selectedTimezone)}`;

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(`zone=${encodeURIComponent(selectedTimezone)}`);
}

//btn.addEventListener("click", showData);
