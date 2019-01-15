// Write code here to communicate with Github
const reposList = document.querySelector("#repos-list");
const repoCount = document.querySelector("#repos-count");
const input = document.querySelector("#user_seletion");
const searchBtn = document.querySelector("#search-user");
let searchedUser = "Behzadkk";
const showRepos = () => {
  const endpoint = `https://api.github.com/users/${searchedUser}/repos`;
  fetch(endpoint)
    .then(respose => respose.json())
    .then(json => {
      let myRepos = [];
      for (let i = 0; i < json.length; i++) {
        myRepos.push(
          `<li><a href = "${json[i].html_url}"> ${json[i].name}</a></li>`
        );
      }
      myRepos = myRepos.join("");
      reposList.innerHTML = `<p>These are my reposetaries on GitHub:</P>${myRepos}`;
      return json;
    })
    .then(json => {
      repoCount.innerHTML = `<a href = "${json[0].owner.html_url}"> ${
        json.length
      }</a>`;
    })
    .catch(error => alert("Searched user is not a valid user"));
};
showRepos();
searchBtn.addEventListener("click", function() {
  searchedUser = input.value;
  showRepos();
});
