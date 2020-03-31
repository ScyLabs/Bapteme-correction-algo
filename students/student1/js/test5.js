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
      Tu n'as pas besoin ici de vérifier si la taille du tableau est 0 car ton for ne va pas parcourir le tableau si sa taille est de 0. et donc pas l'incrémenter.
      Ensuite , comme pour l'exercice précédent , tu peux utiliser le raccourcis for(var index in arr) même si bien entendu la manière dont tu l'as écris fonctionne très bien.
      
      Les tests dans ta boucle ne peuvent pas fonctionner :
       - Tu test isNan et !isNan. : Tu n'as pas besoin de tester une valeur a ignorer. Tu ne doit pas incrémenter l'index de la boucle dans la boucle elle même.
       - un chiffre retournera true à !isNan , autre chose retournera false.
      Si tu regarde bien les tests effectuer par le code du dessus. Tu vois que le 4ème test un un tableau multidimentionnel,
      tu aurais donc du faire en sorte, si on reçois un tableau, ajouter les variables de ces tableaux pour que la valeur finale soit de  45(dans le test N° 4 )
      
      Voici la correction: 


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
   var result = 0;

   if (arr.length === 0) {
      console.log("valeur renvoyée :"+result);
      return result;
   }

   for (var i = 0; i < arr.length; i++) {

      if (isNaN(arr[i])) {
         console.log("valeur ignorée :"+arr[i]);
         i++;
      }
      if (!isNaN(arr[i])) {

         result = result + arr[i];
      }
   }
   console.log("resultat renvoyée : "+result);
   return result;
}
