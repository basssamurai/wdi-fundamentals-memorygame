var cards = [
{
	rank : "queen",
	suit : "hearts",
	cardImage : "images/queen-of-hearts.png"
}
{
	rank : "queen",
	suit : "diamonds",
	cardImage : "images/queen-of-diamonds.png"
}
{

	rank : "king",
	suit : "hearts",
	cardImage : "images/king-of-hearts.png"
}
{
	rank : "king",
	suit : "diamonds",
	cardImage : "images/king-of-diamonds.png"
}
];

var cardsInPlay = []

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
}

var flipCard = function(cardId) {

console.log("User flipped" + cards[cardID].rank);

cardsInPlay.push(cards[cardID].rank);

console.log(cardImage);
console.log(suit);


cards(0);
cards(2);

checkForMatch();


};



