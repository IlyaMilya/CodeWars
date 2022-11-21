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