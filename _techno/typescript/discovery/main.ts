interface Person {
    firstname: string;
    lastname: string;
}

class Discovery {
	_property1 : number;
	_property2 : number;
	
	Discovery()
	{
		this._property1 = 47;
		this._property2 = 42;		
	}
	
	DoSomething()
	{
		alert("Bien vu l'artiste !");
		alert('Tes prop valent : ${this._property1} and ${this._property1}. ');
	}
	
	greeter(person: Person) {
	    return "Hello, " + person.firstname + " " + person.lastname;
	}
}

var test = new Discovery();
test.DoSomething();

var user = {firstname: "Jane", lastname: "User"};
console.log(test.greeter(user));