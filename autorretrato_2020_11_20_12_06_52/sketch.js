
function setup() {
  createCanvas(600,600);
 curveDetail(5);
}

function draw() {
  
  background(200,100,300,63);
   fill(196, 100, 0)
  rect(230, 130, 280, 500, 150, 150, 10, 5)  //pelo 

  
  fill(255, 231, 191)
  strokeWeight(0)
  ellipse(370,270,200,220); //cara
  
  //cuello
  fill(255, 231, 191)
 rect( 326, 370, 80, 80 );
  
  
  //Cuerpo
  fill(0)
  ellipse(370, 590, 410, 300);
   
   fill(255, 231, 191)
  strokeWeight(0)
  

  
//ojo 1
  ellipseMode(RADIUS);
fill(255);
  strokeWeight(2)
ellipseMode(CENTER);
fill(0);
ellipse(326, 250, 10, 18); // ojo color negro izquierdo
  
 
  
  //ojo 2
    ellipseMode(RADIUS);
fill(255);
  strokeWeight(2)
ellipseMode(CENTER);
fill(0);
ellipse(410, 250, 10, 18); // ojo color negro derecho
}