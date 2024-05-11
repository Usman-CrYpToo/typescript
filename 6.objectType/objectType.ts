let car1 = {
     name : "bmw",
     modal : 2022
}

console.log("normal object : ", car1);

// we can declare the type object 

let car2:{name: string; modal: number} = {
      name :"toyota",
      modal : 2023
}

console.log("intialize the object type with var::", car2);

// we can intialize a type object and then same it other more object
type objType = {
     name: string;
     modal : number;
}

let car3:objType = {
     name : "supra",
     modal : 1994
}

console.log("intializing object Type :: ", car3);