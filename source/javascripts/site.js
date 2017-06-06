/*

  INTERACTIONS
  - Card
  - Link
  - Pseudolink
  - Controller
  - Mobile Menu

*/
/* Card */
const $cards = document.querySelectorAll('[data-interaction="card"]');
if ($cards) {
  $cards.forEach(function($card){
    const $index = $card.querySelector('[data-hover="index"]');
    //  Mouse over
    $card.addEventListener('mouseenter', function(){
      toggleClass($index, ['c-light_gray', 'c-peach']);
    });
    //  Mouse over
    $card.addEventListener('mouseleave', function(){
      toggleClass($index, ['c-light_gray', 'c-peach']);
    });
    //  Click
    $card.addEventListener('click', function(){
      toggleClass($index, ['c-light_gray', 'c-peach']);
    });
  });
}
/* Link */
const $links = document.querySelectorAll('[data-interaction="link"]');
if ($links) {
  $links.forEach(function($link){
    //  Mouse over
    $link.addEventListener('mouseenter', function(){
      toggleClass(this, ['c-coal', 'c-peach']);
    });
    //  Mouse out
    $link.addEventListener('mouseleave', function(){
      toggleClass(this, ['c-coal', 'c-peach']);
    });
    //  Click
    $link.addEventListener('click', function(){
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
    $pseudolink.addEventListener('mouseenter', function(){
      toggleClass(this, ['c-coal', 'c-peach']);
      toggleClass($asterisk, ['c-steel', 'c-salmon']);
      toggleClass($note, ['o-0', 'o-1']);
    });
    //  Mouse out
    $pseudolink.addEventListener('mouseleave', function(){
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
    $control.addEventListener('mouseenter', function(){
      toggleClass($arrow, ['f-coal', 'f-peach']);
    });
    //  Mouse out
    $control.addEventListener('mouseleave', function(){
      toggleClass($arrow, ['f-coal', 'f-peach']);
    });
  })
}
/* Mobile Menu */
const $html = document.getElementsByTagName('html')[0];
const $menu = document.querySelector('[data-interaction="menu"]');
const $open = document.querySelector('[data-interaction="open"]');
const $close = document.querySelector('[data-interaction="close"]');
const $list = document.querySelector('[data-interaction="list"]');
const $cover = document.querySelector('[data-interaction="cover"]');
const $items = document.querySelectorAll('[data-interaction="item"]');
var menu_open = false;
if ($menu) {
  //  Menu press
  $open.addEventListener('click', function(){
    toggleClass($html, ['oy-hidden', 'o-auto']);
    toggleClass($menu, ['bc-coal', 'bc-transparent']);
    toggleClass(this, ['pe-auto', 'pe-none', 'o-1', 'o-0']);
    toggleClass($close, ['pe-auto', 'pe-none', 'o-1', 'o-0']);
    toggleClass($cover, ['o-1', 'o-0', 'pe-none', 'pe-auto']);
    toggleClass($list, ['t--100p', 't-4rem']);
    stopBodyScrolling(true);
    menu_open = true;
  });
  //  Close press
  $close.addEventListener('click', function(){
    toggleClass($html, ['oy-hidden', 'oy-auto', 'h-100p', 'h-100vh']);
    toggleClass($menu, ['bc-coal', 'bc-transparent']);
    toggleClass(this, ['pe-auto', 'pe-none', 'o-1', 'o-0']);
    toggleClass($open, ['pe-auto', 'pe-none', 'o-1', 'o-0']);
    toggleClass($cover, ['o-1', 'o-0', 'pe-none', 'pe-auto']);
    toggleClass($list, ['t--100p', 't-4rem']);
    stopBodyScrolling(false);
    menu_open = false;
  });
}
//  Transition-end listener on activation of Mobile Menu
$list.addEventListener('transitionend', function(){
  for (var i = 0; i < $items.length; i++) {
    toggleClass($items[i], ['o-0', 'o-1']);
  }
});
//  Cover Event Listener
if ($menu) {
  if (menu_open) {
    $cover.addEventListener('click', function(){
      toggleClass($html, ['oy-hidden', 'o-auto']);
      toggleClass($menu, ['bc-coal', 'bc-transparent']);
      toggleClass($open, ['pe-auto', 'pe-none', 'o-1', 'o-0']);
      toggleClass($close, ['pe-auto', 'pe-none', 'o-1', 'o-0']);
      toggleClass(this, ['o-1', 'o-0', 'pe-none', 'pe-auto']);
      toggleClass($list, ['t--100p', 't-4rem']);
      stopBodyScrolling(true);
      menu_open = false;
    });
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
  - Stop Body Scrolling
  - Freeze View Port

*/
/* Toggle Class */
function toggleClass($element, classes) {
  classes.forEach(function(className){
    $element.classList.toggle(className);
  });
}
/* Element Height */
//  Source: StackOverflow
//  Author: Lonnie Best
//  Path: http://stackoverflow.com/questions/6937378/element-offsetheight-always-0
function getHeight($element) {
  $element.style.visibility = "hidden";
  document.body.appendChild($element);
  var height = $element.offsetHeight + 0;
  document.body.removeChild($element);
  $element.style.visibility = "visible";
  return height;
}
/* Stop Body Scrolloing */
//  Source: benfrain.com
//  Author: Ben Frain
//  Path: https://benfrain.com/preventing-body-scroll-for-modals-in-ios/
function stopBodyScrolling (bool) {
  if (bool) {
    document.body.addEventListener("touchmove", freezeVp, false);
  } else {
    document.body.removeEventListener("touchmove", freezeVp, false);
  }
}
/*  Freeze View Port */
var freezeVp = function(e) {
  e.preventDefault();
};
