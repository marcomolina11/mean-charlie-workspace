/* **************** Game Constructor ******************
private vars: consumerPrice, dealerCost
private methods: myPrivateFunction: just console.logs, no logic
public properties:  _name: acquired from parameters
                    type: constant, 'board game'
                    player: array


public methods:     addPlayer: adds a player by name to player array
                    showPrivateVariables: console.logs our private variables
on run: runs myPrivateFunction
returns: ourGame object.
*****************  END *******************/


function GameConstructor(consumerPrice,dealerCost,name, inStock){


  var consumerPrice = consumerPrice;
  var dealerCost = dealerCost;
  var ourGame = {};


  ourGame._name = name;
  ourGame.type = 'board game';
  ourGame.player = [];


  ourGame.addPlayer = function(player_name){
    ourGame.player.push(player_name);
  }
  ourGame.showPrivateVariables = function(){
    console.log(dealerCost);
    console.log(consumerPrice);
  }


  function myPrivateFunction(){
    console.log('hello, I am going to create a new object when I am returned!');
  }


  myPrivateFunction();
  return ourGame;
}