/*Napiši funkciju koja prima niz i separator te vraća string u kojem su elementi niza spojeni tim separatorom.

	Ulaz: 
	["Sings", "like", "Thunder"];
const separator = "-";

	Izlaz: 
	“Sings-like-Thunder”*/

let rijeci = ["Sings", "like", "Thunder"];
const separator = "-";

function saSeparatorom(rijeci, separator) {
  let spojeno = "";
  rijeci.forEach((rijec, index) => {
    spojeno += rijec;
    if (index < rijeci.length - 1) {
      spojeno += separator;
    }
  });
  return spojeno;
}

console.log(saSeparatorom(rijeci, separator));
