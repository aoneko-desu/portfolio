let icon=document.getElementById('icon');
let degree=0;
function rotateIcon(){
  degree = degree + 6 ;
  degree = degree % 360;
  if ((0 <= degree && degree < 90) || (270 <= degree && degree < 360)) {
    icon.className = 'face';
  } else {
    icon.className = 'back';
  }
  icon.style.transform = 'rotateX(' + degree + 'deg)';
}
setInterval(rotateIcon, 20);
