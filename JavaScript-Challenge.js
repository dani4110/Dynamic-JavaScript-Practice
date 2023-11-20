// Write the JavaScript code that you see in the console.

// 1.- Hello World! I'm Daniel.

// console.log('Hello World! I\'m Daniel.');

// 2.- My name in UpperCase is DANIEL.

// const myName = 'Daniel';
// const myNameUpperCase = myName.toUpperCase();
// console.log('My name in UpperCase is :' + myNameUpperCase);

// 3.- My name in LowerCase is : 'daniel';

// const Myname = "Daniel";
// const MyNameLowerCase = Myname.toLowerCase();
// console.log( 'My name in LowerCase is : ' + MyNameLowerCase);

// 4.- The ¡Hello World! message is 12 characters.

// const text = "¡Hello World!";
// console.log(`The ${text} message is ${text.length} characters.`);

// 5.- "The third number in the array with values '1,2,3,4,5' is: 3."

// const array = [1, 2, 3, 4, 5];
// console.log (`The third number in the array with values ${array.join(', ')} is : ${array[2]}`);

// 6.- The number that follows in sequence is added to the end of the array, and it is: 6.

// const array = [1, 2, 3, 4, 5];
// const array2 = array.push(6);
// console.log(`The number that follows in sequence is added to the end of the array, and it is: ${array[5]}.`);

// 7.- The pattern 'lluvia' was found in the text 'La lluvia en Sevilla es una maravilla', so the result is: lluvia.

const text = 'La lluvia en Sevilla es una maravilla';
const pattern = 'lluvia';

if (text.includes(pattern)) { console.log (`The pattern 'lluvia' was found in the text 'La lluvia en Sevilla es una maravilla', so the result is: ${pattern}.`);
    
} else {
    console.log ('The pattern \'lluvia\' wasn\'t found in the text');
}



