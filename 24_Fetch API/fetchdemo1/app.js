function getData() {
  const txtUserName = document.querySelector("#githubId").value.trim();
  const detailsDiv = document.querySelector("#details");
  if (!txtUserName) {
    detailsDiv.innerHTML = `<p style="color:red;">Please enter a valid github username</p>`;
    return;
  }
  detailsDiv.innerHTML = '<div class="loader"></div>';
  let endPoint = "https://api.github.com/users/" + txtUserName;
  let pr = fetch(endPoint);

  pr.then((response) => {
    if (response.status !== 200) {
      throw new Error("User not found");
    }
    detailsDiv.innerHTML = "";
    return response.json();
  })
    .then((user) => {
      let name = user.name;
      let company = user.company;
      let website = user.blog;
      let imgUrl = user.avatar_url;

      let img = document.createElement("img");
      img.src = imgUrl;

      let pname = document.createElement("p");
      pname.innerHTML = `<strong>Name:</strong>${name}`;

      let pcompany = document.createElement("p");
      pcompany.innerHTML = `<strong>Company:</strong>${company}`;

      let pwebsite = document.createElement("p");
      pwebsite.innerHTML = `<strong>Website:</strong><a href="${website}">${website}</a>`;

      detailsDiv.appendChild(img);
      detailsDiv.appendChild(pname);
      detailsDiv.appendChild(pcompany);
      detailsDiv.appendChild(pwebsite);
    })
    .catch((error) => {
      detailsDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
