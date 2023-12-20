// Code your solutions in this file

function writeCards() {
  let thankYouMessage = [];
  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    thankYouMessage.push(message);
  }
  return thankYouMessage;
}

let names = ["Guadalupe", "Ollie", "Aki"];

console.log(writeCards(names));
/***** */
let num = 11;
function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}

console.log(countDown(num));
