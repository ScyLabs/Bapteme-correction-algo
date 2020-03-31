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
    Bien trouvé, mais malheureusement ce n'était pas la bonne réponse :D
    En fait, dans ce cas précis tu as la liste des variables que tu recois, mais quand tu code une fonction tu doit toujours considérer que tu ne sais pas ce que tu recois
    Et donc , tout le temps tester les valeurs.
    Tu doit , split la chaîne  sur ".", vérifier que tu as bien plus d'une entrée dans le tableau résultat (donc bien une extension)
    Et retourner l'entrée après le . ;)

    Regarde: 
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
    var str = str.lastIndexOf('css';'js';'eslintrc';'eslintrc');
    console.log(str);
    return str;
}
