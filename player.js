class Player {
    constructor() {
        this.index = null
        this.name = null
        this.xpos = 0
        this.xpos = 0
        this.score = 0
    }

    getCount() {
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value", (data) => {
            playerCount = data.val()
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        })
    }
    updateCount(count) {
        database.ref('/').update(
          {
            playerCount: count
    
          });
      }
    getposition() {
        var playerpos = database.ref('players/player' + this.index);
        playerpos.on("value", (data) => {
          var pos = data.val();
          this.xpos = pos.x;
          this.ypos = pos.y;
         
        })
        var ballpos = database.ref('ball' + this.index);
       ballpos.on("value", (data) => {
          var pos = data.val();
          this.xpos = pos.x;
          this.ypos = pos.y;
         
        })
        
      }
      update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set
          ({
            name: this.name,
            x: this.xpos,
            y: this.ypos,
          });
          var ballIndex = "ball" + this.index;
        database.ref(ballIndex).set
          ({
            x: this.xpos,
            y: this.ypos,
          });
      }
    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
          allPlayers = data.val();
        })
        var ballInfoRef = database.ref('players');
        ballInfoRef.on("value", (data) => {
          allPlayers = data.val();
        })
      }

      changePosition(myx, myy) {
        database.ref('ball'+this.index).update({
          'x': this.xpos + myx,
            'y': this.ypos + myy
        })
        database.ref('players/player' + this.index).update
          ({
            'x': this.xpos + myx,
            'y': this.ypos + myy
          })
      }

}