var bones = 0;
function bonepluralize (num) {
  var bonesword;
  if (num = 1) {boneword = ' Bone';} else {boneword = ' Bones';}}

function boneClick() {
bones = bones + 1;
bonepluralize(bones)
document.getElementById('bones').innerHTML = bones + boneword;
}







