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
function sum(arr) {
  // Pas eu le temps de faire cet exo ou pas trouvé? :( Pas grave tkt , ca sera pour la prochaîne fois , je te met la correction en dessous
  // Variable qui va venir accumuler les sommes
  var result = 0;

  // Pour chaque élément du tableau
  for (var index in arr) {
    var item = arr[index];

    // Si c'est un nombre, on additionne
    if (typeof item === 'number') {
      result += item;
    }

    // Si c'est un array, on additionne en utilisant sum()
    else if (typeof item === 'object') {
      result += sum(item);
    }
  }

  // On retourne la somme
  return result;
}
