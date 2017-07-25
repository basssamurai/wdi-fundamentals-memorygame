var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = []

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
}

var flipCard = function(cardId) {

console.log("User flipped" + cards[0] || + "User flipped" + cards[1] || "User flipped" + cards[2] || "User flipped" + cards[3]);

cardsInPlay.push(cards(0) || or cards(1) || cards(2) || cards(3) );

cards(0);
cards(2);

checkForMatch();


};



