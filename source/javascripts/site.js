/*

  INTERACTIONS
  - Link
  - Pseudolink
  - Controller
  - Mobile Menu

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
      toggleClass($arrow, ['f-coal', 'f-peach']);
    });
    //  Mouse out
    $control.addEventListener('mouseout', function(){
      toggleClass($arrow, ['f-coal', 'f-peach']);
    });
  })
}
/* Mobile Menu */
const $body = document.getElementsByTagName('body')[0];
const $menu = document.querySelector('[data-interaction="menu"]');
const $open = document.querySelector('[data-interaction="open"]');
const $close = document.querySelector('[data-interaction="close"]');
const $list = document.querySelector('[data-interaction="list"]');
const $cover = document.querySelector('[data-interaction="cover"]');
var menu_open = false;
if ($menu) {
  //  Menu press
  $open.addEventListener('click', function(){
    toggleClass($body, ['o-hidden', 'o-auto']);
    toggleClass($menu, ['bbs-solid', 'bbs-none']);
    toggleClass(this, ['pe-auto', 'pe-none', 'o-1', 'o-0']);
    toggleClass($close, ['pe-auto', 'pe-none', 'o-1', 'o-0']);
    toggleClass($cover, ['o-1', 'o-0']);
    toggleClass($list, ['h-0', 'h-133px', 'mv-0', 'mv-3rem', 'o-0', 'o-1']);
  });
  //  Close press
  $close.addEventListener('click', function(){
    toggleClass($body, ['o-hidden', 'o-auto']);
    toggleClass($menu, ['bbs-solid', 'bbs-none']);
    toggleClass(this, ['pe-auto', 'pe-none', 'o-1', 'o-0']);
    toggleClass($open, ['pe-auto', 'pe-none', 'o-1', 'o-0']);
    toggleClass($cover, ['o-1', 'o-0']);
    toggleClass($list, ['h-0', 'h-133px', 'mv-0', 'mv-3rem', 'o-0', 'o-1']);
  });
  if (menu_open) {
    menu_open = false;
  } else {
    menu_open = true;
  }
}
/*

  IMAGE CAPTION DYNAMIC PLACEMENT
  - Caption

*/
/* Caption */
const $images = document.querySelectorAll('[data-placement="image"]');
if ($images) {
  window.addEventListener('load', function(){
    $images.forEach(function($image){
      //  Image Caption
      var $caption = $image.querySelector('[data-placement="caption"]');
      //  Image and caption measurements
      var imageHeight = $image.offsetHeight;
      var captionWidth = $caption.offsetWidth;
      var captionTop = (imageHeight - captionWidth) / 2;
      //  Set caption top value
      $caption.setAttribute('style', 'top: ' + captionTop + 'px;');
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
const $year = document.querySelector('[data-copyright="year"]');
$year.innerHTML = currentYear;
/*

  FUNCTIONS
  - Toggle Class
  - Element Height

*/
/* Toggle Class */
function toggleClass($element, classes) {
  classes.forEach(function(className){
    $element.classList.toggle(className);
  });
}
/* Element Height */
function getHeight($element) {
  //  Source: StackOverflow
  //  Author: Lonnie Best
  //  Path: http://stackoverflow.com/questions/6937378/element-offsetheight-always-0
  $element.style.visibility = "hidden";
  document.body.appendChild($element);
  var height = $element.offsetHeight + 0;
  document.body.removeChild($element);
  $element.style.visibility = "visible";
  return height;
}
