
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


  //unfinished kata
  function passed(list) { 
    let passedStudents = 0
    let scoreAve = 0 
    let rounded = 0
  //   function filterScore(value) {
  //   return value <= 18; 
  // }
  //   let filtered = list.filter(filterScore)
  // list.forEach(function(e){if (e > 18){
  //     list.pop(e)
  //     list.pop(e)
  //   }
  //   })
   list.forEach(function(element)
    {passedStudents += element})
    scoreAve = passedStudents/list.length
    rounded = Math.round(scoreAve)
    if (rounded > 18) 
    {return 'No pass scores registered.'}
  else return rounded
  }

