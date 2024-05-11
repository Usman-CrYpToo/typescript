// we can make the any datatype array Type

let arr:string[] = ["usman", "zaid", "basit"]; // so i can only add string dataType 


//arr[2] = 12; // this will not going to work

arr.push("ali")
console.log("only string data :: ", arr);

let mentionTypes:[string, number, boolean] = ["usman", 44, true]
console.log("mention the dataType :: ",mentionTypes);

let random:any[] = ["usman", 12, true];
console.log("random dataType in array :: ",random);

let onlyNumber:number[] = [12, 33, 44];
console.log("only Number array ::  ", onlyNumber);