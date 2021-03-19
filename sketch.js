var bgrunning, bgfight;
var charizard, charizardImg;
var gengar, gengarImg;
var articuno, articunoImg;
var moltres, moltresImg;
var zapdos, zapdosImg;
var hooh, hoohImg;
var mewtwo, mewtwoImg;
var mew, mewImg;
var zekrom, zekromImg;
var reshiram, reshiramImg;
var deoxys, deoxysImg
var pokeball, pokeballImg
var retry, retryImg;
var heart, heartImg, blackheart, blackheartImg;
var fire, fireImg, fireground, firegroundImg, waterpuddle, waterpuddleImg, hole, holeImg;


var gameState=1;


function preload(){
bgfight = loadImage("images/dark_cloud.jpg");
bgrunning = loadImage("images/volcano.jpg");
charizardImg = loadImage("images/charizard.png");
gengarImg = loadImage("gengar.png");
deoxysImg = loadImage("deoxys.png");
mewImg = loadImage("mew.png");
mewtwoImg = loadImage("mewtwo.png");
hoohImg = loadImage("ho oh.png");
moltresImg = loadImage("moltres.png");
articunoImg = loadImage("articuno.png");
zapdosImg = loadImage("zapdos.png");
zekromImg = loadImage("zekrom.png");
reshiramImg = loadImage("reshiram.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight-120);
  createSprite(400, 200, 50, 50);
}

function draw() {
    if(gameState === 1){
        background(bgrunning);
    }

    if(gameState === 2){
        background(bgfight);
    }
    
  drawSprites();

}