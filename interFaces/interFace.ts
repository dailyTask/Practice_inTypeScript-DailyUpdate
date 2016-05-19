interface Person{
    
    FirstName:string;
    Lastname:string;
         
}

function greeter(person:Person) {
     return "Hello," + person.FirstName + person.Lastname;
    
}

var user={ FirstName:"Sufiyan", Lastname:"Mansoor"};

document.body.innerHTML=greeter(user);

//in this uses interface function.... 