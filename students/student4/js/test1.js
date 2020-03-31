/*
 * Tests
 */
var container = document.getElementById('container');
if (
  doubleInt(4) === 8
  && doubleInt(-4) === -8
  && doubleInt(0) === 0
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo1
 *
 * int est un entier
 * Le doubler, et le retourner
 */
function doubleInt(int) {
  /* 
    Ca fonctionne, mais tu peux aller plus droit au but et retourner directement le résultat de la multiplication.active
    return int * 2;
    PS : Pense à supprimer les console.log() ;)
  */
    var int = int * 2;
     console.log(int);
    // console.log(typeof int);
    return int;
}
 console.log(doubleInt());
