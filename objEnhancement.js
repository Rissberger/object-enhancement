function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

function createInstructor(first, last){
    return {
       first,
       last
    };
}






  var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42;
const instructor = {
    firstName: "colt",
    [favoriteNumber]: "This is my fav num"
}



var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

  const instructor = {
    firstName: "colt",
    sayHi(){
        return "hi!"
    },
    sayBye(){
        return this.firstName + "says bye!!!"
    }
  }




  const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"


function createAnimal(species, verb, noise) => {
return { species,
    [verb]() {
        return noise;
    }
 }
}