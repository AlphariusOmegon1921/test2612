let array = [7, 3, 10, 15, 2];

function razlikaBrojeva(array) {
  let najveciBroj = array[0];
  let najmanjiBroj = array[0];

  array.forEach((broj) => {
    if (broj > najveciBroj) {
      najveciBroj = broj;
    }
    if (broj < najmanjiBroj) {
      najmanjiBroj = broj;
    }
  });

  return najveciBroj - najmanjiBroj;
}

console.log(razlikaBrojeva(array));
