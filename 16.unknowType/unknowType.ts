let a:unknown = "this is unkwon type";
a = 12;
a = "usman";

console.log(a);

// let b:string = a; // cannot assign like this the unknown variable ;

if(typeof a === "string"){
let b:string = a;
console.log(b);

}

