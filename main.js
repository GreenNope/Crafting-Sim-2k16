var bones = 0;

function boneClick() {
  bones = bones + 1;
  var boneword;
  if (bones = 1) {boneword = ' Bone';} else {boneword = ' Bones';}
  document.getElementById('bones').innerHTML = bones + boneword;
}







