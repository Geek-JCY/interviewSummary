"use strict"
 	function Person(){

		console.log(this);

		this.name = 'jack';

		console.log(this);
	}

	Person.prototype.sayThis = function(){
		console.log(this);
	}

	Person.prototype.sayThis();

	new Person();


