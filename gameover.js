import {
    start
} from "./start.js";

import {
    scorep1,scorep2
} from "./main.js";

console.log("gameover.js loaded!");

var jogarnovamente = false;
var botao;
var gameover = new Phaser.Scene("gameOver");

gameover.preload = function () 
{
    this.load.image('player2w', 'assets/win2.png');
    this.load.image('player1w', 'assets/win1.png');
    this.load.image("click", "assets/cliqueaqui.png");
    jogarnovamente = false;
}
gameover.create = function () 
{
    if (scorep1 > scorep2)
    {
        player1win();
    }

    else
    {
        player2win();
    }
    botao = this.physics.add.sprite(512, 512, 'click').setInteractive().setScale(0.3).on('pointerdown', playagain);
}
gameover.update = function () 
{
    if (jogarnovamente)
    {
        this.scene.start(start);
    }

    console.log(scorep1,scorep2)
}

function playagain()
{
    jogarnovamente = true;
}

function player1win()
{
    gameover.add.image(512, 310, 'player1w');
}
function player2win()
{
    gameover.add.image(512,310, 'player2w');
}

export {gameover};