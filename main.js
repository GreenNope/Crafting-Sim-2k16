var bones = 0;
var traps = 1;
function boneClick() {
  if (traps >= 1) {
    bones = bones + 1;
    traps = traps - 1;
    document.getElementById('bones').innerHTML = "Bones: " + bones;
    document.getElementById('traps').innerHTML = "Traps: " + traps;
      document.getElementById("bones").className = document.getElementById("bones").className.replace( /(?:^|\s)invis(?!\S)/g , '' )
  }
}

function trapMake() {
  if (bones >= 1) {
  bones = bones - 1
  traps = traps + 1.5

  document.getElementById('bones').innerHTML = "Bones: " + bones;
  document.getElementById('traps').innerHTML = "Traps: " + traps;
  }
}






