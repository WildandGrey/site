/*
  INTERACTIONS
  - Link
*/
/* Link */
const $links = document.querySelectorAll(`[data-interaction='link']`);
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
/*
  FOOTER COPYRIGHT YEAR
  - Year
*/
/* Year */
const date = new Date();
const currentYear = date.getFullYear();
const $year = document.querySelector(`[data-copyright="year"]`);
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
