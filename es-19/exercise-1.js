const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};


const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

console.log(person1);
console.log(person2);


/*MODIFICANDO IL VALORE DI PERSON2 SI MODIFIICHERA' 
ANCHE IL VALORE FIRSTNAME PERSON1 QUESTO ACCADE PERCHE' FANNO RIFERIMENTO
ALLO STESSO OGGETTO.*/