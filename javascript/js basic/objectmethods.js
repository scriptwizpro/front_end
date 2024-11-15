let person = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person.greet();