const numurs1ID = document.getElementById("numurs1ID");
const numurs2ID = document.getElementById("numurs2ID");
const ButtonId = document.getElementById("ButtonId");
const OutputText = document.getElementById("OutputText");
const SelectId = document.getElementById("SelectId");
const ReizinātId = document.getElementById("ReizinātId");
const DalītID = document.getElementById("DalītID");


let rezultats = 0;

ButtonId.addEventListener('click', HandleClick);
function HandleClick() {

     x = numurs1ID.value;
     z = numurs2ID.value;

    if ( ReizinātId ) {
    rezultats = x * z
    }
else {
 rezultats = x / z
}

OutputText.innerText = "Rezultāts ir " + rezultats;

}