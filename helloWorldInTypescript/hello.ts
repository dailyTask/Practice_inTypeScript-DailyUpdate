class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var greeter = new Greeter("Hello, world! Welcome Sufiyan To Type Script");
    
document.body.innerHTML = greeter.greet();