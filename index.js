let quote = document.querySelector("p");
let button = document.querySelector("button");
let author = document.querySelector(".author");

let quotations = [
  {
    text: "Life doesn’t ask if you’re ready; it begins, and you learn while living.",
    author: "Unknown",
  },
  {
    text: "Some days are meant to teach you, not please you.",
    author: "Unknown",
  },
  {
    text: "Life is not about having everything, but about finding meaning in what you have.",
    author: "Anonymous",
  },
  {
    text: "The most important journeys in life happen quietly, inside you.",
    author: "Unknown",
  },
  {
    text: "Life becomes lighter when you stop carrying what was never yours to hold.",
    author: "Anonymous",
  },
  { text: "Time will heal everything.", author: "Unknown" },
  {
    text: "Every phase of life speaks a different language—listen before you rush.",
    author: "Unknown",
  },
  {
    text: "Life tests you to shape you, not to break you.",
    author: "Anonymous",
  },
  {
    text: "Sometimes life pauses, not to stop you, but to redirect you.",
    author: "Unknown",
  },
  {
    text: "Life is a collection of moments; don’t miss them while waiting for perfection.",
    author: "Anonymous",
  },
];

let colors = ["#f5c7b8", "#d9b8f5", "#a8d5ba", "#c2d9f5", "#f5e2b8", "#e0b8b8"];

const generateQuote = () => {
  quote.style.opacity = 0;
  author.style.opacity = 0; // fade out author too

  setTimeout(() => {
    let randomIndex = Math.floor(Math.random() * quotations.length);

    // Update quote and author
    quote.textContent = quotations[randomIndex].text;
    author.textContent = `— ${quotations[randomIndex].author}`;

    // Random background color
    let randomBodyColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomBodyColor;

    let randomQuoteColor = colors[Math.floor(Math.random() * colors.length)];
    quote.parentElement.style.backgroundColor = randomQuoteColor;

    // Fade in
    quote.style.opacity = 1;
    author.style.opacity = 1;
  }, 500);
};

button.addEventListener("click", generateQuote);
