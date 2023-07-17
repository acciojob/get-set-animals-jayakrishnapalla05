//complete this code
class Animal {
	Constructor(species)
	{
		this.species=species;
	}
	getter species(){
		return this.species;
	}
	makeSound(){
		console.log("Sound making");
	}
}

class Dog extends Animal {
	purr(){
		console.log("purr");
	}
}

class Cat extends Animal {
	bark(){
		console.log("woof");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
