const textos = [
  "Era una mañana nublada... El aire se sentía extraño mientras llegaba a mi nueva escuela.",
  "Las puertas de la secundaria Takayama se abrieron con un crujido escalofriante...",
  "No sabía que este sería el comienzo de algo que cambiaría mi vida para siempre.",
  "Una historia de amor... y terror psicológico apenas estaba comenzando."
];

let index = 0;

function siguienteTexto() {
  index++;
  if (index < textos.length) {
    document.getElementById('narrador').innerText = textos[index];
  } else {
    document.getElementById('narrador').innerText = "Continuará...";
  }
}