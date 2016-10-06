/* ***** Deck Constructor ***** */

function Deck(){
	//generate an array with all 52 cards in order upon creation of deck
	this.cards = this.genCards();
}
//Generate card objects and put them in cards array
Deck.prototype.genCards = function(){
	var cards = [];
	var suits = ["Hearts", "Spades", "Clubs", "Diamond"];
	var values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

	for (var i = 0; i < suits.length; i++){
		for (var j = 0; j < values.length; j++){
			card = {};
			card.suit = suits[i];
			card.value = values[j];
			cards.push(card);
		}
	}
	return cards;
}
//EXAMPLE: genCards using .forEach()
//NOTE: suits and values are the arrays above
//NOTE: Card is an object with a suit and a value
//NOTE: suit (inside function(suit)) is the value of the suits element
//NOTE: if function(suit, index) then suits would be the value.. and index the index
/*
 suits.forEach(function(suit){
 	values.forEach(function(value){
 		cards.push(new Card(value, suit));
 	});
 });
*/

//Shuffle cards in cards array
Deck.prototype.shuffle = function(){
	numberOfShuffles = Math.floor((Math.random() * 100 ) + 50);
	for (var i = 0; i <= numberOfShuffles; i++){
		var randomInteger1 = Math.floor(Math.random() * this.cards.length);
		var randomInteger2 = Math.floor(Math.random() * this.cards.length);
		var temp = this.cards[randomInteger1];
		this.cards[randomInteger1] = this.cards[randomInteger2];
		this.cards[randomInteger2] = temp;
	}
	return this;
}
Deck.prototype.reset = function(){
	this.cards = this.genCards();
	return this;
}
Deck.prototype.deal = function(){
	if (this.cards.length > 0){
		return this.cards.pop();
	} 
	else {
		return null;
	}
}
/* ***** END ***** */

/* ***** Player Constructor ***** */
function Player(name){
	this.name = name;
	this.hand = [];
}
Player.prototype.takeCard = function(deck){
	card = deck.deal();
	this.hand.push(card); 
	return this;
}
Player.prototype.discardCard = function(cardIdx){
	if (this.hand.length > cardIdx){
		this.hand.splice(cardIdx, 1);
	}
	return this;
}
/* ***** END ***** */

mydeck = new Deck();
// mydeck.shuffle();
// console.log(mydeck.cards);
// mydeck.reset();
// console.log(mydeck.cards);
// card = mydeck.deal();
// console.log(card);
// console.log(mydeck.cards.length);

marco = new Player("Marco");
// marco.takeCard(mydeck);
// console.log(marco.hand);
// marco.discardCard();
// console.log(marco.hand);


