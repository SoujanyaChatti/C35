class Player{
    constructor(){

    }
playercount(){
var countref=database.ref('playercount');
countref.on("value",function(data){
    playercount=data.val();
})
    }
countupdate(count){
database.ref('/').set({
    playercount:count
})
}    
updatename(name){
var playerindex="player"+playercount;
database.ref(playerindex).set({
    name:name
})
}

}