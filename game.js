class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })
  }

  update(state) {
    database.ref('/').update
      ({
        gameState: state
      })
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");

      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }

      form = new Form()
      form.display();
    }
  }

  play() {

    form.hidden()

    Player.getPlayerInfo()



    if (allPlayers !== undefined) {
      player.getposition()

      if (player.index === 1) {
        hero2.x = allPlayers["player2"].x
        hero2.y = allPlayers["player2"].y
        hero1.x = player.xpos
        hero1.y = player.ypos
        

        hero1.name = player.name;
        hero2.name = allPlayers["player2"].name;

        fill("green")
        textSize(60)
        text(player.name, hero1.x, hero1.y + 60)

        if(keyCode===RIGHT_ARROW){
          player.changePosition(20,0)
        }
        if(keyCode===LEFT_ARROW){
          player.changePosition(-20,0)
        }
        if(keyCode===UP_ARROW){
          player.changePosition(0,-20)
        }
        if(keyCode===DOWN_ARROW){
          player.changePosition(0,20)
        }
        if(hero1.x>displayWidth/2){
          player.changePosition(-20,0)
       }

        keyCode = 65

      }

      if (player.index === 2) {
        hero1.x = allPlayers["player1"].x
        hero1.y = allPlayers["player1"].y
        hero2.x = player.xpos
        hero2.y = player.ypos
       

        hero2.name = player.name;
        hero1.name = allPlayers["player1"].name;

        fill("green")
        textSize(60)
        text(player.name, hero2.x, hero2.y + 60);

        if(keyCode===RIGHT_ARROW){
          player.changePosition(20,0)
        }
        if(keyCode===LEFT_ARROW){
          player.changePosition(-20,0)
        }
        if(keyCode===UP_ARROW){
          player.changePosition(0,-20)
        }
        if(keyCode===DOWN_ARROW){
          player.changePosition(0,20)
        }
        if(hero2.x<displayWidth/2){
           player.changePosition(20,0)
        }
        
        keyCode = 65
      }
      hero1.collide(ed1)
      hero1.collide(ed2)
      hero1.collide(goal1)
      hero2.collide(ed3)
      hero2.collide(ed4)
      hero2.collide(goal2)

      

    }
  }
}