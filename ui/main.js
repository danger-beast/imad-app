console.log('Loaded!');

var img = document.getElementById('madi');
var leftMargin = 0;

img.onclick = function() {
  var interval = setInterval(moveRight, 100);  
};

function moveRight() {
    leftMargin = leftMargin + 10;
    img.style.marginLeft = leftMargin + 'px';
}