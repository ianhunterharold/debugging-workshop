document.addEventListener('DOMContentLoaded', () => {
  
  main();
});

const URL = "https://icanhazdadjoke.com/";

function main(){
  fetchJoke()
};


//get is not needed in method because if you dont say what it is, it implies that it's a GET/ didnt need Content-type only needed for POST/PATCH
  function fetchJoke(){
    fetch(URL, {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(response => response.json()) // this line turns our response into json format 
    .then(json => postJoke(json)); // have our function work on the returned json formatted data 
    // .then(jokeData => joke = jokeData.joke) unsure about the format of this then statement. 
  }



function postJoke(individualJoke){

  const form = document.getElementById('joke-form');
  const jokeList = document.getElementById('joke-list');
  const newJokeLi = document.createElement('li');
  const username = document.getElementById('name-input').value;
  let joke;


  form.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log('submit',form)

    if(username === "") return;
    fetchJoke()
  
    newJokeLi.textContent = `<span class="username">${username} says:</span> ${individualJoke}`
    console.log(`<span class="username">${username} says:</span> ${individualJoke}`)
    jokeList.appendChild(newJokeLi);
    form.appendChild(jokeList);


  })

}