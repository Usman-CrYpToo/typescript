function union(no1:number | string, no2:number | string) {
    if(typeof no1 === 'number' && typeof no2 === 'number') {
         return no1 + no2;
    }
    else {
         return no1.toString() + no2.toString();
    }
}

console.log("first only number ::", union(12,12 ));

console.log("string data now :: ", union("12","12"))