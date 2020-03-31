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
    Tu as encore un problème d'indentation à ton premier niveau 
    De plus, parcourir ta chaîne de caractère n'est pas la solution.
    Tu devais exploser le tableau sur le carractère . et récupérer ce qu'il y a après (s'il y a quelque chose après)
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
for (var i=str.length; i>=0; i--){
    if (str[i]=="."){
        var j= str.slice(i+1,str.length);
        console.log(j);
        return j;
    }
}
return false;
}
