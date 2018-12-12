// Write code here to communicate with Github
const reposList = document.querySelector("#repos-list");
const list = document.createElement("li");
fetch("https://api.github.com/users/behzadkk/repos")
  .then(respose => respose.json())
  .then(json => {
    let myRepos = [];
    for (let i = 0; i < json.length; i++) {
      myRepos.push(`<li>${json[i].name}</li>`);
    }
    myRepos = myRepos.join("");
    reposList.innerHTML = `<p>These are my reposetaries on GitHub:</P>${myRepos}`;
  });
