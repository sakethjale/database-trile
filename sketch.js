


var ed1, ed2, ed3, ed4
var goal1, goal2
var gameState = 0
var playerCount
var game, form, player
var database
var gameState = 0;
var database, game, player, playerCount, othplayer;
var edges
var firstpageimg
var bgimg, bgimg2;
var hero1, hero2
var invisibl
var allPlayers
var ju, jv
var kicksound, kickpunch

var restartimg, restart;
var backgroundsound
var hit;
var health1, health2;
var trofi, trofimg;
var hitman;
var endbg
var ball, ballimg

function preload() {
  p1 = loadImage("p1.png")
  p2 = loadImage("p2.png")
  ballimg = loadImage("ball.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  database = firebase.database()


  hero1 = createSprite(width / 2 - 550, height / 2)
  hero1.addImage("pll1", p1)
  hero1.scale = 0.2
  hero2 = createSprite(width / 2 + 550, height / 2)
  hero2.addImage("pll2", p2)
  hero2.scale = 0.2
  ed3 = createSprite(width / 2 + 650, height / 2 - 220, 10, 250)
  ed3.shapeColor = 'gold'
  ed4 = createSprite(width / 2 + 650, height / 2 + 220, 10, 250)
  ed4.shapeColor = 'gold'
  ed1 = createSprite(width / 2 - 650, height / 2 - 220, 10, 250)
  ed1.shapeColor = 'gold'
  ed2 = createSprite(width / 2 - 650, height / 2 + 220, 10, 250)
  ed2.shapeColor = 'gold'
  goal1 = createSprite(width / 2 - 650, height / 2, 30, 190)
  goal1.shapeColor = 'green'
  goal2 = createSprite(width / 2 + 650, height / 2, 30, 190)
  goal2.shapeColor = 'green'
  hero1.visible = false
  hero2.visible = false
  ed1.visible = false
  ed2.visible = false
  ed3.visible = false
  ed4.visible = false
  goal1.visible = false
  goal2.visible = false
  

  game = new Game()
  game.getState()
  game.start()

}


function draw() {
  background(255)

  edges = createEdgeSprites();


  if (playerCount === 2) {
    gameState = 1;
    game.update(1);
  }

  if (gameState === 1) {
    hero1.visible = true
    hero2.visible = true
    
    
  
    

    ed1.visible = true
    ed2.visible = true
    ed3.visible = true
    ed4.visible = true
    goal1.visible = true
    goal2.visible = true
    hero1.bounceOff(edges)
    hero2.bounceOff(edges)
    
    game.play();

  }


  drawSprites();

}
