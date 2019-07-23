//湿垃圾
let wet_garbageData = [{"name_cn":"香蕉","type":0,"icon":"./local_asset/waste_category/wet/banana.png"},
                    {"name_cn":"西红柿","type":0,"icon":"./local_asset/waste_category/wet/icons8-tomato.png"},
                    {"name_cn":"黄瓜","type":0,"icon":"./local_asset/waste_category/wet/icons8-cucumber.png"},
                    {"name_cn":"茄子","type":0,"icon":"./local_asset/waste_category/wet/icons8-aubergine.png"},
                    {"name_cn":"红辣椒","type":0,"icon":"./local_asset/waste_category/wet/icons8-paprika.png"},
                    {"name_cn":"番薯","type":0,"icon":"./local_asset/waste_category/wet/icons8-brown_potato.png"},
                    {"name_cn":"南瓜","type":0,"icon":"./local_asset/waste_category/wet/icons8-pumpkin.png"},
                    {"name_cn":"橙子","type":0,"icon":"./local_asset/waste_category/wet/icons8-orange.png"},
                    {"name_cn":"小蛋糕","type":0,"icon":"./local_asset/waste_category/wet/icons8-cupcake.png"},
                    {"name_cn":"菠萝","type":0,"icon":"./local_asset/waste_category/wet/icons8-pineapple.png"},
                    {"name_cn":"草莓","type":0,"icon":"./local_asset/waste_category/wet/icons8-strawberry.png"},
                    {"name_cn":"桃子","type":0,"icon":"./local_asset/waste_category/wet/icons8-peach.png"},
                    {"name_cn":"西瓜","type":0,"icon":"./local_asset/waste_category/wet/icons8-watermelon.png"},
                    {"name_cn":"葡萄","type":0,"icon":"./local_asset/waste_category/wet/icons8-grape.png"},
                    {"name_cn":"大虾","type":1,"icon":"./local_asset/waste_category/wet/icons8-prawn.png"},
                    {"name_cn":"苹果","type":1,"icon":"./local_asset/waste_category/wet/icons8-apple.png"}
                    ];
//干垃圾
let dry_garbageData = [{"name_cn":"牙齿","type":1,"icon":"./local_asset/waste_category/dry/icons8-tooth_caries.png"},
                       {"name_cn":"化妆刷","type":1,"icon":"./local_asset/waste_category/dry/icons8-cosmetic_brush.png"},
                       {"name_cn":"大骨头","type":1,"icon":"./local_asset/waste_category/dry/icons8-dog_bone.png"},
                       {"name_cn":"贝壳","type":1,"icon":"./local_asset/waste_category/dry/icons8-shellfish.png"},
                       {"name_cn":"厕纸","type":1,"icon":"./local_asset/waste_category/dry/icons8-toilet_paper.png"},
                       {"name_cn":"扫帚","type":1,"icon":"./local_asset/waste_category/dry/icons8-witch_broom.png"},
                       {"name_cn":"海绵宝宝","type":1,"icon":"./local_asset/waste_category/dry/海绵宝宝.png"},
                        ];

//可回收垃圾
let recyclable_garbageData = [{"name_cn":"智能手表","type":2,"icon":"./local_asset/waste_category/recycle/icons8-apple_watch_apps.png"},
                              {"name_cn":"篮球","type":2,"icon":"./local_asset/waste_category/recycle/icons8-basketball.png"},
                              {"name_cn":"望远镜","type":2,"icon":"./local_asset/waste_category/recycle/icons8-binoculars.png"},
                              {"name_cn":"废旧书本","type":2,"icon":"./local_asset/waste_category/recycle/icons8-book.png"},
                              {"name_cn":"纸箱","type":2,"icon":"./local_asset/waste_category/recycle/icons8-box.png"},
                              {"name_cn":"相机","type":2,"icon":"./local_asset/waste_category/recycle/icons8-compact_camera.png"},
                              {"name_cn":"足球","type":2,"icon":"./local_asset/waste_category/recycle/icons8-football.png"},
                              {"name_cn":"旧衣物","type":2,"icon":"./local_asset/waste_category/recycle/icons8-jacket.png"},
                              {"name_cn":"显示器","type":2,"icon":"./local_asset/waste_category/recycle/icons8-monitor.png"},
                              {"name_cn":"电视","type":2,"icon":"./local_asset/waste_category/recycle/icons8-retro_tv.png"},
                              {"name_cn":"刷子","type":2,"icon":"./local_asset/waste_category/recycle/icons8-shoe_brush.png"},
                              {"name_cn":"袜子","type":2,"icon":"./local_asset/waste_category/recycle/icons8-socks.png"},
                              {"name_cn":"游戏机","type":2,"icon":"./local_asset/waste_category/recycle/icons8-visual_game_boy.png"},
                              {"name_cn":"葡萄酒瓶","type":2,"icon":"./local_asset/waste_category/recycle/icons8-wine_bottle.png"},
                              {"name_cn":"靴子","type":2,"icon":"./local_asset/waste_category/recycle/icons8-winter_boots.png"}
                                ];
//有害垃圾
let hazardous_garbageData = [{"name_cn":"温度计","type":3,"icon":"./local_asset/waste_category/hazardous/icons8-thermometer.png"},
                              {"name_cn":"蓄电池","type":3,"icon":"./local_asset/waste_category/hazardous/icons8-car_battery.png"},
                              {"name_cn":"药丸","type":3,"icon":"./local_asset/waste_category/hazardous/icons8-pills.png"},
                              {"name_cn":"油漆桶","type":3,"icon":"./local_asset/waste_category/hazardous/icons8-paint_bucket.png"},
                              {"name_cn":"废弃灯泡","type":3,"icon":"./local_asset/waste_category/hazardous/icons8-spiral_bulb.png"}];

let garbagePack = [wet_garbageData,dry_garbageData,recyclable_garbageData,hazardous_garbageData];


var myCustomCanvas = document.createElement('canvas');

myCustomCanvas.id = 'canvas';

document.body.appendChild(myCustomCanvas);

//  It's important to set the WebGL context values that Phaser needs:
var contextCreationConfig = {
    alpha: false,
    depth: false,
    antialias: true,
    premultipliedAlpha: true,
    stencil: true,
    preserveDrawingBuffer: false,
    failIfMajorPerformanceCaveat: false,
    powerPreference: 'default'
};

var myCustomContext = myCustomCanvas.getContext('webgl2', contextCreationConfig);
//start of game

var IntroScene = new Phaser.Class({
    Extends:Phaser.Scene,
    initialize:function IntroScene(config){
        
    },
    preload:function preload(){
        
    },
    create: function create(){

    },

});

var introScene = new IntroScene({"key":"intro"});
 // * window.devicePixelRatio
let screenWidth = window.screen.width * window.devicePixelRatio;
let screenHeight = window.screen.height * window.devicePixelRatio;
var mainScene = {preload: preload,
            create: create,
            update: update,
            key: 'main'}
    var config = {
        type: Phaser.WEBGL,
        width: screenWidth,
        height: screenHeight,
        canvas: document.getElementById('canvas'),
        context: myCustomContext,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 50 }
            }
        },
        scene: [mainScene]
    };
    var currentScene;
    var cursor;
    var totalCount = 5;
    var scoreLabel;
    var score = 0;
    var bin;
    var binType = 2;
    var currentChallengeType = 2;
    var timer;

    var recycleText;
    var startBtn;
    var game = new Phaser.Game(config);
    game.scene.pause('main');
    var gameOver = false;
    //game.pause();
    window.focus();
    resize();
    window.addEventListener('resize', resize, false);
    function resize() {
        console.log("window resized");
    var canvas = document.querySelector('canvas');
    console.log(canvas.id);
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio =  game.config.width / game.config.height;
    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + 'px';
        canvas.style.height = (windowWidth / gameRatio) + 'px';
    } else {
        canvas.style.width = (windowHeight * gameRatio) + 'px';
        canvas.style.height = windowHeight + 'px';
    }


}

    function preload ()
    {   
        //load bin
        this.load.image('bin','local_asset/bins/bin.png');
        this.load.image('startBtn','local_asset/control_panel/icons8-start.png');
        this.load.image('restartBtn','local_asset/control_panel/icons8-restart.png');
        for(i=0; i<garbagePack.length;i++){
            let garageArray = garbagePack[i];
            for(j = 0; j<garageArray.length;j++){
                let garbage = garageArray[j];
                this.load.image(garbage["name_cn"],garbage["icon"]);
            }
        }
        //load garbage - wet
        // this.load.image('香蕉','local_asset/waste_category/wet/banana.png');
        // this.load.image('西红柿','local_asset/waste_category/wet/icons8-tomato.png')

    }

    function create ()
    {   
        currentScene = this;
        this.physics.start(Phaser.arcade);
        bin = this.add.sprite(screenWidth/2,screenHeight-150,'bin').setInteractive({draggable:true});
        bin.key = "recycle";
        bin.inputEnabled = true;
        bin.draggable = false;
        bin.onCollide = true;
        bin.setDisplaySize(150,150);
        bin.on('drag',function(pointer,dragX,dragY){
            if(dragX > 0 && dragX < screenWidth)
            this.x = dragX;
        });
   
        this.physics.world.enable(bin);
        bin.body.allowGravity = false;
        bin.body.immovable = true;
        //adding frame rate/fps to screen
        scoreLabel = this.add.text(screenWidth - 200 ,50,"分数: 0",{fontFamily: "Roboto Condensed",fontSize:'40px'});
        scoreLabel.key = "scoreText";

        //add button
        var btnTextConfig = {fontFamily: "Roboto Condensed",fontSize:'80px',backgroundColor:'#27AE60',padding:{x:10,y:10}}
        recycleText = this.add.text(screenWidth/2 - 100, screenHeight/2 - 200, '可循环分类挑战', btnTextConfig);
        recycleText.x = screenWidth/2 - recycleText.width/2;

        startBtn = this.add.sprite(screenWidth/2,screenHeight/2 + 100,'startBtn').setInteractive();
        startBtn.inputEnabled = true;
        startBtn.setDisplaySize(200,200);
        startBtn.on('pointerdown',startBtnClicked);
    }


    function startBtnClicked(pointer){
        console.log("startbtn clicked");
        startBtn.destroy();
        recycleText.destroy();
        startRainTimer();
    }

    function startRainTimer(){
        timer = currentScene.time.addEvent({
            delay:1000,
            callback:generateGarbage,
            loop:true
        });
    }
    
    var panel_square;
    var graphics;
    function bincollide(gameobj1,gameobj2,body1,body2){
        if(gameOver == true){
            return;
        }
        gameobj1.destroy();
        if(binType != gameobj1.key){
            renderGameOver(gameobj1);
            destroyGarbages()
            timer.destroy();
            gameOver = true;
            return;
        }
        score += 1;
        scoreLabel.text = "分数: " + score;
        console.log("colliding between" + gameobj1.key + "and" + gameobj2.key);
    }
     var garbageGroup = new Array();
    function destroyGarbages(){
        for (i=0;i<garbageGroup.length;i++)
        {
            garbageGroup[i].destroy();
        }
    }

    var gameOverText;
    var restartBtn;
    var descriptionText;
    var finalScoreText;
    function renderGameOver(garbage){
     var garbageParams = garbage.key.split("-");
     var garbageType = "";
     switch(garbageParams[0]){
        case "0":
        garbageType = "湿垃圾";
            break;
        case "1":
        garbageType = "干垃圾";
            break;
        case "2":
        garbageType = "可回收垃圾";
            break;
        case "3":
        garbageType = "有害垃圾";
            break;
        default:
            break;
     }
     console.log("garbage is " + garbageParams[0]);

     graphics = currentScene.add.graphics({ lineStyle: { width: 2, color: 0xaa0000 }, fillStyle: { color:0xaa0000} });

     panel_square = new Phaser.Geom.Rectangle();
     panel_square.width = screenWidth;
     panel_square.height = screenHeight;
     panel_square.x = 0;
     panel_square.y = 0;
   
     graphics.fillRectShape(panel_square);

    var finalScoreTextConfig = {fontFamily: "Roboto Condensed",fontSize:'120px',padding:{x:10,y:10}}
     finalScoreText = currentScene.add.text(screenWidth/2 - 100, screenHeight/2 - 400, scoreLabel.text, finalScoreTextConfig);
     finalScoreText.x = screenWidth/2 - finalScoreText.width/2;

     //add components to panel
     var btnTextConfig = {fontFamily: "Roboto Condensed",fontSize:'80px',padding:{x:10,y:10}}
     gameOverText = currentScene.add.text(screenWidth/2 - 100, screenHeight/2 - 200, '游戏结束', btnTextConfig);
     gameOverText.x = screenWidth/2 - gameOverText.width/2;

     var descriptionTextConfig = {fontFamily: "Roboto Condensed",fontSize:'40px',padding:{x:10,y:10}}
     descriptionText = currentScene.add.text(screenWidth/2 - 100, screenHeight/2 - 100, garbageParams[1] + "应该是" + garbageType, descriptionTextConfig);
     descriptionText.x = screenWidth/2 - descriptionText.width/2;


     restartBtn = currentScene.add.sprite(screenWidth/2,screenHeight/2 + 200,'restartBtn').setInteractive();
     restartBtn.inputEnabled = true;
     restartBtn.key = "restartBtn";
     restartBtn.setDisplaySize(200,200);
     restartBtn.on('pointerdown',restartBtnClicked);

    }

    function restartBtnClicked(pointer){
        console.log("restart btn clicked");
        graphics.clear();
        gameOverText.destroy();
        restartBtn.destroy();
        finalScoreText.destroy();
        descriptionText.destroy();
        gameOver = false;
        scoreLabel.text = "分数: 0";
        startRainTimer();
    }


    function processCallback(){

    }


    function update (){
        
    }
    function generateGarbage(){
        //create garbage
        let randomX = Phaser.Math.Between(20,screenWidth-20);
        //select random garbage
        let randomCategory = Phaser.Math.Between(0,3);
        let garbageArray = garbagePack[randomCategory];
        let randomGarbage = garbageArray[Phaser.Math.Between(0,garbageArray.length - 1)];
        //load
        var garbage = currentScene.add.sprite(randomX,50,randomGarbage["name_cn"]).setInteractive({draggable:true});
        currentScene.physics.world.enable(garbage);
        garbage.setDisplaySize(100,100);
        garbage.draggable = true;
        garbage.key = randomGarbage["type"] + "-" + randomGarbage["name_cn"];
        garbage.onCollide = true;
        garbageGroup.push(garbage);
        currentScene.physics.add.collider(garbage,bin,bincollide,processCallback);
    }
