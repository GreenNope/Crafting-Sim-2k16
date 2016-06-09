var bones = 0;


function addBaseMaterials() {
var bones = bones + 1;
if (bones = 1) bonestext = "bone" else bonestext = bones
document.getElementById("bones").innerHTML = bones;
}






window.setInterval(addBaseMaterials(){}, 1000);
