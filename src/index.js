// we first define a function for DOMCOntentLoading and it will run after the page has fully loaded.
// We put everything inside for a neater code
// first grab the form 
// add an eventListener that hears when the form is submitted, (the event is submit) and ePreventDefault method that prevents page from reloading
// then grab the input using its id
// when a user enters a value, this value is used to request the server for movie information
// `${input.value} makes the url more specific. it now requests for a movie of a specific id number.
// the fetch method is used to send request to the server. Its default http verb is get.
// the server responds but the data needs to be converted into readable format using JSON().
// now we can do something with the data, for example, we are now crating content of title and summary with it.
// To show that the form has fully loaded, we use DOMCOntentLoaded.
const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener('DOMContentLoaded', init);