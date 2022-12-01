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
   
 //   switch(health) {
 //       case bmi <= 18.5:
 //      return "Underweight";
 //       case bmi <= 25.0:
 //       return "Normal";
 //       case bmi <= 30.0:
 //       return "Overweight";
 //       case bmi > 30:
 //      return "Obese";
 //     }
 //   }
