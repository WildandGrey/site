/*
  INTERACTIONS
  - Link
  - Pseudolink
  - Controller
*/
/* Link */
const $links = document.querySelectorAll('[data-interaction="link"]');
if ($links) {
  $links.forEach(function($link){
    //  Mouse over
    $link.addEventListener('mouseover', function(){
      toggleClass(this, ['c-coal', 'c-peach']);
    });
    //  Mouse out
    $link.addEventListener('mouseout', function(){
      toggleClass(this, ['c-coal', 'c-peach']);
    });
  });
}
/* Pseudolink */
const $pseudolinks = document.querySelectorAll('[data-interaction="pseudolink"]');
const $note = document.querySelector('[data-interaction="note"]');
if ($pseudolinks && $note) {
  $pseudolinks.forEach(function($pseudolink){
    //  Asterisk symbol
    var $asterisk = $pseudolink.querySelector('[data-interaction="asterisk"]');
    //  Mouse over
    $pseudolink.addEventListener('mouseover', function(){
      toggleClass(this, ['c-coal', 'c-peach']);
      toggleClass($asterisk, ['c-steel', 'c-salmon']);
      toggleClass($note, ['o-0', 'o-1']);
    });
    //  Mouse out
    $pseudolink.addEventListener('mouseout', function(){
      toggleClass(this, ['c-coal', 'c-peach']);
      toggleClass($asterisk, ['c-steel', 'c-salmon']);
      toggleClass($note, ['o-0', 'o-1']);
    });
  });
}
/* Controller */
const $controllers = document.querySelectorAll('[data-interaction="controller"]');
if ($controllers) {
  $controllers.forEach(function($control){
    //  Arrow svg
    var $arrow = $control.querySelector('[data-interaction="arrow"]');
    //  Mouse over
    $control.addEventListener('mouseover', function(){
      toggleClass(this, ['c-coal', 'c-peach']);
      toggleClass($arrow, ['f-coal', 'f-peach']);
    });
    //  Mouse out
    $control.addEventListener('mouseout', function(){
      toggleClass(this, ['c-coal', 'c-peach']);
      toggleClass($arrow, ['f-coal', 'f-peach']);
    });
  })
}
/*
  FOOTER COPYRIGHT YEAR
  - Year
*/
/* Year */
const date = new Date();
const currentYear = date.getFullYear();
const $year = document.querySelector('[data-copyright="year"]');
$year.innerHTML = currentYear;
/*
  FUNCTIONS
  - Toggle Class
*/
/* Toggle Class */
function toggleClass($element, classes) {
  classes.forEach(function(className){
    $element.classList.toggle(className);
  });
}
