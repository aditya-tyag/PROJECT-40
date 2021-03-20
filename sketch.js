//variables
var database;
var back_img;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var score = 0;

var player, form, game;
var player1, player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score = 0;
var player2score = 0;

function preload(){
  //loading the images
  back_img = loadImage("jungle.jpg");
  player_img = loadImage("basket2.png");
  fruit1_img = loadImage("apple2.png");
  fruit2_img = loadImage("banana2.png");
  fruit3_img = loadImage("melon2.png");
  fruit4_img = loadImage("orange2.png");
  fruit5_img = loadImage("pineapple2.png");
  //creating a new group for fruits
  fruitGroup = new Group();
}
function setup() {
  //creating a canvas
  createCanvas(1000, 600);
  //database = firebase.database();
  database = firebase.database();
  //creating a new game
  game = new Game();
  //getting the gameState
  game.getState();
  //starting the game
  game.start();
  
}

function draw() {
  //background is the background image
  background(back_img);

  //if gameState is 1 then the play() the game
  if(gameState === 1){
    clear();
    game.play();
  }
  //if gameState = 2, end the game
  if(gameState === 2){
    game.end();
  }
  //if player count is 2, update the game state to 1
  if(playerCount === 2){
    game.update(1);
  }
}