let arr: string[] | number[] = ["string", "no number"]; // you can rather keep it with full number array or string array you cannot mix the datatypes;
console.log(arr);


type arr = [string, number, boolean?];

let tuple: arr = ["usman", 19];
tuple.push(true);

console.log(tuple)