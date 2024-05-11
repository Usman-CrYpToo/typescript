function names():string {
   return "usman";

}

console.log("return Type string :: ", names());


function mutliTypeReturn():string | number | boolean {
     return 12;
}

console.log("multi return types :: " ,mutliTypeReturn())

function onlyString(str:string): string {
     return str;
}

console.log(onlyString("usman"));
