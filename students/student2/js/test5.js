/*
 * Tests
 */
var container = document.getElementById('container');
if (
  sum([1, 2, 3]) === 6
  && sum(['un', 2, 'trois', 4, 'cinq']) === 6
  && sum([]) === 0
  && sum([1, [2, 3, [4, 5], 6], 7, [8, 9]]) === 45
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo5
 *
 * arr est un array
 * Retourner la somme des nombres contenus dans cet array
 */



 /*
  Fonctionnne mais tu t'est compliqué la vie.
  Tu n'avais pas besoin de créer une deuxième fonction qui écrase le tableau. mais simplement faire une fonction réccursive (fonction qui s'appelle elle même)
  Autre chose : tu peux utiliser le raccourcis : for(var index in arr) pour parcourir le tableau plutôt que la version for (var i = 0; i < arr.length; i++)
 */
function flatten(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      arr.splice.apply(arr, [i,1].concat(arr[i]));
      i--;
    }
  }
  
  return arr;
} 

function sum(arr) {
  var total = 0;
  var arr = flatten(arr);
  
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      total += arr[i];
    }
  }
  
  return total;
}
