var bones = 0;
var traps = 1;
function boneClick() {
  if (traps > 0) {
    bones = bones + 1;
    traps = traps - 1;
    document.getElementById('bones').innerHTML = "Bones: " + bones;
    document.getElementById('traps').innerHTML = "Traps: " + traps;
  }
}

function trapMake() {
  if (bones > 0) {
  bones = bones - 1
  traps = traps + 2
  document.getElementById('bones').innerHTML = "Bones: " + bones;
  document.getElementById('traps').innerHTML = "Traps: " + traps;
  }
}






