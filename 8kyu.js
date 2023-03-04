// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends){
    let array=["Ryan", "Keisha", "Maxy", "Jessica", "Kate"]
    let friendArray= []
    for (const element of friends){
      if (element.length ==4) {
        friendArray.push(element)
      }
    }
    return friendArray
  }



//   Write a function which calculates the average of the numbers in a given list.
//   Note: Empty arrays should return 0.

  function findAverage(array) {
  let amount = 0 
  let average = 0
  if (array.length == 0){
  return 0}
else array.forEach(function(element){
   amount += element})
  average = amount/array.length
 return average
  }

//   Very simple, given an integer or a floating-point number, find its opposite.

// Examples:
// 1: -1
// 14: -14
// -34: 34







// // Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function opposite(number) {
    var result = number * -1
     return result
   }

   function bmi(weight, height) {
    let health = weight/height**2
   
   if (health <= 18.5){
     return "Underweight"
   }
   else if (health <= 25.0) {
    return "Normal"
   }
   if (health <= 30.0){
     return "Overweight"
   }
   else if (health > 30){
     return "Obese"
   }
   }


 //Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

 function invert(array) {
    let newArray= []
    array.map((e)=> {
     let y = e * -1
     newArray.push(y)})
      return newArray
    };




    // Given an array of integers, return a new array with each value doubled.
    // For example:
    // [1, 2, 3] --> [2, 4, 6]
    
    function maps(x){
        let newArray = []
        x.forEach((e)=> { 
          let y = e * 2 
          newArray.push(y)})
        return newArray
        }









        // Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

        // Examples (Input -> Output)
        // * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
        // * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
        // * [42, 54, 65, 87, 0]             -> min = 0, max = 87
        // * [5]                             -> min = 5, max = 5

        var min = function(list){
          list.sort(function(a,b){return a-b})
          let lowest = list[0];
        return lowest;
      }
      
      var max = function(list){
        list.sort(function(a,b){return b-a})
          let highest = list[0];
        return highest;
      }






//       Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

      function paperwork(n, m) {
 
        if (n < 0 || m < 0){
          return 0
        }
          else pages = n * m
          return pages
        }






        // We need a function that can transform a string into a number. What ways of achieving this do you know?
  // Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
  
  
  const stringToNumber = function(str){
    let num = parseInt(str)
     return num;
   }