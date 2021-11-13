class Form {

    constructor() {
        this.input = createInput("").attribute("placeholder", "enter name");
        this.button = createButton('fight');
        this.greeting = createElement('h1');
        this.input.size(200)
        this.button.size(100)
        this.gide1 = createElement('h2')
        this.gide2 = createElement('h2')
        this.gide3 = createElement('h2')
        this.gide4 = createElement('h2')
        this.reload = createButton('reload')
    }

    hidden() {

        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.gide1.hide();
        this.gide2.hide();
        this.gide3.hide();
        this.gide4.hide();

    }

    display() {
        this.input.position(displayWidth / 2 - 100, 100);

        this.button.position(displayWidth / 2 - 50, 150);

        this.reload.position(displayWidth / -670, displayHeight / 2 - 350)
        this.gide4.html("  * press any letter to stop the player at a place")
        this.gide4.position(50, displayHeight / 4 + 200);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();



            player.name = this.input.value();

            playerCount += 1;
            player.index = playerCount;


            if (player.index === 1 && hero1 !== undefined) {
                player.xpos = hero1.x
                player.ypos = hero1.y
            }

            if (player.index === 2 && hero2 !== undefined) {
                player.xpos = hero2.x
                player.ypos = hero2.y
            }

            player.update();
            player.updateCount(playerCount);

            this.greeting.html("hello" + player.name)
            this.greeting.position(70, displayHeight / 4);


            this.gide1.html("DOWN ARROW = move down")
            this.gide1.position(50, displayHeight / 4 + 50);

            this.gide2.html("UP ARROW = move up")
            this.gide2.position(50, displayHeight / 4 + 100);

            this.gide3.html("score to win = 5")
            this.gide3.position(50, displayHeight / 4 + 150);


        })

        this.reload.mousePressed(() => {
            game.update(0)

            player.updateCount(0)

            window.location.reload()

            database.ref('/').update(
                {
                    players: null,
                })

        })
    }
}

