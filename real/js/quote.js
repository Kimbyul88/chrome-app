const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
    author: " Nelson Mandela",
  },
  {
    quote:
      "Don’t aim for success if you want it; just do what you love and believe in, and it will come naturally.",
    author: " David Frost",
  },
  {
    quote: "Grind Hard, Shine Hard.",
    author: " Dwayne Johnson",
  },
  {
    quote:
      "The ones who are crazy enough to think they can change the world, are the ones that do.",
    author: " Anonymous",
  },
  {
    quote:
      "Isn’t it a pleasure to study, and to practice what you have learned?",
    author: " Confucius",
  },
];

const quote = document.querySelector("#quote span:first-child");

const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = "- " + todaysQuote.author;
