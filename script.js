/*
1-developer name: Fateme Satouri
2-Project name: Ask me
3-Project description:
We used two methods in this project.
Here we want to read an array and add the values ​​in the array together and display it in the output.
The first method is a simple method with the main 'for' and in the second method using 'for-in'.
4-email:navayearamm@gmail.com 
5-The languages ​​used in this project are: JavaScript, CSS, HTML

💫❤️Have a good time❤️💫
*/

// start

/*  The first method :
A simple "for" loop is used. which read the members of the array one by one and add [i]myArray with sum each time.
And at the end, we give the sum value.
We can see in the output every time the value of sum is added.  */

const myArray = [1, "j", 2, 3, "AM", 5];
let sum = 0;
for (i = 0; i < myArray.length; i++) {
  sum += myArray[i];
  console.log("Sum after adding", myArray[i], "is", sum); //Seeing i read each time and summing it with the sum variable
}
console.log("The final result =>>", sum); //Show the output by printing the sum variable

/* The second method:
In this code, we have used the "for-in" loop to search the various members of the numbers array and add their values ​​to the sum variable. Then we print the final value of sum as output. */

// let numbers = [1,'j',2,3,'AM',5];
// let sume = 0;
// for (let index in numbers) {
//     sume += numbers[index];
// }
// console.log(sume);
