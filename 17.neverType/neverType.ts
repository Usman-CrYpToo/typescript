// when dont return any type it is known as never type

function neverType(port:number):never{
     throw Error(`the server error ${port}`); // this will break the javascript engine;
}

neverType(3000);