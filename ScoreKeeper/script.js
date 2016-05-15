var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var p1d = document.querySelector("#p1score");
var p2d = document.querySelector("#p2score");
var playto = document.querySelector("#playto");
var p1s = 0;
var p2s = 0;

var reset = document.querySelector("#reset");
var input = document.querySelector("input[type=number]");
var winningscore = 5;
var gameover = false;

p1.addEventListener("click", function() {
    if(!gameover){
        p1s++;
        if(p1s == winningscore){
            gameover = true;
            p1d.classList.add("winner");
        }
        p1d.textContent = p1s;
    } 
});

p2.addEventListener("click", function() {
    if(!gameover){
        p2s++;
        if(p2s == winningscore){
            gameover = true;
            p2d.classList.add("winner");
            
        }
        p2d.textContent = p2s;
    } 
});

reset.addEventListener("click", function(){
        resetgame();
});

function resetgame(){ 
   p1s = 0;
   p2s = 0;
   p1d.textContent = 0;
   p2d.textContent = 0;
   p1d.classList.remove("winner");
   p2d.classList.remove("winner");     
   gameover = false;}

input.addEventListener("change", function(){
   playto.textContent = this.value;
   winningscore = this.value;
   resetgame();
});