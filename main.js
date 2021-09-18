function Start(){document.getElementById("start_button").style.display="none";
document.getElementById("stop_button").style.display="inline-block";
document.getElementById("Mercedes").style.display="inline-block";}

canvas = document.getElementById('Mercedes');
ctx = canvas.getContext("2d"); 
Mercedes_width = 100; 
Mercedes_height = 90;
Mercedes_x = 10; 
Mercedes_y = 10;
background_image = "ParkingLogo.png";
Mercedes_image = "Mercedes.png";
function add() { background_imgTag = new Image(); //defining a variable with a new image 
background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
background_imgTag.src = background_image; // load image 

Mercedes_imgTag = new Image(); //defining a variable with a new image
Mercedes_imgTag.onload = uploadMercedes; // setting a function, onloading this variable 
Mercedes_imgTag.src = Mercedes_image; // load image
}
window.addEventListener("keydown", my_keydown); 
function my_keydown(e) 
{
keyPressed = e.keyCode;
console.log(keyPressed); 
if(keyPressed == '38') 
{ up();
console.log("up");
} 
if(keyPressed == '40')
{ down();
console.log("down");
} if(keyPressed == '37')
{ left();
console.log("left"); }
if(keyPressed == '39')
{ right();
console.log("right");
}}
function up() { if(Mercedes_y >=0) { Mercedes_y = Mercedes_y - 10; console.log("When up arrow is pressed, x = " + Mercedes_x + " | y = " +Mercedes_y);
uploadBackground(); 
uploadMercedes();
}}
function down()
{
if(Mercedes_y <=420)
{
Mercedes_y =Mercedes_y+ 10;
console.log("When down arrow is pressed, x = " + Mercedes_x + " | y = " +Mercedes_y);
uploadBackground();
uploadMercedes();}}  
function uploadBackground() 
{ ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

 } function uploadMercedes()
  { ctx.drawImage(Mercedes_imgTag, Mercedes_x, Mercedes_y, Mercedes_width, Mercedes_height);
 }
 function left() { if(Mercedes_x >= 0 ) 
    { Mercedes_x =Mercedes_x - 10; console.log("When left arrow is pressed, x = " + Mercedes_x + " | y = " +Mercedes_y);
     uploadBackground(); uploadMercedes(); }}
    function right()
     { if(Mercedes_x <= 410)
         { Mercedes_x =Mercedes_x + 10; console.log("When right arrow is pressed, x = " + Mercedes_x + " | y = " +Mercedes_y); 
         uploadBackground(); 
         uploadMercedes(); } }

         function Stop(){document.getElementById("stop_button").style.display="none";
         document.getElementById("start_button").style.display="inline-block";
         document.getElementById("Mercedes").style.display="none";}