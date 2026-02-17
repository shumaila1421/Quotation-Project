//variables

let quote = document.querySelector("p");
let button = document.querySelector("button");

//Logic

let quotations = [
  "Life doesn’t ask if you’re ready; it begins, and you learn while living.",
  "Some days are meant to teach you, not please you.",
  "Life is not about having everything, but about finding meaning in what you have.",
  "The most important journeys in life happen quietly, inside you.",
  "Life becomes lighter when you stop carrying what was never yours to hold.",
  "Time will heal everything.",
  "Every phase of life speaks a different language—listen before you rush.",
  "Life tests you to shape you, not to break you.",
  "Sometimes life pauses, not to stop you, but to redirect you.",
  "Life is a collection of moments; don’t miss them while waiting for perfection.",
  "The beauty of life lies in its uncertainty.",
  "Life teaches patience by making you wait and wisdom by making you fall.",
  "Life doesn’t change overnight, but small choices change it forever",
  "Silence is golden.",
  "Keep moving forward.",
];

const generateQuote = () => {
  let randomQuotations = Math.floor(Math.random() * quotations.length);
  quote.innerHTML = quotations[randomQuotations];
};

button.addEventListener("click", generateQuote);
