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
    Fonctionne mais tu aurais pu simplement faire 
    extension =  getExtension[getExtension.length -1]
    après ton test de length plutôt q'un slice négatif
    De plus pas besoin de mettre ton séparator dans une variable.
   */ 
  var separator = '.';
  var getExtension = str.split(separator);
  var extension = getExtension.slice(-1)[0];
  
  if (getExtension.length === 1) return false;
  
  return extension;
}
