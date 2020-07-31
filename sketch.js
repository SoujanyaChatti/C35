var gamestate,database,playercount,game,form,player;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
   gamestate=0;
    game=new Game();
    game.readState();
    game.start();
   
}

function draw(){
   
   
    
}


