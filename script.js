/* .js files add interaction to your website */
var displayName = document.getElementById("secret");
var button = document.getElementById("myButton");

button.addEventListener("click", displaySecret);

function displaySecret() {
  var text = document.getElementById("myText").value;
  displayName.innerHTML = `Thanks, ${text}, for choosing to shop smarter!`;
}

var factList = [
  "Fast fashion produces 92 million tons of waste every year.",
  "Americans see over 5,000 ads a day.",
  "Only 9% of plastic is recycled.",
  "The average household owns 300,000 items.",
  "We’d need 5 Earths if everyone consumed like the U.S.",
  "Fashion uses more water than any other industry except farming.",
  "Most cheap clothing is made by workers earning under $3/day.",
  "Overconsumption drives deforestation worldwide.",
  "Shopping habits create 60% of global emissions.",
  "Landfills are filling up faster than ever.",
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton) {
  myButton.addEventListener("click", displayFact);
}
function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}