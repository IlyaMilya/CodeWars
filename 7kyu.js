
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.



//my solution 
function sum(numArray){
    let total = 0;
    numArray.forEach(function(element){
          total += element;
        })
      return total 
                      
  }





//   // Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. To pass the test, a student cannot accumulate more than 18 demerit points.
// At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, rounded to the nearest integer.
// Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.
// Example:

// [10,10,10,18,20,20] --> 12



  //unfinished kata
  function passed(list) { 
    let passedStudents = 0
    let scoreAve = 0 
    let rounded = 0
    const passed = list.filter(element => element <= 18)
    console.log(passed)
   passed.forEach(function(element)
    {passedStudents += element})
    scoreAve = passedStudents/passed.length
    rounded = Math.round(scoreAve)
    if (rounded > 18 || passed.length === 0) 
    {return 'No pass scores registered.'}
  else return rounded
  }

