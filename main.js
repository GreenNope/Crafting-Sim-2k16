var bones = 0;
var boneword;
function bonePluralize(num) {
  if (bones = 1) {
    boneword = ' Bone';
  } else {
    boneword = ' Bones';
  }
}

function boneClick() {
  bones = bones + 1;
  bonePluralize(bones);
  document.getElementById('bones').innerHTML = bones + boneword;
}







