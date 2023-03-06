//variables

var pajarraco,guardarpajarraco
var fondo,guardarfondo



function preload(){ //RECURSOS

  guardarpajarraco = loadAnimation("1.png","3.png","4.png","6.png")
  guardarfondo = loadImage("flapy.png")
  

}




function setup(){
  
  createCanvas(1536,745)


  fondo = createSprite(100,100,1536,745)
  fondo.addImage("movimiento",guardarfondo)
  fondo.scale=2.4
  fondo.velocityX = -4

  pajarraco = createSprite(700,372.5,20,20)
  pajarraco.addAnimation("movimiento",guardarpajarraco)
  pajarraco.scale=0.7


}


function draw() {

  background("white")
  
     if(fondo.x<0){
       fondo.x=fondo.width/2
     }
 
      



  drawSprites();
}
