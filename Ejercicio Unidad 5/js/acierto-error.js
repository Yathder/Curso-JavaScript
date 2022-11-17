// añade la clase acertada a las tarjetas
function acierto(lasTarjetas) {
  var numaciertos = document.querySelector("#aciertos");
  var nummovimientos = document.querySelector("#movimientos");
  lasTarjetas.forEach(function(elemento){
    elemento.classList.add("acertada");
  })

  aciertos += 1;
  movimientos += 1;

  numaciertos.textContent = `Aciertos: ${aciertos}`;
  nummovimientos.textContent = `Movimientos: ${movimientos}`;
}

// añade la clase error a las tarjetas
function error(lasTarjetas) {
  var numerrores = document.querySelector("#errores");
  var nummovimientos = document.querySelector("#movimientos");
  lasTarjetas.forEach(function(elemento){
    elemento.classList.add("error");
  })

  errores += 1;
  movimientos +=1;

  numerrores.textContent = `Errores: ${errores}`;
  nummovimientos.textContent = `Movimientos: ${movimientos}`;

// quita las clases descubierta y error en un margen de 1000ms
  setTimeout(function(){
      lasTarjetas.forEach(function(elemento){
        elemento.classList.remove("descubierta");
        elemento.classList.remove("error");

      })
    }, 1000);
}

