function greeter(person) {
    return "Hello," + person.FirstName + person.Lastname;
}
var user = { FirstName: "Sufiyan", Lastname: "Mansoor" };
document.body.innerHTML = greeter(user);
//in this uses interface function....  
