let quote = document.querySelector("p");
let button = document.querySelector("button");

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

let colors = ["#f6d365", "#fda085", "#a1c4fd", "#c2e9fb", "#d4fc79", "#96e6a1"];

const generateQuote = () => {
  quote.style.opacity = 0;

  setTimeout(() => {
    let randomIndex = Math.floor(Math.random() * quotations.length);
    quote.textContent = quotations[randomIndex];

    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    quote.style.opacity = 1;
  }, 500);
};

button.addEventListener("click", generateQuote);
