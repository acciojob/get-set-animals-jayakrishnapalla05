//complete this code
class Animal {
	Constructor(species)
	{
		this._species=species;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		console.log("The animal makes a sound");
	}
}

class Dog extends Animal {
	constructor(species) {
    super(species);
  }
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	constructor(species) {
    super(species);
  }
	purr(){
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
