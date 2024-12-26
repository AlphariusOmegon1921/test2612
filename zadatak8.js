/*Napiši funkciju koja prima niz i separator te vraća string u kojem su elementi niza spojeni tim separatorom.

	Ulaz: 
	["Sings", "like", "Thunder"];
const separator = "-";

	Izlaz: 
	“Sings-like-Thunder”*/

let rijeci = ["Sings", "like", "Thunder"];
const separator = "-";

function saSeparatorom(arr, separator) {
  let spojeno = "";
  arr.forEach((rijec, index) => {
    spojeno += rijec;
    if (index < arr.length - 1) {
      spojeno += separator;
    }
  });
  return spojeno;
}

console.log(saSeparatorom(rijeci, separator));
