var angulo = 0.0;
var desplazamiento = 190;
var escalar = 2;
var velocidad = 0.100;
function setup() {
createCanvas(400, 400);
fill(255,0,0,63);
background(255,0,0,63);
}
function draw() {
var x = desplazamiento + cos(angulo) * escalar;
var y = desplazamiento + sin(angulo) * escalar;
ellipse(x, y, 4, 4);
angulo += velocidad;
escalar += velocidad;
}