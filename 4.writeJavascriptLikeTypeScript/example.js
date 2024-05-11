
function add(no1, no2) {
 
    if(typeof(no1) === 'number' && typeof(no2) === 'number') {
         console.log(no1 + no2);
     }
     else {
        throw new Error("params are not a number");
     }
  
}

add(12,"12") // this will throw error