

import {bundle} from './build'

export default class MainScene extends Phaser.Scene{
	
	constructor(config){
		super(config);
	}


  	var currentScene;
    var cursor;
    var totalCount = 5;
    var scoreLabel;
    var score = 0;
    var bin;
    var timer;
    var game = new Phaser.Game(config);
    //game.pause();
    function preload ()
    {   console.log("dpi is " + window.devicePixelRatio);
    	this.load.image('banana', 'local_asset/banana.png')
    	this.load.image('bin','local_asset/bin.png');
    }

    function create ()
    {   
        
        //var particles = this.add.particles('red');

        // var emitter = particles.createEmitter({
        //     speed: 100,
        //     scale: { start: 1, end: 0 },
        //     blendMode: 'ADD'
        // });
        currentScene = this;
        this.physics.start(Phaser.arcade);
        bin = this.add.sprite(screenWidth/2,screenHeight-100,'bin').setInteractive({draggable:true});
        bin.key = "recycle";
        bin.inputEnabled = true;
        bin.draggable = false;
        bin.onCollide = true;
        bin.on('pointerdown',binClicked);
        bin.on('drag',function(pointer,dragX,dragY){
            if(dragX > 0 && dragX < screenWidth)
            this.x = dragX;
        });
        //handle dragging
        bin.on('dragstart',binDragStarted);
        this.physics.world.enable(bin);
        bin.body.allowGravity = false;
        bin.body.immovable = true;
        //adding frame rate/fps to screen
        scoreLabel = this.add.text(screenWidth - 200 ,50,"分数:",{fontFamily: "Roboto Condensed",fontSize:'40px'});
        scoreLabel.key = "scoreText";

        //this.physics.world.on('collide',bincollide)
        // var logo = this.physics.add.image(400, 100, 'banana')
        // logo.setCollideWorldBounds(true);
        timer = this.time.addEvent({
            delay:500,
            callback:generateGarbage,
            loop:true
        });
       // emitter.startFollow(logo);
    }


    function bincollide(gameobj1,gameobj2,body1,body2){
        gameobj1.destroy();
        score += 1;
        scoreLabel.text = "分数: " + score;
        console.log("colliding between" + gameobj1.key + "and" + gameobj2.key);
    }
    function processCallback(){

    }

    function binClicked(pointer,gameObj){
        console.log("obj clicked");
    }

    function gameobjDraged(pointer,dragX,dragY){
           console.log("game obj dragged");
           gameobj.x = dragX;
           gameobj.y = dragY;
    }
    function binDragStarted(pointer,dragX,dragY){
        console.log("drag started");
    }

    function update (){
        
    }

    function generateGarbage(){
        //create garbage
        let randomX = Phaser.Math.Between(20,screenWidth-20);
        var garbage = currentScene.add.sprite(randomX,50,'banana').setInteractive({draggable:true});
        currentScene.physics.world.enable(garbage);
        garbage.setDisplaySize(60,60);
        garbage.draggable = true;
        garbage.key = "wet";
        garbage.onCollide = true;
        currentScene.physics.add.collider(garbage,bin,bincollide,processCallback);
    }

}