// Simetría correspondiente al número de reflejos.
// Cambia el valor para obtener un número diferente de reflexiones
let symmetry = 90;

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  background(255,0,0,63);


  // Creando el botón para borrar la pantalla
  clearButton = createButton('Empezar de cero');
  clearButton.mousePressed(clearScreen);
  
  
  
// Configurando el deslizador para el grosor del pincel
  brushSizeSlider = createButton('Grosor del lapiz');
  sizeSlider = createSlider(1, 32, 4, 0.1);
}
// Función para limpiar la pantalla 
function clearScreen() { 
  background(290); //color rosado
}

//función para oscurecer la pantalla
function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = sizeSlider.value();
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}