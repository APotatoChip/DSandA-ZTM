// Single Responsibility Principle

// Bad
class UserSettings {
    constructor(user) {
        this.user = user;
    }
    changeSettings(settings) {
        if (this.verifyCredentials()) {
            // ...
        }
    }
    verifyCredentials() {
        // ...
    }
}

// Good
class UserAuth {
    constructor(user) {
        this.user = user;


    }
    verifyCredentials() {
        // ...
    }
}

class UserSettings {
    constructor(user) {
        this.user = user;
        this.auth = new UserAuth(user);
    }
    changeSettings(settings) {
        if (this.auth.verifyCredentials()) {
            // ...
        }
    }
}

// Open/Closed Principle
// Software entities should be open for extension but closed for modification. 
// Extend the behaviour without modfying the file.

// Liskov Substitution Principle
// Derived objects or types must be substituable for their base. Ex: Shape, Rectangles, Squares

// Interface Segregation Principle
// A client should not be force to be dependant on interfaces he doesnt use

// Dependancy Inversion Principle
// High level modules should not depend on low level modules. Both should depend on abstractions.
// Abstractions should not depend upon details. Details should depend on abstractions.