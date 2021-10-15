let js=document.getElementById('js');
let degree=0;
function rotateJs(){
  degree = degree + 6 ;
  degree = degree % 360;
  if ((0 <= degree && degree < 90) || (270 <= degree && degree < 360)) {
    js.className = 'face';
  } else {
    js.className = 'back';
  }
  js.style.transform = 'rotateX(' + degree + 'deg)';
}
setInterval(rotateJs, 20);
