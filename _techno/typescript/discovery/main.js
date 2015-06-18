var Discovery = (function () {
    function Discovery() {
    }
    Discovery.prototype.Discovery = function () {
        this._property1 = 47;
        this._property2 = 42;
    };
    Discovery.prototype.DoSomething = function () {
        alert("Bien vu l'artiste !");
        alert('Tes prop valent : ${this._property1} and ${this._property1}. ');
    };
    Discovery.prototype.greeter = function (person) {
        return "Hello, " + person.firstname + " " + person.lastname;
    };
    return Discovery;
})();
var test = new Discovery();
test.DoSomething();
var user = { firstname: "Jane", lastname: "User" };
console.log(test.greeter(user));
