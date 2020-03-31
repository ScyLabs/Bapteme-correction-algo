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
    Tu as des problèmes au niveau de l'indentation ;)
    Bien , tu as bien compris que int % 2 === 0 te renvoie un boolean et donc tu peux le retourner.
    Cependant , 2 choses: 
      - tu peux renvoyer le test directement sans le mettre dans une variable (d'ailleurs tu redéfini la variable int).
      - Tu as mis == au lieu de === (/!\ === strictement égal.) Strictement égal , teste si le typeof est identique et la valeur identique. Très important.

      tu aurais donc du faire : 
      return int % 2 === 0;
  */
     var int = int % 2 == 0;
console.log(int);
return int;
}
