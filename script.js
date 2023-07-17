//complete this code
class Animal {
	constructor(species)
	{
		this.species=species;
	}
	get species(){
		return this.species;
	}
	makeSound(){
		console.log(`The ${this.species} makes a sound`);
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof");
	}
	
}

class Cat extends Animal {
	
	purr(){
		console.log("purr");
	}
}
let c = new Cat("black");
c.makeSound();
c.purr();
let d = new Dog("blair");
d.makeSound();
d.bark();
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
