var canvas = new fabric.Canvas('myCanvas');
playerx =10
playery =10
blockimagewidth=30;
blockimageheight=30;
playerobject="";
blockimageobject="";
function playerupdate(){
  fabric.Image.fromURL('player.png' , function(Img){
      playerobject=Img;
      playerobject.scaleToWidth(150)
      playerobject.scaleToHeight(140)
      playerobject.set({
          top:playery , left:playerx
      })
    canvas.add(playerobject)
  })
}
function newimage(getImage){
    fabric.Image.fromURL(getImage , function(Img){
        blockimageobject=Img;
        blockimageobject.scaleToHeight(blockimageheight)
        blockimageobject.scaleToWidth(blockimagewidth)
        blockimageobject.set({
            top:playery , left:playerx
        })
    canvas.add(blockimageobject);
    })
}
window.addEventListener("keydown" , mykeydown)
function mykeydown(e){
    keypressed=e.keyCode
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80'){
        console.log("P and shift have been pressed together");
        blockimagewidth=blockimagewidth+10;
        blockimageheight=blockimageheight+10;
        document.getElementById("widthspan").innerHTML=blockimagewidth;
        document.getElementById("heightspan").innerHTML=blockimageheight;
    }
    if(e.shiftKey==true && keypressed=='77'){
        console.log("Shift and M are pressed togerther");
        blockimagewidth=blockimagewidth-10;
        blockimageheight=blockimageheight-10;
        document.getElementById("widthspan").innerHTML=blockimagewidth;
        document.getElementById("heightspan").innerHTMl=blockimageheight;
    }
    if(keypressed=='38'){
        up()
        console.log("up is pressed")
    }
    if(keypressed=='40'){
        down()
        console.log("down is preseed")
    }
    if(keypressed=="37"){
        left()
        console.log("left is pressed");
    }
    if(keypressed=='39'){
        right()
        console.log("right");
    }
    if(keypressed=='87'){
        console.log("w has been pressed")
        newimage('wall.jpg')
    }
    if(keypressed=='71'){
        console.log("g has been pressed")
        newimage('ground.png')
    }
    if(keypressed == '76'){
        console.log("L has been pressed");
        newimage("light_green.png");
    }
    if(keypressed=='82'){
        console.log("R has been pressed")
        newimage("roof.jpg")
    }
    if(keypressed=='84'){
        console.log("T has been pressed")
        newimage("trunk.jpg");
    }
    if(keypressed=='85'){
        console.log("U has been pressed")
        newimage("unique.png")
    }
    if(keypressed=='89'){
        console.log("Y has been pressed");
        newimage("yellow_wall.png")
    }
    if(keypressed=="67"){
        console.log("C has been pressed")
        newimage("cloud.jpg")
    }
    if(keypressed=="68"){
        console.log("D has been pressed")
        newimage("dark_green.png")
    }
}
function up(){
   if(playery>=0){
       playery=playery-blockimageheight;
       console.log("The blockimage height is" + blockimageheight);
       console.log("When up arrow is pressed, X=" + playerx + "Y=" + playery)
       canvas.remove(playerobject)
       playerupdate()
   }
}
function down(){
    if(playery<=500){
    playery=playery+blockimageheight;
    console.log("The blockimage height is" + blockimageheight);
    console.log("When down is pressed is pressed, X=" + playerx + "Y=" + playery)
    canvas.remove(playerobject)
    playerupdate()    
    }
}
function left(){
    if(playerx>=0){
        playerx=playerx-blockimagewidth;
        console.log("The blockimage width is " + blockimagewidth);
        console.log("When left is pressed, X=" + playerx + "Y=" + playery)
        canvas.remove(playerobject)
        playerupdate()
    }
}
function right(){
    if(playerx<=500){
        playerx=playerx+blockimagewidth;
        console.log("The blockimage width is " + blockimagewidth);
        console.log("When left is pressed, X=" + playerx + "Y= " + playery)
        canvas.remove(playerobject)
        playerupdate()
    }
}