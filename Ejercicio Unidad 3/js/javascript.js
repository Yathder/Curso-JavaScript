function recogeDatos(evento) {
  evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2022 - fecha;

  var bienvenida = document.querySelector("#bienvenida");

  var saludo = "<p>" + nombre + " tienes " + edad + " años,";

  if (edad < 18) {
    saludo = saludo + " pequeño padawan.</p>";
  } else if (edad <= 30) {
    saludo = saludo + " estás en la flor de la vida.</p>";
  } else {
    saludo = saludo + " ¡atrás Tutankamón!";
  }

  bienvenida.innerHTML = saludo;

  if (nombre === "" && fecha === "") {
    saludo = "Rellena los campos por favor.";
  } else if (nombre === "" || fecha === "") {
    if (nombre === ""){
      saludo = "Rellena tu nombre.";
    } else if (fecha === ""){
      saludo = "Rellena con tu fecha de nacimiento.";
    }
  }
 
  bienvenida.innerHTML = saludo;

}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
