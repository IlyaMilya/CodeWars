
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





  // Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

  // Example:
  
  // "riley" --> "Hello Riley!"
  // "JACK"  --> "Hello Jack!"

  var greet = function(name) {
    let named = name.toLowerCase()
    let index = name.length
  return (`Hello ${name[0].toUpperCase()+named.slice(1, index )}!`)
  };


//BusStop Algo
  // There is a bus moving in the city which takes and drops some people at each bus stop.
  // You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
  // Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
  // Take a look on the test cases.
  // Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
  // The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
  
  var number = function(busStops){
    // a) A loop will sum up the total number of onboarded passengers
    // b) Another loop will sum up the total number of passengers that got off the bus
    // c) The difference of the sums from both loops will be the answer
    let passengersRiding = 0
      for (stop of busStops){
      passengersRiding += stop[0]
    }
    let passengersLeave = 0
      for (stop of busStops){
      passengersLeave += stop[1]
    } 
   return passengersRiding - passengersLeave
  }
  //What I have to do in the loops: 
  // a) target index [0] of each bus stop in the first loop and sum up the
  // passenger count of all index [0]s of the arrays (all bus stops)
  // b) target index [1] of each bus stop in the second loop and sum up the leaving 
  // passenger count
  // c) add up the sums from both loops and return the remaining passengers after last stop