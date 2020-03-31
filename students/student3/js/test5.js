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
  /* 
    Indentation :(
    Faire un test vide n'est pas une solution viable. tu aurais du faire un continue; dans ton test.
    Tu as fait un for dans un for dans un for. Mais comment aurais tu fait si ton tableau avec un niveau supérieur ? 
    Dans ce cas là , tu doit utiliser une fonction réccursive (c'est à dire une fonction qui s'appelle elle même.)
    Regarde ci-dessous je te met un code qui simplifie vachement.

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
  */
var sum1=0;
for (i=0; i<arr.length; i++){
    if (typeof(arr[i])=="number"){
        sum1+=arr[i];
    }else if (typeof(arr[i])=="string"){
    }
    else if (arr[i].length>0) {
        for (var j= 0; j < arr[i].length;j++) {
            if (arr[i][j].length>0) {
                for (var p= 0; p < arr[i][j].length;p++) {
                    sum1+=arr[i][j][p];
                }}
            else{
                sum1+=arr[i][j];
            }}}}
return sum1;
}
