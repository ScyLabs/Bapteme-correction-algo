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
    Ton code est encore collé à gauche :(
    Tu étais pas loin du résultat ici tu as juste oublié detester si la valeur est bien une chaîne de carractère , et tu peux simplifier tout ca.
    Tu peux aussi utiliser le raccourcis for(var index in arr) plutôt que for (i=0; i<arr.length; i++)
    Regarde : 
     // Je définis la string la plus grande
    var strMax = '';

    // Sur chaque élément
    for (var index in arr) {
      var str = arr[index];

      // On vérifie que c'est pas une chaine de caractère
      if (typeof str !== 'string') {
        // Si je veux passer à l'itération suivante
        continue;
      }

      // Puis on regarde si c'est la plus grande
      if (str.length > strMax.length) {
        strMax = str;
      }
    }

    // Si l'array est vide, on renvoie false
    if (arr.length === 0) {
      return false;
    }

    // On retourne la plus grande
    return strMax;
   */
    var plus = 0;
    var nom = null;

for (i=0; i<arr.length; i++){
    if (arr[i].length>plus) {
        plus = arr[i].length
        nom = arr[i]
    }
}
if (nom !==null) {
    return nom;
}else {
    return false;
}
}
