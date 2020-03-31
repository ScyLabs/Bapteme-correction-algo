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
      C'est dommage car tu as juste inversé le test pour savoir si le tableau est vide et l'initialisation de la variable result.
      De fait , si ton tableau est vide , l'initialisation de résult de cette manière va générer une exception.
      De plus, il faut penser à tester le typeof de ta variable. Si je suis vilain et que je t'envoie un tableau dans arr[0], tu vas par la suite
      comparer un tableau à des chaînes de carractères, et ca peut te générer des problèmes.
      
      Tu peux aussi utiliser for(var index in arr) plutôt que for(var index = 1; index < arr.length;index++)
      Tu étais vraiment pas loin ;)
      Voici la correction: 

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
   var result = arr[0];

   if (arr.length === 0) {

      return false;
   }

   for (var index = 1; index < arr.length; index++) {

      if (result.length < arr[index].length) {

         result = arr[index];
      }
   }
   return result;
}
