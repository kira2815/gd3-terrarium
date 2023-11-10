console.log("I'm working"); 

var fruit="apples are wonderful"; 
console.log(fruit); 

var year=2023; 
console.log(year); 

window.onload=function(){
    $(".title").css("color", "red"); 
    $(".greenBox").click(changeColor); 
    $(".rock").click(openDialog); 
    $(".dialog").click(closeDialog); 
    $(".seed").hover(seedGrow,seedShrink); 
    $(".rock").draggable(); 
    setInterval(wormMove, 5000); 

    for (var i=0; i<100; i++){
        var worm = $('<img class="worm" src="images/worm.gif>'); 

        console.log(worm);

        var randTop = Math.random() * window.innerHeight; 
        var randLeft = Math.random() * window.innerWidth; 

        $(worm).css("top", randTop + "px"); 
        $(worm).css("left", randLeft + "px"); 

        $("body").append(worm); 
    }
    
}

function changeColor(){
    $(".greenBox").css("height", "500px"); 
    $(".greenBox").css("width", "500px");
    $(".greenBox").css("background", "purple");
} 
function wormMove(){
    var randTop = Math.random()* window.innerHeight; 
    var randLeft = Math.random() * window.innerWidth; 
    $(".worm").css("top",randTop + "px"); 
    $(".worm").css("left",randLeft + "px"); 

}
function openDialog(){
    $(".dialog").css("display","block");
} 

function closeDialog(){
    $(".dialog").css("display","none");

} 

function seedGrow(){
    $(".seed").attr("src","images/sprout.png"); 
    $(".seed").css("width", "300px"); 
    $(".seed").css("top", "100px");
    $(".seed").css("left", "30px");
} 

function seedShrink(){
    $(".seed").attr("src","images/seed.png"); 
    $(".seed").css("width", "10%"); 
    $(".seed").css("height", "auto"); 
    $(".seed").css("top", "200px");
    $(".seed").css("left", "100px");
}  

