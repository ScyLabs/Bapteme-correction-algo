/*
 * Tests
 */
var container = document.getElementById('container');
if (
  getExtension('test1.css') === 'css'
  && getExtension('jquery.min.js') === 'js'
  && getExtension('.eslintrc') === 'eslintrc'
  && getExtension('monfichier') === false
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo3
 *
 * str est une string
 * Retourner l'extension de fichier.
 * Par exemple index.html => html
 */
function getExtension(str) {

  /*
    Il y a plusieurs choses à dire sur ce bout de code.
    Déjà il fonctionne et c'est pas mal, mais quelques petits ajustements peuvent être faits
     - Dans la mesure du possible le nom des variables doit être claires. Et ce n'est pas le cas pour la variable "rep"
     - Le else n'est pas indispensable dans ce cas là puisque ta condition if court-circuite la fonction avec un return.active
     - Tu n'as pas forcément besoin de rentrer ton index dans une variable car rep.length est déjà une variable.active

     Le code final resemblerait à ceci : 

      // Je vais couper ma string à chaque point
      var parts = str.split('.');

      // Si j'ai qu'un seul élément, je retourne false
      if (parts.length === 1) {
        return false;
      }

      // Je prends le dernier
      // dernier = length - 1 (-1, parce qu'on indexe à partir de 0)
      var lastPart = parts[parts.length - 1];

      // Je retourne la dernière partire qui est l'extension
      return lastPart;

   */
   var rep = str.split('.')
   var index = rep.length - 1;
   if ( str.lastIndexOf('.') == -1){

      return false;
   }
   else {

      console.log(rep[index]);
      return (rep[index]);
   }
}
