const PI = 3.14;


const RadiusBox = document.getElementById("RadiusBox");
const IesniegtButton = document.getElementById("IesniegtButton");
const output = document.getElementById("output");

IesniegtButton.addEventListener('click', HandleClick) ;
function HandleClick() {

let r = RadiusBox.value;
let laukums = PI * r * r;
let garums = 2 * PI * r;

output.innerText =
"Laukums ir : " + laukums + "\n" + "Garums ir : " + garums;
}