var bones = 0;
var traps = 1;
function boneClick() {
  if (traps >= 1) {
    bones = bones + 1;
    traps = traps - 1;
    document.getElementById('bones').innerHTML = "Bones: " + bones;
    document.getElementById('traps').innerHTML = "Traps: " + traps;
      document.getElementById("maketraps").className = document.getElementById("maketraps").className.replace( /(?:^|\s)invis(?!\S)/g , 'sqbutton' )
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
function load() {
  var dataexists = getCookie("dataexists");
  if (dataexists!="") {
    var bones = getCookie("bones");
    var traps = getCookie("traps");
  }
}
function save() {
  document.cookie = "bones" + "=" + bones;
  document.cookie = "traps" + "=" + traps;
  document.cookie = "dataexists" + "=" + "true"
}






