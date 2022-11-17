
function iniciar(){
  let numerrores = document.querySelector('#errores');
  let numaciertos = document.querySelector('#aciertos');
  let nummovimientos = document.querySelector('#movimientos');
  
  reparteTarjetas();

  errores.textContent = `Errores: 0`;
  aciertos.textContent = `Aciertos: 0`;
  movimientos.textContent = `Movimientos: 0`;

  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
  });
}

document.querySelector("#barajar").addEventListener("click", iniciar);





