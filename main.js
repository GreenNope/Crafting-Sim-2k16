var bones = 0;
var traps = 1;
function boneClick() {
  if (traps < 0) {
    bones = bones + 1;
    document.getElementById('bones').innerHTML = "Bones: " + bones;
  }
}







