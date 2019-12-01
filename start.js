import { main } from "./main.js";

console.log("start.js loaded!");

var start = new Phaser.Scene("SceneA");
var space;
var botao;
var cursors;
var jogar = false;
var pontos = 5;
var pontosshow;
var tempo = 30000;
var temposhow;
var botaoup;
var botaodown;
var maxpoints = 5;

start.preload = function() {
    this.load.image("background", "assets/background.png");
    this.load.image("click", "assets/botao1.png");
    this.load.image("arrow", "assets/mais.png");
    this.load.image("arrow2", "assets/menos.png");
    this.load.image("lda", "assets/lda.png");
    this.load.image("alvo", "assets/alvo.png");
    this.load.image("relogio", "assets/relogio.png");
    jogar = false;
};

start.create = function() {
    this.add.image(512, 310, "background");
    space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    botao = this.physics.add
        .sprite(512, 312, "click")
        .setInteractive()
        .setScale(1)
        .on("pointerdown", pointer);
    botaodown = this.physics.add
        .sprite(600, 450, "arrow2")
        .setInteractive()
        .setScale(0.7)
        .setAngle(180)
        .on("pointerdown", scoredown);
    botaoup = this.physics.add
        .sprite(600, 385, "arrow")
        .setInteractive()
        .setScale(0.5)
        .on("pointerdown", scoreup);
    cursors = this.input.keyboard.createCursorKeys();
    this.add.sprite(600, 420, "alvo").setScale(0.1);
    this.add
        .sprite(420, 420, "relogio")
        .setScale(0.027)
        .setInteractive()
        .on("pointerdown", changetime);
    this.add.sprite(500, 50, "lda");
    temposhow = this.add.text(405, 412, tempo / 1000 + "s", {
        fontFamily: "ComicSans"
    });
    pontosshow = this.add.text(596, 412, pontos, {
        fontFamily: "ComicSans"
    });
};

start.update = function() {
    if (jogar) {
        this.scene.start(main);
    }
};

function pointer() {
    jogar = true;
}

function changetime() {
    if (tempo < 179000) {
        tempo = tempo + 30000;
        temposhow.setText(tempo / 1000 + "s");
    } else {
        tempo = 0;
        temposhow.setText(tempo / 1000 + "s");
    }
}

function scoreup() {
    if (pontos <= 59) {
        pontos = pontos + 5;
        pontosshow.setText(pontos);
    }
}

function scoredown() {
    if (pontos > 0) {
        pontos = pontos - 5;
        pontosshow.setText(pontos);
    }
}

export { start };
export { pontos };
export { tempo };
