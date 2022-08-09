// quote text and author name
let quote = document.getElementById("quote");
let author = document.getElementById("author");

//  4 functional btn
let generateBtn = document.getElementById("btn");
let copy = document.getElementById("copy");
let voice = document.getElementById("voice");
let twitter = document.getElementById("twitter");

// generate random quote
generateBtn.addEventListener("click", function () {
  generateBtn.textContent = "Loading quote... ";
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote.textContent = data.content;
      author.textContent = ` -- ${data.author}`;
      generateBtn.textContent = "Generate Quote";
    });
});

// copy quote
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(quote.textContent);
});

// speech quote
voice.addEventListener("click", () => {
  let textTospeech = new SpeechSynthesisUtterance(
    `${quote.textContent} by ${author.textContent}`
  );
  speechSynthesis.speak(textTospeech);
});

// tweet quote
twitter.addEventListener("click", () => {
  let twitterUrl = `https://twitter.com/intent/tweet?url=${quote.textContent}`;
  window.open(twitterUrl, "_blank");
});
