class Animal {
	constructor(){
		this.type = 'animal'
		this.hi = function(){
			console.log('hi');
		}
	}
	says(say){
		console.log(this.type+' say '+say)
	}
}

// let animal = new Animal()
// animal.says('hello')
// animal.hi();


class Cat extends Animal {
	constructor(){
		super()
		this.type = 'cat';
	}
}

let cat = new Cat();
cat.says('hello');

/*


 */