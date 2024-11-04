const URL = "https://meowfacts.herokuapp.com/";
const fact = document.querySelector("#fact");
const button = document.querySelector("#getfact");
//fetch(URL); without options it creates a get request
// let promise = fetch(URL);
// console.log(promise);

const getFacts = async () => {
  console.log("Getting facts...");
  let response = await fetch(URL);
  let data = await response.json();
  fact.innerText = data.data; //Sets the fact on the html paragraph
};
button.addEventListener("click", getFacts);
