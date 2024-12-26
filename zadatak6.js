/*Napisati program koji pronalazi sve brojeve u nizu koji su veći od prosjeka brojeva u istom nizu. 

	Ulaz: 
	[1, 2, 3, 4, 5]

	Izlaz: 
	[4, 5]
*/

const array = [1, 2, 3, 4, 5];

function veciOdProsjeka(array) {
  let suma = 0;
  array.forEach((broj) => (suma += broj));
  let prosjek = suma / array.length;

  return array.filter((broj) => broj > prosjek);
}

console.log(veciOdProsjeka(array));
