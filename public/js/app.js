console.log("Client side javascript file is loaded!");

fetch("http://puzzle.mead.io/puzzle")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

const weatherForm = document.querySelector("form");
const search = document.querySelector('input');
const mesOne = document.querySelector('#mes1');
const mesTwo = document.querySelector('#mes2');


weatherForm.addEventListener("submit", (e) => {
  e.preventDefault()

  mesOne.textContent = 'Loading . . .'
  mesTwo.textContent = ''

  const location = "http://localhost:3000/weather?address=" + search.value

  fetch(location)
  .then((response) => response.json())
  .then((data) => {
    if (data.error) {
      mesOne.innerHTML = data.error
    } else {
      mesOne.textContent = data.location;
      mesTwo.textContent = data.forecast;
    }
  });
});
