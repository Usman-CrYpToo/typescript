// when dont return any type it is known as never type
function neverType(port) {
    throw Error("the server error ".concat(port));
}
neverType(3000);
