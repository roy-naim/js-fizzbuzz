// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

for (var i = 1; i <= 100; i++) {
  var numbers = i;
  // console.log(numbers);
  if (numbers%3 === 0 && numbers%5 ===0) {
    var numbers = 'FizzBuzz';
  }

  if (numbers%3 ===0) {
    var numbers = 'Fizz';
  }

  if (numbers%5 ===0) {
    var numbers = 'Buzz';
  }
  console.log(numbers);
}

//solution found from https://forum.freecodecamp.org/t/problem-1-multiples-of-3-and-5/206277
  // if((i % 3 === 0 )||(i % 5 === 0)||(i % 3 === 0 && i % 5 === 0)){
  //   numbers = numbers + i;
  //   console.log(numbers);
  // }

//soluzione alternativa

//   if (i%3 === 0 && i%5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i%3 === 0) {
//     console.log('Fizz');
//   } else if (i%5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(numbers);
//   }
// }
