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
  // Bien joué ;) Par contre pense à l'indentation
return int*2;
}
