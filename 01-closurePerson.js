function personCreatedClosure(personName) {
let obj = {
name: personName
};
return function () {
    console.log(obj.name);
}
};

let myClosure = personCreatedClosure('Angelina');

myClosure();