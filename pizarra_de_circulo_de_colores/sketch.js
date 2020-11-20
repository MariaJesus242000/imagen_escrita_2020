// variables para los valores de rojo, verde y azul (r, g, b)
var num = 60;
var x = [];
var y = [];

let r, g, b;
function setup() {
createCanvas(600,400);

for (var i = 0; i < num; i++) {
x[i] = 10;
y[i] = 0;
  // colores aleatorios
  r = random(255);
  g = random(255);
  b = random(255);
}
}
function draw() {
background(200,100,200,100); 
stroke (r, g, b);
strokeWeight(2);
// Copia los valores del arreglo de atrás hacia adelante
for (var i = num-1; i > 0; i--) {
x[i] = x[i-1];
y[i] = y[i-1];
}
x[0] = mouseX; // Define el primer elemento
y[0] = mouseY; // Define el otro elemento
for (var i = 0; i < num; i++) {
fill(i * 5 );

ellipse(x[i], y[i],30,30);

  // cuando el usuario hace click
function mousePressed() {
  // revisar si el ratón está dentro del círculo
  let d = dist(mouseX, mouseY,360, 200 );
  if (d < 100) {
    // escoger nuevos colores aleatorios
    r = random(255);
    g = random(255);
    b = random(255);
  }
}}
}
