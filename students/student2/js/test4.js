/*
 * Tests
 */
var container = document.getElementById('container');
if (
  getLongestString(['coucou', 'hello', 'bonjour']) === 'bonjour'
  && getLongestString(['css', 'html', 'js', 'php']) === 'html'
  && getLongestString([]) === false
  && getLongestString(['un', 2, 'trois', 4, 'cinq']) === 'trois'
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo4
 *
 * arr est un array
 * Retourner la chaine la plus longue de l'array
 */
function getLongestString(arr) {
  /*
    Pas mal et fonctionnel.
    Un code court, utilisation de la fonction reduce,
    Utilisation du ternaire.
    Seul point : "Tu n'étais pas sensé convertir les nombres mais prendre en compte que les strings ;)"
  */

  if (arr.length === 0) return false;
  
  var longuest = arr.reduce(function(a, b) {
    if (typeof a === 'number') a = String(a);
    if (typeof b === 'number') b = String(b);
    return a.length > b.length ? a : b;
  }, '');  
  
  return longuest;
}
