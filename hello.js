var fn = function(a, b){
	
	if(a > b)
		return a + b
	else
		return a - b;
}


var o  ={

	name:'longman',
	age: 30,
	getName: function(){
		return this.name;

	},
	set: function(name, age){
		this.name = name;
		this.age = age
	}



}

