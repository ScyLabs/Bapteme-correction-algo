/*
 * Tests
 */
var container = document.getElementById('container');
if (!isEven(1) && isEven(2) && !isEven(3) && isEven(35468432)) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo2
 *
 * int est un entier
 * Retourner true si c'est pair, false si c'est impair
 */
function isEven(int) {
  /*
  if (int % 2 === 0) {
    // Pair
    return true;
  }
  else {
    // Impair
    return false;
  }
  */

  // On peut directement retourner le test
  // Puisqu'un test retourne un booléen
  return int % 2 === 0;
}
