console.log('Loaded!');

var img = document.getElementById('madi');

var i = 0;

img.onclick = function() {
  if(i === 0 ) {
   img.style.marginRight = '100px';
   i++;
  } else {
   img.style.marginLeft = '100px';   
   i = 0;
  }
};