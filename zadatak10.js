/*Napiši funkciju koja vraća objekt s brojem pojavljivanja svakog elementa u nizu.

	Ulaz: 
	[1, 2, 2, 2, 3, 3, 4]

	Izlaz: 
	{ 1: 1, 2: 3, 3: 2, 4: 1 }
*/
let array = [1, 2, 2, 2, 3, 3, 4];

function brojPojavljanja(array) {
  let rezultat = {};

  array.forEach((broj) => {
    if (rezultat[broj]) {
      rezultat[broj] += 1;
    } else {
      rezultat[broj] = 1;
    }
  });

  return rezultat;
}

console.log(brojPojavljanja(array));
