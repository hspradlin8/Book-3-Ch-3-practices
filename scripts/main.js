// 1: Write a factory function that creates an object that represents a doctor. 
//The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const doctorInfo = (name, specialty, address) => {
    return {
        "name": name,
        "specialty": specialty,
        "address": address
    }
}

console.log(doctorInfo("Dr. Sloth", "Hematologists", "PO BOX 455 LakeView Drive, Nashville, TN" ));

// Lightning Exercise 2: Write a factory function that creates an object that 
// represents a pet. 
// The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array 
// stored in a variable named BowWowKennels

const petFun = (name, breed,) => {
    return {
        "name": name,
        "breed": breed
    }
}
console.log(
petFun("Henry", "pitbull"),
petFun("Jerry", "maincoon"),
petFun("Lucy", "chihuahua")
);
const BowWowKennels = []

BowWowKennels.push(petFun("Henry", "pitbull"),
petFun("Jerry", "maincoon"),
petFun("Lucy", "chihuahua"))

console.log(BowWowKennels)

// Music Row:
// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
//1. Create an array for each of these record labels.

// 2.Create a factory function for each possible genre (e.g. createBluegrassArtist()). 
// 3.Then invoke the appropriate function for each of the following artists and place the
//  resulting object in the corresponding label array.

// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old

const JumpStop = [] //rap and funk artist
const Chatten = [] // country and bluegrass artist
const Polar = [] // pop artist
  
createRapArtist = (name, age, artistType) => {
    return{
        "name" : name,
        "age" : age,
        "artistType" : artistType
    }
}

createFunkArtist = (name, age, artistType) => {
    return{
        "name" : name,
        "age" : age,
        "artistType" : artistType
    }
}

createCountryArtist = (name, age, artistType) => {
    return{
        "name" : name,
        "age" : age,
        "artistType" : artistType
    }
}

createBluegrassArtist = (name, age, artistType) => {
    return{
        "name" : name,
        "age" : age,
        "artistType" : artistType
    }
}

createPopArtist = (name, age, artistType) => {
    return{
        "name" : name,
        "age" : age,
        "artistType" : artistType
    }
}

Chatten.push(createBluegrassArtist("Bartholomew Danielson" , "23 years old" , "Bluegrass artist "));
JumpStop.push(createFunkArtist("Dre Funkz" , "25 years old" , "Funk artist"));
JumpStop.push(createRapArtist("Dusta Grimes", "21 years old", "Rap artist"), ("Loyoncé Branis", "27 years old","Rap artist"));
Polar.push(createPopArtist("Jensen Brown", "20 years old", "Pop artist"),("Austin Kinkaid" , "22 years old", " Pop artist"));

console.log(Chatten);
console.log(JumpStop);
console.log(Polar);