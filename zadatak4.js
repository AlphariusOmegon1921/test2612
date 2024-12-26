/*Ulaz je string koji se sastoji od riječi i razmaka. Vratiti dužinu posljednje riječi u stringu.

Riječ je maksimalni podstring koji se sastoji samo od znakova koji nisu razmaci.

Primjer 1:

Ulaz: str = "Hello World"
Izlaz: 5
Objašnjenje: Posljednja riječ je "World" čija je dužina 5
*/

let string = "fly me to the moon  ";

function duzinaZadnjegStringa(string) {
  const rijeci = string
    .trim()
    .split(" ")
    .filter((rijec) => rijec !== "");

  return rijeci[rijeci.length - 1].length;
}
console.log(duzinaZadnjegStringa(string));
