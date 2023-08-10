import kaboom from "kaboom"

// Setting a title for the page
document.title = 'Coder, Coffee and Bugs'

// Initialize context
kaboom({
  font: "sink",
  background: [210, 210, 155,],
})

// Lets load the Sprites
loadSprite("bug", "sprites/bug.png");
loadSprite("programmer", "sprites/programmer.png");
loadSprite("coffee", "sprites/coffee.png");

// Lets load the Music

// Lets define some game variables
let SPEED = 620
let BSPEED = 2
let SCORE = 0
let scoreText;
let bg = false;
let backgroundMusic;
let LIVES = 3;

// Lets define a function to display our score
const displayScore = () => {
  destroy(scoreText)
  // a simple score counter
  scoreText = add([
    text("Score: " + SCORE),
    scale(3),
    pos(width() - 181, 21),
    color(10, 10, 255)
  ])
}
