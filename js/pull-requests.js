const PRList = document.querySelector("#pull-requests-list");
const input = document.querySelector("#user_seletion");
const hint = document.querySelector("#hint");
input.addEventListener("keyup", function(event) {
  const value = event.target.value;
  fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
    .then(respose => respose.json())
    .then(json => {
      let myPRs = [];
      for (let i = 0; i < json.length; i++) {
        let users = [];
        users.push(json[i].user.login);
        if (users.includes(value)) {
          myPRs.push(
            `<li><a href = "${json[i].html_url}"> ${json[i].title}</a></li>`
          );
        } else {
          //   myPRs.push(`<li> ${users}</li>`);
          console.log(json[i].user.login);
        }
      }
      myPRs = myPRs.join("");
      PRList.innerHTML = `<p>These are Pull Requests submitted against js-exercises:</p>${myPRs}`;
      return json;
    });
});
