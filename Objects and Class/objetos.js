/*let person = {
    firstName: 'John',
    lastName: 'Lenon'
};

function greet(){
    console.log("Hello World");
}

person.greet = greet;
person.greet();
console.log(person.firstName)
*/

let person = {
    firstName: 'Jhon',
    lastName: 'Doe',
    /*greet: function () {
        console.log("HelloWorld!");
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }*/
};

function greet(){
    console.log("Hello World")
}
person.greet = greet;

function getFullName(){
    return this.firstName + ' ' + this.lastName
}
person.getFullName = getFullName;
person.greet()
console.log(person.getFullName());