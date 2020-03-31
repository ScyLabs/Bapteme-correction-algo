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
 * Retourner "true" si c'est pair, "false" si c'est impair
 */
function isEven(int) {
  /* 
      Le résultat est bon.
      Cependant , la fonction retournant un boolean , 
      /!\ Pense à utiliser === plutôt que == , === est strictement = (Test le typeof et la valeur)
      tu peux simplifier en renvoyant directement le résultat du test.
      return int %2 === 0
      Nb : Encore une fois , pense à indenter ;)
   */
if (int%2==0) {
    return true
}else{
    return false
}
}
