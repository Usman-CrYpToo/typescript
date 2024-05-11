function combine (no1: number | string , no2: number | string, type: "as-Number" | "as-String") {
     
    if(type === "as-Number") {
         return (+no1) + (+no2);
    }
    else {
         return no1.toString() + no2.toString();
    }
}

console.log("number params :: ", combine(12,12, "as-Number"));

console.log("string param :: ", combine("12", "12", "as-String"));