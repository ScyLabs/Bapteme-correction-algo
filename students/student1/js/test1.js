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
      Le résultat est bon.
      Cependant , plutôt que d'initialiser une variable ,
      tu peux directement retourner le résultat de de la multiplication.active
      return int *2;

    */
    var rep = int * 2;
    return rep;
}
